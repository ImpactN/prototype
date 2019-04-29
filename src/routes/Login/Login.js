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
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  block: {
    margin: '20px 5%'
  },
}

class Login extends PureComponent{
    componentDidMount() {
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
            <div className={this.props.classes.block}>

            {!isLoggedIn && <div>
                  <p>Login gives you the possibility to like and comment on project posts. Through liking you distribute a reward to a project and earn some small ones yourself
As a project owner you can create update posts when logged in. If you haven’t registered yet, please register.
Please have your active key at hand to login. We recommend not to use your owner key or master password. Owner key or mater password should only be used to change your passwords.</p>
                  <Button color="primary" variant="contained" href={loginURL}>Login</Button>
              </div>}
            {isLoggedIn && <div>
              <p>You are already logged in as <b>{steem_user}</b>. Do you want to logout?</p>
                  <Button onClick={logOut} color="primary" variant="contained">Logout</Button>
              </div>}

            </div>
        );
            }
}

export default withStyles(styles)(Login);
