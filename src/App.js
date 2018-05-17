import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Wanna play?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, asperiores at, blanditiis debitis delectus deleniti, ducimus ea esse explicabo hic itaque mollitia neque nesciunt perspiciatis quaerat quam quas quia voluptatem?</p>
          <a href="#play" onClick={this.launchGame.bind(this)}>Yes</a>
      </div>
    );
  }

    launchGame(event) {
        event.preventDefault();
        alert('launchGame');
    }
}

export default App;
