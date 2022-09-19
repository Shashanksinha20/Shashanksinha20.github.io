import React from 'react'
import styled from "./Resume.module.css"
const Resume = () => {
  return (
    <div id="resume">
      <h1 className={styled.mid}>Resume</h1>
      <div  className={styled.flex}>
      <a className={styled.img} href="https://drive.google.com/file/d/1vICpUxjCMqzXAfvQCrDsZ76u-ld-BnqE/view?usp=sharing" download><button className={styled.btn}>See My Resume</button></a>
      </div>
     
    </div>
  )
}

export default Resume;