
import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {
    return (
        <div>
            {     
                robots.map((user, i) => {
                    return (
                        <Card 
                            key = {i} 
                            id = {user.id} 
                            name = {user.name} 
                            email = {user.email} 
                            website = {user.website}
                        />
                    );
                })
            }
        </div>
    );
}


export default CardList;


// Below is the old code


// Second Iteration of the Dynamic Function
// Removed the reference to Robots within the Return of the Card and used USER instead
// const CardList = ({robots}) => {
//     return (
//         <div>
//             {     
//                 robots.map((user, i) => {
//                     return (
//                         <Card 
//                             key = {i} 
//                             id = {robots[i].id} 
//                             name = {robots[i].name} 
//                             email = {robots[i].email} 
//                         />
//                     );
//                 })
//             }
//         </div>
//     );
// }



// This is the First iteration of the Dynamic Function
// We removed the Const Card Array where it was defined. 
// const CardList = ({robots}) => {
//     const cardsArray = robots.map((user, i) => {
//         return <Card 
//             key = {i} 
//             id = {robots[i].id} 
//             name = {robots[i].name} 
//             email = {robots[i].email} />
//         }
//     )
//     return (
//         <div>
//             {cardsArray}
//         </div>
//     );
// }



// This is the original Static Function
// const CardList = ({robots}) => {
//     return (
//         <div>
//             <Card id = {robots[0].id} name = {robots[0].name} email = {robots[0].email} />
//             <Card id = {robots[1].id} name = {robots[1].name} email = {robots[1].email} />
//             <Card id = {robots[2].id} name = {robots[2].name} email = {robots[2].email} />
//         </div>
//     );
// }






