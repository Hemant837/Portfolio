import React, { Component } from "react";
import "./LeftSidebar.css";

class LeftSidebar extends Component {
  static defaultProps = {
    icons: [
      {
        icon: (
          <a href="https://github.com/Hemant837" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
        ),
      },
      {
        icon: (
          <a href="https://www.instagram.com/me_hemantv/" target="_blank">
            <i class="fa-brands fa-instagram"></i>
          </a>
        ),
      },
      {
        icon: (
          <a href="https://twitter.com/HemantV74298189s" target="_blank">
            <i class="fa-brands fa-twitter"></i>
          </a>
        ),
      },
      {
        icon: (
          <a
            href="https://www.linkedin.com/in/hemant-verma-73a82a193/"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin-in hemant_Loves_pu$$y"></i>
          </a>
        ),
      },
    ],
  };
  render() {
    return (
      <section data-aos="fade-right" data-aos-duration="1500" className="LeftSidebar">
        <div className="LeftSidebar-content">
          {this.props.icons.map((i) => (
            <li className="LeftSidebar-icon">{i.icon}</li>
          ))}
          <div className="LeftSidebar-line"></div>
        </div>
      </section>
    );
  }
}

export default LeftSidebar;
