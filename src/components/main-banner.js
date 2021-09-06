import React from "react";
import Profile from '../images/profile-demo.jpg'
export default function Banner(){
    return(
        <section className='banner' id="home">
            <div className="text">
                <div className='slide-left banner-text'>
                    <h2>Srinath<br />Unta</h2>
                </div>
                <div className="vl"></div>
                <div className='slide-right banner-text'><h2>Full-stack<br />Developer</h2></div>
            </div>
            
        </section>
    )
}