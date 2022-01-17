import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup ';
import DeleteCardPopup from './DeleteCardPopup';
import ProtectedRoute from './ProtectedRoute';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function App() {

  const [isEditAvatarPopupOpen, onEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, onEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, onAddPlacePopupOpen] = React.useState(false);
  const [isDeleteCardPopup, onDeleteCardPopup] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({link: '', name: ''});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [cardDelete, setCardDelete] = React.useState({});
  const [profilePopupButtonText, setProfilePopupButtonText] = React.useState('Сохранить');
  const [avatarPopupButtonText, setAvatarPopupButtonText] = React.useState('Сохранить');
  const [placePopupButtonText, setPlacePopupButtonText] = React.useState('Создать');
  const [removePopupButtonText, setRemovePopupButtonText] = React.useState('Да');

  function handleEditAvatarClick() {
    onEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    onEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    onAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardDeleteClick(card) {
    onDeleteCardPopup(true);
    setCardDelete(card); 
  }

  function closeAllPopups() {
    onEditAvatarPopupOpen(false);
    onEditProfilePopupOpen(false);
    onAddPlacePopupOpen(false);
    onDeleteCardPopup(false);
    setSelectedCard({link: '', name: ''});
    setCardDelete({link: '',  name: ''});
  }

  React.useEffect(() => {
    function handleOverlayClick(evt) {
      if (evt.target.classList.contains('popup')) {
        closeAllPopups();
      }
    }
    document.addEventListener('mousedown', handleOverlayClick);

    return () => {
      document.removeEventListener('mousedown', handleOverlayClick);
    }

  },[]);

  React.useEffect(() => {
    function handleEscapeClick(evt) {
      if (evt.key ==='Escape') {
        closeAllPopups();
      }
    }
    document.addEventListener('keyup', handleEscapeClick);

    return () => {
      document.removeEventListener('keyup', handleEscapeClick);
    }

  },[]);
  
  React.useEffect(() => {
    Promise.all([api.getUser(), api.getInitialCards()])
      .then(([userData, cards]) => {
        setCurrentUser(userData);
        setCards(cards)
      })
      .catch((err) => {
        console.log(err);
      })

  }, [])

  function handleCardLike(card) {
      
    const isLiked = card.likes.some(like => like._id === currentUser._id);
      
    api.changeCardLikeStatus(card._id, !isLiked)
      .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => {
          console.log(err);
      })
  }
    
  function handleCardDelete(card) {
    setRemovePopupButtonText('Удаление...')
    api.removeCard(card._id)
      .then(() => {
        const newCards = cards.filter((evt) => evt._id !== card._id);
        setCards(newCards);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setRemovePopupButtonText('Да');
      })
  }

  function handleUpdateUser(user) {
    setProfilePopupButtonText('Сохранение...');
    api.setUser(user)
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setProfilePopupButtonText('Сохранить');
      })
  }

  function handleUpdateAvatar(avatar) {
    setAvatarPopupButtonText('Сохранение...');
    api.setUserAvatar(avatar)
      .then((avatar) => {
        setCurrentUser(avatar);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setAvatarPopupButtonText('Сохранить');
      })
  }

  function handleAddPlaceSubmit(cardNew) {
    setPlacePopupButtonText('Добавление...');
    api.addCard(cardNew)
      .then((cardNew) => {
        setCards([cardNew, ...cards]);
        closeAllPopups();

      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setPlacePopupButtonText('Создать');
      })
  }
  
  return (
    <div className="page">
     
     <CurrentUserContext.Provider value={currentUser}>
        <Header/>
        <Switch>
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDeleteClick}
            cards={cards}
          />
          <Route path="/sign-up">
            
          </Route>
          <Route path="/sign-in">
            
          </Route>
        </Switch>
        <Footer/>

        <EditProfilePopup 
          isOpen={isEditProfilePopupOpen} 
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          buttonSubmitText={profilePopupButtonText}
        /> 

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          buttonSubmitText={placePopupButtonText}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          buttonSubmitText={avatarPopupButtonText}
        />

        <DeleteCardPopup
          isOpen={isDeleteCardPopup}
          onClose={closeAllPopups}
          onSubmitDeleteCard={handleCardDelete}
          card={cardDelete}
          buttonSubmitText={removePopupButtonText}
        />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </CurrentUserContext.Provider>

    </div>
  );
}

export default App;
