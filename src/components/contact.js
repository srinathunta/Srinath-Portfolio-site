import React from "react";
import Gmail from '../images/gmail.png'
import whatsapp from '../images/WhatsApp.png'

export default function Contact(){
    return(
        <section className="contact content">
            <h2>Contact Me</h2>
            <div className="contact-me">
                <div className="contact-links"><a href="mailto:srinath.unta@gmail.com?subject=Hello"><img src={Gmail} alt="" /><p>srinath.unta@gmail.com</p></a></div>
                <div className="contact-links"><a href="https://wa.me/9869984496"><img src={whatsapp} alt="" />9869984496</a></div>
            </div>
        </section>
    )
}