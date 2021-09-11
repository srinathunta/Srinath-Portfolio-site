import React from "react";
import Gmail from '../images/gmail.png'
import whatsapp from '../images/WhatsApp.png'

export default function Contact(){
    return(
        <section className="contact main bg-mint" id="contact">
            <div className="content">
            <h2>Contact Me</h2>
            <div className="contact-me contact-me-left">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ullamcorper lorem, non semper mi. Praesent malesuada ultricies nibh a ullamcorper. Etiam egestas gravida elit, ac viverra elit tincidunt in. Fusce dui est, blandit eget tincidunt quis, tristique blandit est. Sed porttitor libero id nulla vestibulum cursus. Vestibulum vehicula urna nisl, sit amet varius dolor volutpat vitae. Etiam gravida ornare tempus. Etiam eget est nibh. Pellentesque tempor tortor dolor, vitae suscipit nisi fringilla sit amet. Aenean id tincidunt ante, quis malesuada lacus. Duis lorem urna, aliquet eu dolor at, malesuada euismod enim. Morbi quis neque lorem. Pellentesque eget urna malesuada magna efficitur pharetra. Curabitur suscipit felis nec diam rutrum eleifend.</p>
                <div className="contact-links"><a href="mailto:srinath.unta@gmail.com?subject=Hello"><img src={Gmail} alt="" /><p>srinath.unta@gmail.com</p></a></div>
                <div className="contact-links"><a href="https://wa.me/9869984496"><img src={whatsapp} alt="" /><p>9869984496</p></a></div>
            </div>
            <div className="contact-me contact-me-right">
                <div className="contact-links"><a href="mailto:srinath.unta@gmail.com?subject=Hello"><img src={Gmail} alt="" /><p>srinath.unta@gmail.com</p></a></div>
                <div className="contact-links"><a href="https://wa.me/9869984496"><img src={whatsapp} alt="" />9869984496</a></div>
            </div>
            </div>
        </section>
    )
}