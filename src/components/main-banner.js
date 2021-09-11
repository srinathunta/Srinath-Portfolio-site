import React from "react";
import ReactTypingEffect from 'react-typing-effect';
import 'boxicons';
export default function Banner(){
  const htmltext = ''
  const htmlendtext = "</body></html>"
    return(
        <section id="hero" class="d-flex flex-column justify-content-center">
            <div class="content" data-aos="zoom-in" data-aos-delay="100">
                <h1>Srinath Unta</h1>
                <p><ReactTypingEffect  text={["Full-stack Developer."]} /></p>
                
                <div class="social-links">
                    <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                    <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                    <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                    <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
        </div>
  </section>
    )
}