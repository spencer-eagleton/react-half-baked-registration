import { NavLink, Switch } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import SignIn from './Views/SignIn';
import './App.css';
import SignUp from './Views/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <Switch>
          <Route path="/signin" exact>
            <SignIn />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
