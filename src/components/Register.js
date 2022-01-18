import React from 'react';
import PageWithLogin from './PageWithLogin';

function Register() {
    

    return (

        <PageWithLogin
            title="Регистрация"
            name="register"
            buttonText="Зарегистрироваться"
            onSubmit={onSubmitRegister}
        />
    )
}

export default Register;