

import React, {Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css'


class App extends Component  {

    constructor() {
        super()
        this.state = {
            // be sure to remove the Curly Brackets {robots} 
            // else, you will get a function error
            // robots: robots, 
            robots: [], 
            searchField: ''
        }
    }

    componentDidMount() {
        
        // this.setState ({robots: robots});
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {return response.json()})
            .then(users => {this.setState({robots:users})});
    }

    onSearchChange = (event) => {
        
        this.setState({searchField: event.target.value})

        // console.log(filteredRobots);
    }

    render() {
        
        const {robots, searchField} = this.state;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return !robots.length ?
        <h1>LOADING!!!</h1> :
        (
             // tc class will Center all the object below
             <div className = 'tc' >
                <h1 className = 'f2' >RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                
                <Scroll>
                    <CardList robots = {filteredRobots} /> 
                </Scroll>
             
             </div>

        );
       
    }
}


export default App;



// Below is the old code


// import {robots} from './Robots'; // robots is the object exported from the Robots.js library


// State Object
// Contains the Array of Robots
// Also, the Search Box entry
// const state = {
//     robots: {robots},
//     searchField: ''
// }



// const App = () => {
//     return (
//         // tc class will Center all the object below
//         <div className = 'tc' >
//             <h1>RoboFriends</h1>
//             <SearchBox />
//             <CardList robots = {robots} />
//         </div>
//     );
// }



