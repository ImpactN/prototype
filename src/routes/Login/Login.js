import React from 'react';
import {
  loginURL,
  logOut,
  steem_user,
  steem_ac,
  isLoggedIn,
  getProjects,
  getProjectDetails,
  getLoggedUserInfo
} from '../../services/SteemApi';

export function Login () {
//   getProjects().then(res => console.log(res));
//   getProjectDetails('spread-goood').then(res => console.log(res));
getLoggedUserInfo();
  return (
    <div>
      {!isLoggedIn && <a href={loginURL}>Login</a>}
      {isLoggedIn && <p>{steem_user}: <a onClick={logOut}>Logout</a></p>}
    </div>
  );
}
