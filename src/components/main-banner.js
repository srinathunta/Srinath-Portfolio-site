import React from "react";
import Profile from '../images/profile-demo.jpg'
export default function Banner(){
    return(
        <section className='banner'>
            <div className="text">
                <div className='slide-left banner-text'>
                    <img className="profile-image" src={Profile} alt="profile-image"/>
                </div>
                <div className="vl"></div>
                <div className='slide-right banner-text'><h2>Srinath<br />Unta</h2></div>
            </div>
            
        </section>
    )
}