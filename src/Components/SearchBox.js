
import React from 'react';


const SearchBox = ({searchField, searchChange}) => {
    return (    
        <div className = 'pa2' > 

            <input 
                className = 'pa3 ba b--green bg-lightest-blue' 
                type = 'search' 
                placeholder = 'Search Robots' 
                onChange = {searchChange}
            />
        </div>
    );
}


export default SearchBox;





// Below is old code


// const SearchBox = () => {
//     return (    
//         // Below added some padding to the DIV Element
//         <div className = 'pa2' > 
//         {/* 
//             Added Some padding to the input box as well. 
//             When you click in the box, the border will go from Green to Blue
//          */}
//             <input 
//                 className = 'pa3 ba b--green bg-lightest-blue' 
//                 type = 'search' 
//                 placeholder = 'Search Robots' 
//             />
//         </div>
//     );
// }

