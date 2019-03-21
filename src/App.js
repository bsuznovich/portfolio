import React, { Component } from 'react';
import Nav from './Components/Nav/Nav'
import routes from './routes'
import './App.css';
import './reset.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
        {routes}
      </div>
    );
  }
}

export default App;
