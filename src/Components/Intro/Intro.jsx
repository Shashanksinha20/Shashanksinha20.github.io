import React from 'react'
import styled from "./Intro.module.css"
import {Link } from "react-scroll";
import TypeWriter from "../TypeWriter/TypeWriter"
import Resume from '../../Assets/images/Shashank-Sinha-Resume.pdf'
const Intro = () => {
  return (
    <div id="intro" className = {styled.introClass}>
      <h3 className={styled.color}>Hi, My Name Is</h3>
      <p className={styled.fontS}>Shashank Sinha</p>
       {/* <p className={styled.fontS2}>Full Stack Web Developer</p> */}
        <p className={styled.fontS2} ><TypeWriter/></p>
       <h3 className={styled.left}>A highly technical, team-oriented professional with extensive experience in Full Stack Web Development with demonstrated ability to work through a problem effectively and provide the best solutions.</h3>
       <a href = {Resume}
              target = "_blank"
              download
              className={styled.btn}>
              <button onClick = {() => window.open(Resume)} className = {styled.resumeBtn}>
              Resume
              </button>
              </a> 
    </div>
  )
}

export default Intro