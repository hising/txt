import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import { Splash, Game, User} from './views';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
              <div className="header">
                  <h2>The Mystery of the Deaf Moose</h2>
                  <Link className="user-link" to="/user">User</Link>
              </div>

              <Route exact path="/" component={Splash} />
              <Route path="/game" component={Game}/>
              <Route path="/user" component={User}/>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
