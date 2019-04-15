import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';

import { NoMatch } from './routes/NoMatch/NoMatch';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Contact } from './routes/Contact/Contact';
import { Login } from './routes/Login/Login';
import { Signup } from './routes/Signup/Signup';
import { Sponsor } from './routes/Sponsor/Sponsor';
import Project from './routes/Project/Project';
import Home from './routes/Home/Home';
import { Impressum } from './routes/Impressum/Impressum';
import { Gdpr } from './routes/GDPR/Gdpr';
import Grid from '@material-ui/core/Grid';
// import { logIn } from './services/Auth.service';
import { projectsApi } from './services/Api.service';

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh'
  },
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  link: {
    marginRight: 20,
    color: 'white',
  },
  bar: {
    padding: '0 20%'
  },
  body: {
    marginTop: 64
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      projects: []
    }
  }

  componentDidMount() {
    projectsApi.getProjects().then(projects => {
      this.setState({ projects });
    })
  }

  updateState = (state) => {
    this.setState(state);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.app}>
        <Router>
          <AppBar position="fixed" className={classes.bar}>
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                <Link to="/" className={classes.link}><Button color="inherit">Logo</Button></Link>
              </Typography>

              <Link to="/contact" className={classes.link}><Button color="inherit">Contact</Button></Link>
              <Link to="/login" className={classes.link}><Button color="inherit">Log in</Button></Link>
              <Link to="/signup" className={classes.link}><Button color="inherit">Sign Up</Button></Link>
              <Link to="/sponsor" className={classes.link}><Button color="inherit">Sponsor</Button></Link>

              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>

          <div className={classes.body}>
            <Switch>
              <Route path="/" exact component={() => <Home {...this.state} update={this.updateState} />} />
              <Route path="/contact" exact component={() => <Contact {...this.state} update={this.updateState} />} />
              <Route path="/login" exact component={() => <Login {...this.state} update={this.updateState} />} />
              <Route path="/signup" exact component={() => <Signup {...this.state} update={this.updateState} />} />
              <Route path="/sponsor" exact component={() => <Sponsor {...this.state} update={this.updateState} />} />
              <Route path="/impressum" exact component={() => <Impressum {...this.state} update={this.updateState} />} />
              <Route path="/gdpr" exact component={() => <Gdpr {...this.state} update={this.updateState} />} />
              <Route path="/projects/:id" exact component={(route) => <Project {...this.state} update={this.updateState} id={route.match.params.id} />} />

              <Route component={NoMatch} />
            </Switch>
          </div>

          <AppBar position="static" className={classes.bar}>
            <Toolbar>
              <Grid container item xs={6} justify="flex-start" alignItems="center" direction="row">
                <Link to="/" className={classes.link}><Button color="inherit">Home</Button></Link>
                <Link to="/impressum" className={classes.link}><Button color="inherit">Impressum</Button></Link>
                <Link to="/gdpr" className={classes.link}><Button color="inherit">GDPR</Button></Link>
              </Grid>

              <Grid container item xs={6} justify="flex-end" alignItems="center" direction="row">
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Toolbar>
          </AppBar>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);
