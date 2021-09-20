import React, { useState } from "react";
import 'boxicons';

export default function Contact(){
    const [formState, setFormState] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    const [message, setmessage]  = ('');

    const handleChange = (e) => {
      setFormState({
        ...formState,
        [e.target.name] : [e.target.value]
      })
    }

    function encode(data) {
      return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&")
    }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...formState
      })
    }).then(() => alert("Your Form has been submitted")).catch(error => alert(error))

      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
  }
  

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
              
            <form netlify-honeypot="bot-field" data-netlify="true" method="post" role="form" name="contact" className="php-email-form" onSubmit={handleSubmit} id="contact">
              <div className="contact-row">
                <div className="col-md-6 form-group">
                  <input type="text" onChange={handleChange} value={formState.name} name="name" className="form-control" id="name" placeholder="Your Name" required="" />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" onChange={handleChange} value={formState.email} className="form-control" name="email" id="email" placeholder="Your Email" required="" />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" onChange={handleChange} value={formState.subject} className="form-control" name="subject" id="subject" placeholder="Subject" required="" />
              </div>
              <div className="form-group mt-3">
                <textarea onChange={handleChange} value={formState.message} className="form-control" name="message" rows="5" placeholder="Message" required=""></textarea>
              </div>
              <div className="my-3">
                <div className="sent-message">{message}</div>
              </div>
              <div className="text-center"><button type="submit">Submit</button></div>
            </form>
                </div>
            </div>
            </div>
        </section>
    )
}