import React, { useState } from 'react';

import SocialMediaLogin from './SocialMediaLogin';
import LogInForm from './LogInForm';
import SignInForm from './SignInForm';

import auth from '../../firebase';

export default function LogIn() {

    const [loginVisible, setLoginVisibility] = useState(true);
    const [signInVisible, setSignInisibility] = useState(true);

    const handleMailLogIn = (event: React.SyntheticEvent) => {
        event.preventDefault();
        let rta = auth.signInWithEmailAndPassword('hola', 'asd');
        alert(rta);
        console.log(rta)
    }

    const handleSignIn = (event: React.SyntheticEvent) => {
        event.preventDefault();
        let rta = auth.createUserWithEmailAndPassword('tomirodriguez.89@gmail.com', 'pendorchorosa');
        console.log(rta)
    }

    const hadnleSocialMediaLogin = (event: React.SyntheticEvent) => {
        event.preventDefault();
    }

    const showSignInForm = () => {
        setLoginVisibility(false);
        setSignInisibility(true);
    }

    const showLogInForm = () => {
        setLoginVisibility(true);
        setSignInisibility(false);
    }

    return (
        <div className='d-flex align-items-center h-100 p-2'>
            <div className="container">
                <div className="row" style={{ boxShadow: "10px 0px 30px rgba(56, 56, 56, 0.4" }}>
                    <div className="col-12 col-md-7 p-5 my-auto">
                        {
                            loginVisible ?
                                <LogInForm
                                    onLogIn={handleMailLogIn}
                                    onRegisterClicked={showSignInForm} />
                                :
                                <SignInForm
                                    onSignIn={handleSignIn}
                                    onLogInClicked={showLogInForm} />
                        }
                    </div>
                    <div className="col-12 col-md-5 p-5  bg-darkblue d-none d-md-block">
                        <SocialMediaLogin
                            onSocialMediaLogIn={hadnleSocialMediaLogin} />
                    </div>
                </div>
            </div>
        </div>
    )
}