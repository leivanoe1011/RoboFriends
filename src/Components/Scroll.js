

// JPX allows for the Styles to be populated below without a CSS. 
// This is possible because of REACT.
import React from 'react';


// Children will allow us to pass an Element within an Element. 
// At the parent level we are Scrolling the Card List Component.
const Scroll = (props) => {
    return (
        <div style = {{overflowY: 'scroll', border: '1px solid light-blue', height: '500px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;