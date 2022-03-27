import React, { Component } from "react";
import Project from "./Project";
import "./Project.css";

class Projects extends Component {
  static defaultProps = {
    items: [
      {
        cil: "/crossPlatformEcommerceMobileApp.jpg",
        ch: "Cross Platform Ecommerce Mobile App",
        cp: (
          <p>
            Developed an <a className="Highlighted">e-commerce</a> app, where
            people can buy and sell their products. <br /> Tech Involved:{" "}
            <a className="Highlighted">Flutter</a> framework for Frontend
            creation and <a className="Highlighted">Firebase</a> for{" "}
            <a className="Highlighted">database</a>,{" "}
            <a className="Highlighted">Authorization</a>,{" "}
            <a className="Highlighted">authentication</a>, sign in and sign out.
          </p>
        ),
        a1: "Flutter",
        a2: "Dart",
        a3: "Firebase",
        link: "https://github.com/Hemant837/Ecommerce-App",
      },
      {
        cil: "/amazonFrontPageClone.jpg",
        ch: "Amazon Front Page Clone",
        cp: (
          <p>
            Simple static website, designed using{" "}
            <a className="Highlighted">HTML</a> for structuring the web page,
            used <a className="Highlighted">CSS</a> for styling text, fonts,
            headings, and positioning the elements. <br /> Used{" "}
            <a className="Highlighted">Bootstrap</a> classes for small
            customization in <a className="Highlighted">Navbars</a>,{" "}
            <a className="Highlighted">carousel</a>,{" "}
            <a className="Highlighted">Bootstrap cards</a> for showcasing the
            product categories.
          </p>
        ),
        a1: "HTML",
        a2: "CSS",
        a3: "Bootstrap",
        link: "https://github.com/Hemant837/Amazon-First-Page-Clone",
      },
      {
        cil: "/libraryManagementSystem.jpg",
        ch: "Library Management System",
        cp: (
          <p>
            User-friendly java application for managing{" "}
            <a className="Highlighted">database</a> of the library using Java{" "}
            <a className="Highlighted">Netbeans</a> and{" "}
            <a className="Highlighted">MySQL</a>. <br /> The application allows{" "}
            <a className="Highlighted">CRUD</a> Operations for Users, Books,
            also allows Issuing and return of Books.
          </p>
        ),
        a1: "Java",
        a2: "Netbeans",
        a3: "MySQL",
        link: "https://github.com/Hemant837/Ecommerce-App",
      },
    ],
  };
  render() {
    return (
      <section className="Project">
        <div
          data-aos="fade-down"
          data-aos-duration="500"
          className="Project-heading"
        >
          <li>Some Things I've Built</li>
          <div className="Project-line"></div>
        </div>
        {this.props.items.map((e) => (
          <Project
            cil={e.cil}
            ch={e.ch}
            cp={e.cp}
            a1={e.a1}
            a2={e.a2}
            a3={e.a3}
          />
        ))}
      </section>
    );
  }
}

export default Projects;
