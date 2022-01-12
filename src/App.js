import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { getUser } from './services/users';

import Auth from './views/Auth/Auth';
import TodoList from './views/TodoList/TodoList';

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentUser && <TodoList currentUser={currentUser} setCurrentUser={setCurrentUser} />}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
