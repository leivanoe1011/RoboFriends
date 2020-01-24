
import React from 'react';


// Here we going to Destructure the Function
// There are two methods to Destructure the function
// This is the preferred Destructured method. 
// The Size of the Cards has to be dynamic as well.
const Card = ({id, name, email, website }) => {
    return (
        <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt = 'robots' src = {`https://robohash.org/${id}?200x200`} />
            <div>
                <h2> {name} </h2>
                
                <p> {email} </p>

                <p> {website}</p>
            </div>
        </div>

    );
}


// This is the second Destructured method. 
// const Card = (props) => {
//     const {id, name, email } = props;
//     return (
//         <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//             <img alt = 'robots' src = {`https://robohash.org/${id}?200x200`} />
//             <div>
//                 <h2> {name} </h2>
//                 <p> {email} </p>
//             </div>
//         </div>

//     );
// }



// Below we are passing Props instead, to ensure the code is dynamic. 
// Substituted the Single Quotes with Tilde (`) under the SRC element
// const Card = (props) => {
//     return (
//         <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//             <img alt = 'robots' src = {`https://robohash.org/${props.id}?200x200`} />
//             <div>
//                 <h2> props.name </h2>
//                 <p> props.email </p>
//             </div>
//         </div>

//     );
// }

// This is the original function design; however, this is not dynamic (static). 
// const Card = () => {
//     return (
//         <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//             <img alt = 'robots' src = 'https://robohash.org/text?200x200'></img>
//             <div>
//                 <h2> Jane Doe </h2>
//                 <p> doe.jane@gmail.com </p>
//             </div>
//         </div>

//     );
// }

export default Card;

