import React from 'react';
import { loginURL, isLoggedIn, username, logOut } from '../../services/SteemApi';

export function Login() {
    return (
        <div>
            {!isLoggedIn && <a href={loginURL}>Login</a>}
            {isLoggedIn && <p>{username}: <a onClick={logOut}>Logout</a></p>}
        </div>
    );
}