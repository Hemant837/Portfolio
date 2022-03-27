import React, { Component } from "react";
import "./Achievements.css";

class Achievements extends Component {
  render() {
    return (
      <section className="Achievements" id="Achievements">
        <div
          data-aos="fade-down"
          data-aos-duration="500"
          className="Achievements-heading"
        >
          <li>Achievements</li>
          <div className="Achievements-line"></div>
        </div>
        <div className="Achievements-contents">
          <p data-aos="fade-right" data-aos-duration="800">
            <b>Runner-up</b> in Zonal round of <b>IITB Techfest</b> (2019-20).
          </p>
          <p data-aos="fade-right" data-aos-duration="1000">
            <b>2nd Runner-up</b> in <b>College Hackathon</b> and{" "}
            <b>1st Runner-up</b>
            in <b>SIH Internal Hackathon</b>.
          </p>
          <p data-aos="fade-right" data-aos-duration="1200">
            Got selected as a <b>finalist</b> for the{" "}
            <b>“Grand Challenge - 2020”</b>
            organized by <b>Directorate of Industries</b>.
          </p>
          <p data-aos="fade-right" data-aos-duration="1400">
            <b>2nd Runner-up</b> in <b>Innovative Idea Competition</b>.
          </p>
          <p data-aos="fade-right" data-aos-duration="1600">
            <b>Winner</b> of <b>Innovative Idea Presentation</b> in the presence
            of Honorable Chief Minister (2019).
          </p>
        </div>
      </section>
    );
  }
}

export default Achievements;
