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
    }

    render() {
        return (
            <div className={this.props.classes.block}>
                <h4>In Order to create a Project you will need to create an account within Steem Blockchain ecosystem.</h4>
                <p>This will cost you <b>2.42 euro</b></p>
                <Button color="secondary" variant="contained" title="Test Steem Ninja Widget" data-name="https://impactn.herokuapp.com/" data-image="" data-referrer="vadkuhtin" href="https://widget.steem.ninja/widget.html?referrer=vadkuhtin" className="ninja-widget">Create a Project</Button>
                <h4>If you already have steem account you can just <Button color="primary" variant="contained" href="/login">Login</Button></h4>
            </div>
        );
    }
}

export default withStyles(styles)(CreateProject);