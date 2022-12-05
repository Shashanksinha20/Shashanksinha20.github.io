import React from 'react'
import styled from "./Navbar.module.css"
import {Link } from "react-scroll";
import img from "../files/Slogo_black.png"

const Navbar = () => {
  return (
    <div className={styled.main}>
 <div className={styled.flex}>
      <div>
      <img className={styled.img} src={img} alt="logo"/>
      </div>
      <div className={styled.margin}>
      
      </div> 
      <a href = "/contact">About</a>
      <div className={styled.left}>
      <Link to="skills" hashSpy={true}
              spy={true}
              smooth={true}
              delay={100}
              duration={500}
              className={styled.left}>Skills</Link>
      </div>
      <div className={styled.left}>
      <Link to="project" hashSpy={true}
              spy={true}
              smooth={true}
              delay={100}
              duration={500}
              className={styled.left}>Project</Link>
      </div>
      <div className={styled.left}>
     <Link to="contact" hashSpy={true}
              spy={true}
              smooth={true}
              delay={100}
              duration={500}
              className={styled.left}>Contact</Link>
      </div>
      <div className={styled.left}>
      <Link to="resume" hashSpy={true}
              spy={true}
              smooth={true}
              delay={100}
              duration={500}
              className={styled.left}>Resume</Link>
      </div>
     
    </div>
    </div>
  )
}

export default Navbar