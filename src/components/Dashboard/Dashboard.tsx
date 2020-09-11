import React, { useEffect, useState } from 'react'
import auth from '../../firebase';
import { useHistory } from 'react-router-dom';

export default function Dashboard() {

    const history = useHistory();

    useEffect( ()=> {
        console.log(auth.currentUser);
        if(!auth.currentUser || !auth.currentUser.emailVerified) history.push('/login')
    },[])

    return (
        <div>
            HOLIS PAULITA, TE VAS A COMER TODA MI VERGA :)
        </div>
    )
}