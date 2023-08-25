import React from "react";
import logo from "../src/assets/hero-logo.png"

const Navbar = () => {
    return ( 
        <nav>
            <img src={logo} alt="" className=".nav--logo"/>
        </nav>
     );
}
 
export default Navbar;