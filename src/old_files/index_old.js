
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from '../CardList';


// Robots Object is exported from the Robots JS file below
import {robots} from '../Robots'
import 'tachyons';

import * as serviceWorker from '../serviceWorker';

// We need to make the code below more dynamic instead of hardcoding the Array entries
ReactDOM.render(
    <CardList robots = {robots}/>
    , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



// First we remove all the Default Code from CREATE-REACT-APP
// Below are some of the DEFAULT code

// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));



// import Card from './Card';

// ReactDOM.render(
//     <div>
//         <Card id = {robots[0].id} name = {robots[0].name} email = {robots[0].email} />
//         <Card id = {robots[1].id} name = {robots[1].name} email = {robots[1].email} />
//         <Card id = {robots[2].id} name = {robots[2].name} email = {robots[2].email} />
//     </div>
//     , document.getElementById('root'));





