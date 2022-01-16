import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { getUser, logout } from './services/users';

import Auth from './views/Auth/Auth';
import Todo from './views/Todo/Todo';

import './App.css';

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
          <Route exact path="/">
            {currentUser && (
              <>
                <h2 className="logout-button" onClick={logoutUser}>
                  logout
                </h2>
                <Todo currentUser={currentUser} setCurrentUser={setCurrentUser} />
              </>
            )}
            {!currentUser && (
              <>
                <h1 className="app-name">what</h1>
                <h2 className="subheader">a to-do app</h2>
                <Auth setCurrentUser={setCurrentUser} />
              </>
            )}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
