import React, { Component, useEffect } from "react";
import "./AboutMe.css";

class AboutMe extends Component {
  render() {
    return (
      <section
        data-aos="fade-down"
        data-aos-duration="500"
        className="AboutMe"
        id="AboutMe"
      >
        <div className="AboutMe-heading">
          <p>About Me</p>
          <div className="AboutMe-line"></div>
        </div>
        <div className="AboutMe-content">
          <div className="Content">
            <p>
              Hello! My name is Hemant Verma, I belong's to Roorkee (Haridwar).
              <br />I have done my 10th & 12th from St. Marks Academy.
              Cureently, <br /> I'm pursuing Bachelors of Technology from
              College Of Engineering Roorkee (COER).
            </p>
            <p>
              I recently started learning Reactjs, but interest in web
              development started back in 2021, when I decided to try making my
              first sample project with - HTML & CSS.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <div className="AboutMe-list">
              <ul>
                <li>Python</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
              <ul>
                <li>MySQL</li>
                <li>Javascript</li>
                <li>Reactjs</li>
              </ul>
            </div>
          </div>
          <div className="AboutMe-img">
            <img className="myImg" src="./hemantVerma.jpg" />
          </div>
        </div>
      </section>
    );
  }
}

export default AboutMe;
