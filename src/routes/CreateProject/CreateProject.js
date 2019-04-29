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
                <p>Registering gives you the possibility to actively engage in liking, commenting, funding (coming soon) or creating your own project. Please register a separate account for each project to ensure transparency of funding in future.
                    For registering an account, we ask for a one-time fee of <b>$2.50</b></p>
                <Button color="secondary" variant="contained" title="Register a blockchain-account on Steem" data-name="https://impactn.herokuapp.com/" data-image="https://cdn.steemitimages.com/DQmTcY5JEFWm2Qq1ccWPKXchFtgyEzwd3kAU6GJ6iMdGjaG/SDG.jpg.png" data-referrer="impactn" href="https://widget.steem.ninja/widget.html?referrer=impactn" className="ninja-widget">Register a blockchain-account on Steem</Button>
                {/* <h4>If you already have steem account you can just <Button color="primary" variant="contained" href="/login">Login</Button></h4> */}
                <p>Please contact our service if there are any more questions concerning registration on the blockchain.</p>
            </div>
        );
    }
}

export default withStyles(styles)(CreateProject);