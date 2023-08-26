import React from "react";

const Hero = (props) => {
    return ( 
        <div className="hero-box">
            <div className="img-box">
                <img src={props.imageUrl} alt="" />
            </div>
            
            <div className="content-box">
                <div className="child-heading">
                    <div className="map-add"><i class="fa fa-map-marker"></i><span className="location">{props.location}</span></div>
                    <a href={props.googleMapLink}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <h3 className="dates"> <span>{props.startDate}</span> - <span>{props.endDate}</span></h3>
                <p>{props.description}</p>
            </div>
        </div>
     );
}
 
export default Hero;