import React, { useState, useEffect } from 'react';

import SocialMediaLogin from './SocialMediaLogin';
import LogInForm from './LogInForm';
import SignInForm from './SignInForm';

import auth from '../../firebase';
import { useHistory } from 'react-router-dom';

export default function LogIn() {

    const [loginVisible, setLoginVisibility] = useState(true);
    // const [signInVisible, setSignInVisibility] = useState(true);
    const history = useHistory();

    useEffect( ()=> {
        auth.onAuthStateChanged( user => {
            if(user && user.emailVerified){
              console.log(user)
              history.push('/')
            }
          })
    },[])

    const handleMailLogIn = (event: React.SyntheticEvent, user: string, passwd: string) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(user, passwd)
            .then(() => history.push('/'))
            .catch(error => console.log(error.code));
    }

    const handleSignIn = (event: React.SyntheticEvent, user: string, passwd: string) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(user, passwd)
            .then(() => { auth.currentUser?.sendEmailVerification() })
            .then(() => {
                alert("Te enviamos un mail para que ferifiques la cuenta. Una vez verificado podes hacer el Log In! :D")
                setTimeout(showLogInForm, 5000);
            })
            .catch(error => alert(error))
    }

    const hadnleSocialMediaLogin = (event: React.SyntheticEvent) => {
        event.preventDefault();
    }

    const showSignInForm = () => {
        setLoginVisibility(false);
        // setSignInVisibility(true);
    }

    const showLogInForm = () => {
        setLoginVisibility(true);
        // setSignInVisibility(false);
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