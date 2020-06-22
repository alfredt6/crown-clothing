import React from 'react';

import './loginandregister.styles.scss';
import SignIn from '../../components/sign-in/SignIn.component';
import SignUp from '../../components/sign-up/SignUp.component';

const LoginAndRegister = () => {
    return (
        <div className="login-and-register">
            <SignIn />   
            <SignUp />    
        </div>
    )
}

export default LoginAndRegister;