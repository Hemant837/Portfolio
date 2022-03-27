import React, { Component } from "react";
import "./Project.css";

class Project extends Component {
  render() {
    return (
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        className="Card"
        id="Projects"
      >
        <div className="Card-img">
          <img src={this.props.cil} />
        </div>
        <div className="Card-content">
          <h4 className="Card-permanent-heading">Featured Project</h4>
          <h2 className="Card-heading">{this.props.ch}</h2>
          <div className="Card-para">
            {this.props.cp}
            <div className="Card-tech">
              <li>
                <a>{this.props.a1}</a>
              </li>
              <li>
                <a>{this.props.a2}</a>
              </li>
              <li>
                <a>{this.props.a3}</a>
              </li>
            </div>
            <div className="Card-link">
              <a href={this.props.link} target="_blank">
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
