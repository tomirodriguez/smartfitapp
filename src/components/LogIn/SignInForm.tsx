import React, { useState } from 'react'
import PasswordInput from './PasswordInput';

export default function SignInForm(props: { onSignIn: Function, onLogInClicked: Function }) {

    const [main, setMail] = useState('');
    const [name, setName] = useState('');
    const [passwd, setPasswd] = useState('');

    const handleMailChange = (event: React.ChangeEvent<HTMLInputElement>) => { setMail(event.target.value) }

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => { setName(event.target.value) }

    const handlePasswdChange = (event: React.ChangeEvent<HTMLInputElement>) => { setPasswd(event.target.value) }

    const handleFormSubmitted = (event: React.SyntheticEvent) => {
        props.onSignIn(event);
    }

    return (
        <form className='d-flex flex-column justify-content-between'
            onSubmit={handleFormSubmitted} >
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <h2 className="text-center font-weight-bold">Crea gratis tu cuenta!</h2>

                <p>
                    Ya tenes una cuenta?
                    <span className='link' onClick={() => props.onLogInClicked()} > Entra! </span>
                </p>
            </div>


            <div className="d-flex flex-column">
                <input className="p-2 my-3 defaultInput" type="text"
                    placeholder="Direccion de mail"
                    onChange={handleMailChange} />
                <input className="p-2 my-3 defaultInput" type="text"
                    placeholder="Nombre"
                    onChange={handleNameChange} />
                <PasswordInput onPasswordChange={handlePasswdChange} />
            </div>

            <button className="py-2 btn btn-primary">Registrate con tu mail</button>
        </form>
    )
}