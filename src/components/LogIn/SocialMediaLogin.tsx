import React from 'react'
import './SocialMediaLogin.scss'

export default function SocialMediaLogin(props: { onSocialMediaLogIn: Function }) {

    const onFormSubmitted = () => {
        props.onSocialMediaLogIn();
    }

    return (
        <form className="socialMediaLogin d-flex flex-column justify-content-between py-5" onSubmit={onFormSubmitted}>
            <p className="brand text-center">SMARTFIT</p>
            <p className="socialLogInText mb-4">Entra con alguna red social para hacerlo mas rapido</p>
            <button className="btn facebook py-2 my-2  w-100">
                <div className='buttonContent d-flex align-items-center justify-content-center'>
                    <i className="fab fa-facebook-f mr-3"></i>
                    <div className="">Entra con facebook</div>
                </div>
            </button>
            <button className="btn twitter py-2 my-2 w-100">
                <div className='buttonContent d-flex align-items-center justify-content-center'>
                    <i className="fab fa-twitter mr-3"></i>
                    <div className="">Entra con twitter</div>
                </div>
            </button>
            <button className="btn google py-2 my-2 w-100">
                <div className='buttonContent d-flex align-items-center justify-content-center'>
                    <i className="fab fa-google mr-3"></i>
                    <div className="">Entra con google</div>
                </div>
            </button>
        </form>
    )
}