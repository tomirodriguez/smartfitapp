import React, { useState } from 'react'
import PasswordInput from './PasswordInput';

export default function LogInForm(props: { onLogIn: Function, onRegisterClicked: Function }) {


    const [user, setUser] = useState('');
    const [passwd, setPasswd] = useState('');
    const [rememberUser, setRemembeUser] = useState(false);

    const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => { setUser(event.target.value) }

    const handlePasswdChange = (event: React.ChangeEvent<HTMLInputElement>) => { setPasswd(event.target.value) }

    const handleRememberCbxChange = () => { setRemembeUser(!rememberUser) }

    const handleFormSubmitted = (event: React.SyntheticEvent) => {
        props.onLogIn(event, user, passwd);
    }

    return (
        <form className='d-flex flex-column justify-content-between'
            onSubmit={handleFormSubmitted} >
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <h2 className="text-center font-weight-bold">Ingresa a tu cuenta</h2>
                <p>
                    Todavia no tenes una?
                    <span className='link' onClick={() => props.onRegisterClicked()} > Registrate! </span>
                </p>
            </div>

            <div className="d-flex flex-column justify-content-between">
                <input className="p-2 my-3 defaultInput" type="text"
                    placeholder="Direccion de mail"
                    onChange={handleUserChange} />
                <PasswordInput onPasswordChange={handlePasswdChange} />
                <div className="d-flex justify-content-between align-items-center my-3 font-size-small ">
                    <div>
                        <input type="checkbox" name="remember" id="remember"
                            checked={rememberUser}
                            onChange={handleRememberCbxChange} />
                        <span className="ml-2">Recordame</span>
                    </div>

                    <div className="link">Recuperar contrasena</div>
                </div>
            </div>

            <button className="py-2 btn btn-primary">Entra con tu mail</button>
        </form>
    )
}