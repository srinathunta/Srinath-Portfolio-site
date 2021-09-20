import React from "react";
import Resume from "../documents/Resume-Srinath.pdf"
import Arrow from "../images/right-arrow.png"

export default function About(){
    return(
        <section className="about-me main" id="about">
            <div className="content">
            <h2 className='about-head main-title'>About Me</h2>
            <div className="about-text">
            <div className="about-left">
            <p className='about-text'>Hi all, <br />My name is <span className="highlight"> Srinath Unta</span>. I am a software enginner from Mumbai. I am currently working in Infozzle as a Full-Stack developer. I am skilled in creating and engaging interactive websites. I have Knowledge and experience in PHP, Python language also experience in HTML, CSS and javascript. 
</p>
            <div className="resume-text">
            <a className='about-resume' href={Resume} target="_blank">Resume <img className="right-arrow" src={Arrow} alt="reight-arrow" /></a></div>
            </div>
            <div className="about-right">
                {/* <img src={ProfileImg} /> */}
            </div>
            </div>
            </div>
        </section>
    );
}