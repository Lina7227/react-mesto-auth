import React from 'react';
import PageWithLogin from './PageWithLogin';

function Login(props) {

    return (

        <PageWithLogin
            title="Вход"
            name="login"
            buttonText="Войти"
            onSubmit={props.onSubmitLogin}
        />
    )
}

export default Login;