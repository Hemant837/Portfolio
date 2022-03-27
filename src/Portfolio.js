import React, { Component } from "react";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Introduction from "./Indroduction";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Contact from "./Contact";
import Navigation from "./Navigation";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <LeftSidebar />;
        <RightSidebar />;
        <Introduction />;
        <AboutMe />
        <Projects />
        <Achievements />
        <Contact />
        <Navigation />
      </div>
    );
  }
}

export default Portfolio;
