import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PageWithLogin from './PageWithLogin';

function Login() {

    return (

        <PageWithLogin
            title="Вход"
            name="login"
            buttonText="Войти"
            onSubmit={onSubmitLogin}
        />
    )
}

export default Login;