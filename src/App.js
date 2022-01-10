import { Switch } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import SignIn from './Views/SignIn';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <SignIn />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
