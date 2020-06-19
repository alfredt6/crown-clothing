import React from 'react';

import './loginandregister.styles.scss';
import SignIn from '../../components/sign-in/SignIn.component'

const LoginAndRegister = () => {
    return (
        <div className="login-and-register">
            <SignIn />       
        </div>
    )
}

export default LoginAndRegister;