import React, { Component } from 'react';
import './App.css';

import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import ErrorBoundry from './components/ErrorBoundry';
//import {robots} from './components/Robots';



class App extends Component {

  constructor(){
    // STATE
    super();
    this.state={
      robots: [],
      searchField: ''
    }
  }

  componentDidMount(){
    // http request
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({robots: users});
      });
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
  }

  render() {
    // Filter Search
    const filterRobots = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });

    if(this.state.robots.length === 0){
      return <h1 className='tc'>Loading</h1>
    } else{

      return (
      
        <div className="App tc">
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filterRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
