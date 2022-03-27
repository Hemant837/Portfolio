import React, { Component } from "react";
import "./RightSidebar.css";

class RightSidebar extends Component {
  render() {
    return (
      <section className="RightSidebar">
        <div className="RightSidebar-content">
          <li className="RightSidebar-email">
            <a href="">vermahemant837@gmail.com</a>
          </li>
          <div className="RightSidebar-line"></div>
        </div>
      </section>
    );
  }
}

export default RightSidebar;
