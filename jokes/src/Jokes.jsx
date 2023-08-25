import React from "react";
import './App.css'

const Jokes = (props) => {
    return ( 
        <div className="jokes-box">
            {props.Setup && <h3 className="setup">{props.Setup}</h3>}
            <p className="punchline">{props.Punchline}</p>
        </div>
     );
}
 
export default Jokes;