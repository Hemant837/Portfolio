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
          <a href="https://github.com/Hemant837" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.instagram.com/me_hemantv/" target="_blank">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://twitter.com/HemantV74298189" target="_blank">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/hemant-verma-73a82a193/"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="./hemantResume.pdf"
            target="_blank"
            download={"hemantResume.pdf"}
          >
            <i class="fa-solid fa-file"></i>
          </a>
        </div>
      </section>
    );
  }
}

export default Contact;
