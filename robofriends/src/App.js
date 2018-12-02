import React, { Component } from 'react';
import './App.css';

import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import {robots} from './components/Robots';



class App extends Component {

  constructor(){
    // STATE
    super();
    this.state={
      robots: robots,
      searchField: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
  }

  render() {
    // Filter Search
    const filterRobots = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })




    return (
      
      <div className="App tc">
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filterRobots}/>
      </div>
    );
  }
}

export default App;
