import React, { useEffect } from 'react'
import auth from '../../firebase';
import { useHistory } from 'react-router-dom';

export default function Dashboard() {

    let history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(!user){
              history.push('/login');
            }
          })
    }, [])

    return (
        <>
            <div>
                HOLIS PAULITA, TE VAS A COMER TODA MI VERGA :)
            </div>
            <button onClick={() => {auth.signOut().then(()=> history.push('/login'))}}>Log Out</button>
        </>
    )
}