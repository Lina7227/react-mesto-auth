import logo from '../images/logo.svg';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {

    return (
        <header className={`header ${!isMenu ? "header__block" : ""} ${isMenu ? "header__column" : "" }`}>

            <div className={`header__container ${isMenu ? "header__container_column" : "" } `}>
                <img src={logo} alt="Логотип" className="header__logo"/>
                <button type="button" aria-label="Закрыть меню" onClick={handleCloseMenu} className={`popup__close popup__close_form popup__close_menu ${isMenu ? "popup__close_active" : "" }`}></button>
            </div>

            <div className= {`header__burger-menu ${(!isLoggedIn || isMenu) ? "header__burger-menu_inactive" : ""}`} onClick={handleMenuClick}>
                <div className="header__burger-line"></div>
                <div className="header__burger-line"></div>
                <div className="header__burger-line"></div>
            </div>

            { (isLocationMain) &&
                <nav className={`header__nav-menu ${isLoggedIn && !isColumnMenu ? "header__nav-menu_inactive" : ""} ${isMenu ? "header__nav-menu_column" : ""} `}>
                    <p className="header__email">{isLoggedIn ? userEmail : ""}</p>
                    {!isLocationSignIn ?
                    <NavLink onClick={!isLoggedIn ? handleSignIn : handleSignOut} className={`header__nav-item ${isLocationMain ? "header__nav-item_active" : ""}`} to={"/sign-in"}>{isLoggedIn ? "Выйти" : "Войти"}</NavLink>
                    :
                    <NavLink className="header__nav-item" activeClassName="header_nav-item_active" to={"/sign-up"}>{!isLoggedIn ? "Регистрация" : ""}</NavLink>
                    }
                </nav>
            }


        </header>

    );
}

export default Header;