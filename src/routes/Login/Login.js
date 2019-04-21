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
            {!isLoggedIn && <Button color="primary" variant="contained" href={loginURL}>Login</Button>}
            {isLoggedIn && <div>
              <p>Account: <b>{steem_user}</b></p>
              <Button onClick={logOut} color="primary" variant="contained">Logout</Button>
              </div>}
            </div>
        );
            }
}

export default withStyles(styles)(Login);
