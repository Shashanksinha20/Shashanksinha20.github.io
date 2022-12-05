import React from "react";
import "./Navbar1.css";
import {Link } from "react-scroll";
import img from "../files/Slogo_black.png"
import Resume from '../../Assets/images/Shashank-Sinha-Resume.pdf'

export const Navbar1 = () => {
  const closeNavbarMenu = () => 
  {
    console.log("UL clicked")
    document.getElementById('chk').checked = false;
  }
  return (
    <div className="header">
      {/* <h2 className="logo">B</h2> */}
      <img className = "imgLogo" src={img} alt="logo"/>
      <input type="checkbox" id="chk" />
      <label htmlFor="chk" className="show-menu-btn">
        <i className="fa fa-bars" />
      </label>

      <ul className="menu" >
        <Link to = "intro" 
        spy={true}
              smooth={true}
              delay={100}
              duration={500}
              onClick = {() => closeNavbarMenu()}>
              Home
              </Link>
              <Link to = "about" 
              spy={true}
              smooth={true}
              delay={100}
              duration={500}
              onClick = {() => closeNavbarMenu()}>
              About
              </Link>
              <Link to = "skills" 
        spy={true}
              smooth={true}
              delay={100}
              onClick = {() => closeNavbarMenu()}
              duration={500}>
              Skills
              </Link>
              <Link to = "project" 
        spy={true}
              smooth={true}
              delay={100}
              duration={500}
              onClick = {() => closeNavbarMenu()}>
              Projects
              </Link>
              <Link to = "contact" 
              spy={true}
              smooth={true}
              delay={100}
              duration={500}
              onClick = {() => closeNavbarMenu()}>
              Contact
              </Link>
              <a href = {Resume}
             target = "_blank"
              download
              >
              <button onClick = {() => window.open(Resume)}>Resume</button>
              </a>
        <label htmlFor="chk" className="hide-menu-btn">
          <i className="fa fa-times" />
        </label>
      </ul>
    </div>
  );
};
