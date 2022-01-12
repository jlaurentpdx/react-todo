import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { getUser, logout } from './services/users';

import Auth from './views/Auth/Auth';
import TodoList from './views/TodoList/TodoList';

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
                <TodoList currentUser={currentUser} setCurrentUser={setCurrentUser} />
                <button onClick={logoutUser} style={{ margin: 'auto', marginTop: '2%' }}>
                  logout
                </button>
              </>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
