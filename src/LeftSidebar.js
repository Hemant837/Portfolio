import React, { Component } from "react";
import "./LeftSidebar.css";

class LeftSidebar extends Component {
  static defaultProps = {
    icons: [
      {
        icon: (
          <a href="https://github.com" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
        ),
      },
      {
        icon: (
          <a href="" target="_blank">
            <i class="fa-brands fa-instagram"></i>
          </a>
        ),
      },
      {
        icon: (
          <a href="" target="_blank">
            <i class="fa-brands fa-twitter"></i>
          </a>
        ),
      },
      {
        icon: (
          <a href="" target="_blank">
            <i class="fa-brands fa-linkedin-in hemant_Loves_pu$$y"></i>
          </a>
        ),
      },
    ],
  };
  render() {
    return (
      <section className="LeftSidebar">
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
