import React from "react";
import './App.css'
import { useState } from "react";

const Jokes = (props) => {

    const [isShown, setIsShown] = useState(false)

    function toggleShown(){
        setIsShown(prevIsShown =>{
            return(
                prevIsShown = !prevIsShown
            )
        })
    }
    return ( 
        <div className="jokes-box">
            {props.Setup && <h3 className="setup">{props.Setup}</h3>}
            {isShown && <p className="punchline">{props.Punchline}</p>}
            <button onClick={toggleShown}>Show Punchline</button>
        </div>
     );
}
 
export default Jokes;