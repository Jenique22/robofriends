import React, { useState, useEffect, Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { connect } from 'react-redux';

import {setSearchField} from '../actions'

const mapStateToProps =state => {
  return{
    searchField: state.searchRobots.searchField
  
  }
}

const mapDispatchToProps =(dispatch) => {
  return{
  onSearchChange: (event) => dispatch(setSearchField(event.target.value))
}
}

/*class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      
    }
  }*/

  function App (){

    const [robots, setRobots] =useState([]);
    const[searchfield, setSearchfield] =useState('')
    const [count, setCount] =useState(0)

  

  /*ComponentDidMount() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }*/

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => {setRobots(users)});
},[])

  /*const onSearchChange = (event) => {
    setSearchfield( event.target.value )
  }*/
  
  const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
  


export default connect(mapStateToProps, mapDispatchToProps) (App);