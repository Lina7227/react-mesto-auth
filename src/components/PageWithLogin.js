import React from 'react';

function PageWithLogin() {

    return (

        <div className="auth">
            <p className="auth__welcome">
                Регистрация
            </p>
            <form onSubmit={handleSubmit} className="auth__form">Email
                <label htmlFor="email" className="auth__label">
                    <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    className="auth__input"  
                    placeholder="Email" 
                    
                    onChange={handleChange} 
                    />
                </label>
                
                <label htmlFor="password" className="auth__label">
                    <input 
                    id="password" 
                    name="password" 
                    type="password" 
                    className="auth__input"
                    placeholder="Пароль"
                    value={password || ""} 
                    onChange={handleChange} 
                    />
                </label>
                <button 
                    type="submit" 
                    onSubmit={handleSubmit} 
                    className="auth__button">
                    Зарегистрироваться
                </button>
            </form>

            <div className="auth__signin">
                <p className="auth__text">Уже зарегистрированы? </p>
                <Link to="login" className="auth__login-link">Войти</Link>
            </div>
        </div>

    );
}