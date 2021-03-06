import { Switch } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
// import SignIn from './Views/SignIn';
// import SignUp from './Views/SignUp';
import { useState } from 'react';
import './App.css';
import { getUser, logout } from './services/users';
import Auth from './Views/Auth';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route path="/signin" exact>
            <SignIn />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route> */}
          <Route path="/" exact>
            {currentUser && (
              <>
                <h1>I am signed in</h1>
                <button onClick={logoutUser}>Log Out</button>
              </>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
          <Route>
            <Auth />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
