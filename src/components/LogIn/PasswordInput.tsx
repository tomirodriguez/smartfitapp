import React, { useState } from 'react'
import './PasswordInput.scss'

export default function PasswordInput(props: { onPasswordChange: Function }) {

    const [isPasswordVisible, setPasswordVisibility] = useState(false);

    const handlePasswordVisibilityClick = (event: any) => {
        setPasswordVisibility(!isPasswordVisible)
        event.target.previousSibling.focus()
    }

    return (
        <div className='p-2 my-3  d-flex align-items-center passwordInput'>
            <input className="flex-grow-1" type={isPasswordVisible ? 'text' : 'password'}
                placeholder="Contrasena"
                onChange={event => props.onPasswordChange(event)} />

            {isPasswordVisible ?
                <i className="far fa-eye" onClick={handlePasswordVisibilityClick} />
                :
                <i className="far fa-eye-slash" onClick={handlePasswordVisibilityClick} />
            }
        </div>
    )
}