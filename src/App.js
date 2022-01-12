import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { getUser, logout } from './services/users';
import Auth from './views/Auth/Auth';

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
                <h1>Welcome.</h1>
                <h2>Now... chill.</h2>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube-nocookie.com/embed/5qap5aO4i9A"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <button onClick={logoutUser} style={{ margin: 'auto', marginTop: '2%' }}>
                  i don&apos;t want to chill (logout)
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
