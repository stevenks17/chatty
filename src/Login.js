import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import { auth, provider } from "./firebase"

function Login() {
    const signIn = () => {
        //google redirect login
        auth.signInWithPopup(provider).catch((error) => alert(error.message))
    }
    return (
        <div className="login">
                <h1>CHATTY</h1>

            <div className="login__logo">
            </div>   

            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
