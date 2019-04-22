import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  block: {
    margin: '20px 5%'
  },
}

class CreateProject extends PureComponent {
    componentDidMount() {
        window.SteemNinja.bindWidgetToDOM();
        window.addEventListener('ninja.checkout', (e) => {
            window.location.href = '/initial-post';
        });
    }

    render() {
        return (
            <div className={this.props.classes.block}>
                <h4>In Order to create a Project you will need to create an account within Steem Blockchain ecosystem.</h4>
                <p><b>NOTE: If you have steem account and you want only to vote/comment on the projects you can ignore this part.</b></p>
                <p>Project creation will cost you <b>2.42 euro</b></p>
                <Button color="secondary" variant="contained" title="Register a blockchain-account on Steem" data-name="https://impactn.herokuapp.com/" data-image="https://cdn.steemitimages.com/DQmTcY5JEFWm2Qq1ccWPKXchFtgyEzwd3kAU6GJ6iMdGjaG/SDG.jpg.png" data-referrer="impactn" href="https://widget.steem.ninja/widget.html?referrer=impactn" className="ninja-widget">Register a blockchain-account on Steem</Button>
                {/* <h4>If you already have steem account you can just <Button color="primary" variant="contained" href="/login">Login</Button></h4> */}
            </div>
        );
    }
}

export default withStyles(styles)(CreateProject);