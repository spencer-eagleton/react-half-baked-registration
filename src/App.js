import { NavLink, Switch } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
// import SignUp from './Views/SignUp';
// import SignIn from './Views/SignIn';
import './App.css';
import Auth from './Views/Auth';
import { getUser } from './services/users';
import { useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <Switch>
          {/* <Route path="/signin" exact>
            <SignIn />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route> */}
          <Route path="/auth" exact>
            <Auth />
          </Route>
          <Route path="/" exact>
            {currentUser && <h1>I am signed in</h1>}
            {!currentUser && <h1>I am not signed in</h1>}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
