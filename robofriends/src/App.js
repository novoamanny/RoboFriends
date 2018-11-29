import React, { Component } from 'react';
import './App.css';

import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import {robots} from './components/Robots';

class App extends Component {
  render() {
    return (
      
      <div className="App tc">
        <h1>Robo Friends</h1>
        <SearchBox/>
        <CardList robots={robots}/>
      </div>
    );
  }
}

export default App;
