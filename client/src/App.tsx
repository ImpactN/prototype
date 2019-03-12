import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import { ReactAdvanced } from "./pages/react-advanced/ReactAdvanced";
import { Public } from './pages/public/Public';
import { Protected } from './pages/protected/Protected';
import { NoMatch } from './pages/noMatch/NoMatch';
import { PrivateRoute } from './common/auth/private-route';
import { AuthButton, Login } from './common/auth/auth';

class App extends React.Component {
  public render() {
    return (
      <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/protected">Protected</Link>
          </li>
          <li>
            <Link to="/react">Some Advanced React principles</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/" exact={true} component={Public} />
          <Route path="/login" component={Login} />
          <Route path="/react" component={ReactAdvanced} />
          <PrivateRoute path="/protected" component={Protected} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
