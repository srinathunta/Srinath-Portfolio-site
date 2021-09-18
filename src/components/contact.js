import React, { useState } from "react";
import 'boxicons';

export default function Contact(){
    const [status, setStatus] = useState("Submit");
    const [message, setmessage]  = ('');
    return(
        <section className="contact main bg-mint" id="contact">
            <div className="content">
            <h2 className="main-title">Contact Me</h2>
            <div className="contact-content">
                <div className="contact-me contact-me-left">
                <div className="info">
              <div className="address">
                <h4><i className="bx bx-map"></i>Location:</h4>
                <p>Dombivli (W), 421202</p>
              </div>

              <div className="email">
                <h4><i className='bx bx-envelope'></i>Email:</h4>
                <p>srinath.unta@gmail.com</p>
              </div>

              <div className="phone">
                <h4><i className='bx bx-phone'></i>Call:</h4>
                <p>+91 9869984496</p>
              </div>

            </div>
                </div>
                <div className="contact-me contact-me-right">
              
                <form netlify-honeypot="bot-field" data-netlify="true" method="post" role="form" className="php-email-form">
              <div className="contact-row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required="" />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required="" />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required="" />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required=""></textarea>
              </div>
              <div className="my-3">
                <div className="sent-message">{message}</div>
              </div>
              <div className="text-center"><button type="submit">{status}</button></div>
            </form>
                </div>
            </div>
            </div>
        </section>
    )
}