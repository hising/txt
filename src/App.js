import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import { Splash, Game} from './views';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
              <Route exact path="/" component={Splash} />
              <Route path="/game" component={Game}/>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
