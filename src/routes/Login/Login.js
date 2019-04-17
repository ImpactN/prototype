import React from 'react';
import {
  loginURL,
  logOut,
  steem_user,
//   steem_ac,
  isLoggedIn,
//   getProjects,
//   getProjectDetails,
//   getProjectComments,
//   getLoggedUserInfo,
//   voteOnPost,
//   commentOnPost
} from '../../services/SteemApi';

export function Login () {
//   getProjects().then(res => console.log(res));
//   getProjectDetails('spread-goood').then(res => console.log(res));
//   getProjectComments('spread-goood').then(res => console.log(res));
    // getLoggedUserInfo().then(res => console.log(res));
    // voteOnPost('spread-goood', 100);
    // commentOnPost('spread-goood', 'test', 'test');
  return (
    <div>
      {!isLoggedIn && <a href={loginURL}>Login</a>}
      {isLoggedIn && <p>{steem_user}: <button onClick={logOut}>Logout</button></p>}
    </div>
  );
}
