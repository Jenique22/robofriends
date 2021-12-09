import React, {Component } from 'react';
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

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  /*function App (){

    const [robots, setRobots] =useState([]);
    const[searchfield, setSearchfield] =useState('')
    const [count, setCount] =useState(0)*/

  

  /*ComponentDidMount() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }*/

 /* useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => {setRobots(users)});
},[])*/

  /*const onSearchChange = (event) => {
    setSearchfield( event.target.value )
  }*/
  
  render() {
    const { robots, searchField, onSearchChange, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          { isPending ? <h1>Loading</h1> :
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    );
  }
}
  


export default connect(mapStateToProps, mapDispatchToProps) (App)