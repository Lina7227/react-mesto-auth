import React from 'react';

function InfoTooltip(props) {

    return (

        <div className={`popup ${props.isOpen ? "popup_opened" : ""}`}>
            <div className="popup__content popup__content_info">
                <button
                    type="button"
                    aria-label="закрыть попап"
                    className="popup__close popup__close_form popup__close_info"
                    onClick={props.onClose}>
                </button>
                <form name="info" className="form form_info">
                    <div className={`popup__info-image ${!props.isLuck ? "popup__info-image_type_error" : ""}`}></div>
                    <h2 className="form__title_info">{!props.isLuck ? "Что-то пошло не так! Попробуйте еще раз." : "Вы успешно зарегистрировались!" }</h2>   
                </form>                
            </div>
        </div>

    )
}

export default InfoTooltip;