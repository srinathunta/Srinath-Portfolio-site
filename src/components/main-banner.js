import React from "react";
import ReactTypingEffect from 'react-typing-effect';
import 'boxicons';
export default function Banner(){
  const htmltext = ''
  const htmlendtext = "</body></html>"
    return(
        <section id="hero" className="d-flex flex-column justify-content-center">
            <div className="content" data-aos="zoom-in" data-aos-delay="100">
                <h1>Srinath Unta</h1>
                <p><ReactTypingEffect  text={["Full-stack Developer."]} /></p>
                
                <div className="social-links">
                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
        </div>
  </section>
    )
}