import React from "react";

const Star = (props) => {
    return ( 
        <img 
            src={`/src/assets/${props.icon}`} 
            className="card--favorite"
            onClick={props.handleToggle}
        />
     );
}
 
export default Star;