
import React, {Component} from 'react';
import CardList from '../CardList';
import {robots} from '../Robots'; // robots is the object exported from the Robots.js library
import SearchBox from '../SearchBox';


class App extends Component  {

    constructor() {
        super()
        this.state = {
            robots: {robots},
            searchField: ''
        }
    }

    onSearchChange(event) {
        // console.log(event.target.value);
        const filteredRobots = this.state.robots.filter( robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        });
        console.log(filteredRobots);
    }

    render() {
        return (
            // tc class will Center all the object below
            <div className = 'tc' >
                <h1>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList robots = {robots} />
            </div>
        );
    }
}


export default App;



// Below is the old code



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



