import React, { useState } from "react";
import Gmail from '../images/gmail.png'
import whatsapp from '../images/WhatsApp.png'

export default function Contact(){
    const [status, setStatus] = useState("Submit");
    const [message, setmessage]  = ('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:8000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
    return(
        <section className="contact main bg-mint" id="contact">
            <div className="content">
            <h2 className="main-title">Contact Me</h2>
            <div className="contact-content">
                <div className="contact-me contact-me-left">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ullamcorper lorem, non semper mi. Praesent malesuada ultricies nibh a ullamcorper. Etiam egestas gravida elit, ac viverra elit tincidunt in. Fusce dui est, blandit eget tincidunt quis, tristique blandit est. Sed porttitor libero id nulla vestibulum cursus. Vestibulum vehicula urna nisl, sit amet varius dolor volutpat vitae. Etiam gravida ornare tempus. Etiam eget est nibh. Pellentesque tempor tortor dolor, vitae suscipit nisi fringilla sit amet. Aenean id tincidunt ante, quis malesuada lacus. Duis lorem urna, aliquet eu dolor at, malesuada euismod enim. Morbi quis neque lorem. Pellentesque eget urna malesuada magna efficitur pharetra. Curabitur suscipit felis nec diam rutrum eleifend.</p>
                    <div className="contact-links">
                    <div className="contact-link"><a href="mailto:srinath.unta@gmail.com?subject=Hello"><img src={Gmail} alt="" /><p>srinath.unta@gmail.com</p></a></div>
                    <div className="contact-link"><a href="https://wa.me/9869984496"><img src={whatsapp} alt="" /><p>9869984496</p></a></div>
                    </div>
                </div>
                <div className="contact-me contact-me-right">
              
                <form onSubmit={handleSubmit} action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="contact-row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required="" />
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required="" />
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required="" />
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" required=""></textarea>
              </div>
              <div class="my-3">
                <div class="sent-message">{message}</div>
              </div>
              <div class="text-center"><button type="submit">{status}</button></div>
            </form>
                </div>
            </div>
            </div>
        </section>
    )
}