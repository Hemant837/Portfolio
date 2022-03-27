import React, { Component } from "react";
import "./Introduction.css";

class Introduction extends Component {
  render() {
    return (
      <section className="Introduction">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="Introduction-h1"
        >
          <h1>Hi, my name is</h1>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          className="Introduction-h2"
        >
          <h2>Hemant Verma.</h2>
          <div
            data-aos="fade-right"
            data-aos-duration="1400"
            className="Introduction-h3"
          >
            <h3>I am a fresher and a learner.</h3>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1600"
          className="Introduction-para"
        >
          I'm currently in my last semester specialized in Information
          Technology. Currently, I'm focused on building up my skills, and
          learning new things.
        </div>
      </section>
    );
  }
}

export default Introduction;
