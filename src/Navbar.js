import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <section className="Navbar">
        <div className="Navbar-h">H</div>
        <div className="Navbar-list">
          <li data-aos="fade-down" data-aos-duration="500">
            <a>
              <Link to="#AboutMe" smooth>
                <span>01.</span> About
              </Link>
            </a>
          </li>
          <li data-aos="fade-down" data-aos-duration="600">
            <Link to="#Projects" smooth>
              <span>02.</span> Projects
            </Link>
          </li>
          <li data-aos="fade-down" data-aos-duration="700">
            <a>
              <Link to="#Achievements" smooth>
                <span>03.</span> Achievements
              </Link>
            </a>
          </li>
          <li data-aos="fade-down" data-aos-duration="800">
            <a>
              <Link to="#Contact" smooth>
                <span>04.</span> Contact
              </Link>
            </a>
          </li>
          <a
            data-aos="fade-down"
            data-aos-duration="900"
            className="Navbar-btn"
            download
          >
            Resume
          </a>
        </div>
      </section>
    );
  }
}

export default Navbar;
