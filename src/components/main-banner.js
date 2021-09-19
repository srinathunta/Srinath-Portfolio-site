import React from "react";
import ReactTypingEffect from 'react-typing-effect';
import 'boxicons';
import BackImg from '../images/profile/new-1.jpg'

export default function Banner(){
  const htmltext = ''
  const htmlendtext = "</body></html>"
    return(
        <section id="hero" className="d-flex flex-column justify-content-center" 
        style={{backgroundImage: `url(${BackImg})`}}>
            <div className="content" data-aos="zoom-in" data-aos-delay="100">
                <h1>Srinath Unta</h1>
                <p><ReactTypingEffect  text={["Full-stack Developer."]} /></p>
                
                <div className="social-links">
                    <a href="https://www.facebook.com/srinath.unta" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="https://www.instagram.com/srinath_unta/" className="instagram"><i className="bx bxl-instagram"></i></a>
                    {/* <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a> */}
                    <a href="https://www.linkedin.com/in/srinath-unta-167a95116/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
        </div>
  </section>
    )
}