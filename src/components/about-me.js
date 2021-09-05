import React from "react";
import Resume from "../documents/Resume-Srinath.pdf"
import Arrow from "../images/right-arrow.png"

export default function About(){
    return(
        <section className="about-me content">
            <h2 className='about-head'>About Me</h2>
            <p className='about-text'>Wordpress developer with strong history in website management and development. Expert in
all aspects of WordPress website creation, plug-ins and implementation. Skilled in creating
engaging and interactive websites. Knowledge and experience in PHP and Python language.
Experience in HTML, CSS and javascript. Ability to troubleshoot and work with clients to
solve problems or find solutions to requests.
</p>
            <div className="resume-text"><p>You can download resume here.</p>
            <a className='about-resume' href={Resume} download>Resume <img className="right-arrow" src={Arrow} alt="reight-arrow" /></a></div>
        </section>
    );
}