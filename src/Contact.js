import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <section
        data-aos="fade-down"
        data-aos-duration="800"
        className="Contact"
        id="Contact"
      >
        <div className="Contact-heading1">
          <p>What's Next?</p>
        </div>
        <div className="Contact-heading2">
          <h2>Get In Touch</h2>
        </div>
        <div className="Contact-para">
          <p>
            I'm currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>
        </div>
        <a className="Contact-btn">vermahemant837@gmail.com</a>
        <div className="Navigation-link">
          <a href="https://github.com" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="" target="_blank">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="" target="_blank">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="" target="_blank">
            <i class="fa-brands fa-linkedin-in hemant_Loves_pu$$y"></i>
          </a>
        </div>s
      </section>
    );
  }
}

export default Contact;
