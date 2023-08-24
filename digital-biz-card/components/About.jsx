import React from "react"
import Charles from "../src/assets/Charlie.png"
import "./styles/About.css"

const About = () => {
    return (
        <div className="about-container">
            <div className="about-img">
                <img src={Charles} alt="Charles" className="hero-img"/>
            </div>
            <div className="about-box">
                <h1 className="hero-name">Charles O. Egesionu</h1>
                <h3 className="skill">Software Engineer</h3>
                <a href="" className="site">www.iamnaeto.tech</a>
                <div className="btns">
                    <a href="mailto:egesionucharlesobimnaeto@gmail.com" className="mail"target="blank"><i class="fa fa-envelope"></i> Email</a><a href="https://www.linkedin.com/in/charles-obimnaetochukwu-egesionu" className="linkedin"target="blank"><i class="fa fa-linkedin-square"></i> LinkedIn</a>
                </div>
            </div>
        </div>
    );
}
 
export default About;