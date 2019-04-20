import React, {PureComponent} from 'react';
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
//   commentOnPost,
// getProjectUpdates
// submitPost
} from '../../services/SteemApi';

export class Login extends PureComponent{
    componentDidMount() {
        window.SteemNinja.bindWidgetToDOM();

        //   getProjects().then(res => console.log(res));
//   getProjectDetails('spread-goood').then(res => console.log(res));
//   getProjectComments('spread-goood').then(res => console.log(res));
    // getLoggedUserInfo().then(res => console.log(res));
    // getProjectUpdates().then(res => console.log(res));
    // submitPost('random-tag', 'Test Steemit API Title', 'Test content').then(res => console.log(res));
    // voteOnPost('spread-goood', 100);
    // commentOnPost('spread-goood', 'test', 'test');
    }

    render () {
        return (
            <div>
            {!isLoggedIn && <a href={loginURL}>Login</a>}
            {isLoggedIn && <p>{steem_user}: <button onClick={logOut}>Logout</button></p>}
            {<a title="Test Steem Ninja WIdget" data-name="https://impactn.herokuapp.com/" data-image="" data-referrer="vadkuhtin" href="https://widget.steem.ninja/widget.html?referrer=vadkuhtin" className="ninja-widget">Buy a Steem Account</a>}
            </div>
        );
            }
}
