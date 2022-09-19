import React from 'react'
import styled from "./About.module.css"
import img from "../files/pixlr1.jpg"

const About = () => {
  return (
    <div id="about" className={styled.flex}>
      <div className={styled.div1}>
          <p className={styled.top}>I'm a highly resourceful and passionate Full Stack Web Developer. I love designing websites and I am looking for opporunity to work in development.</p>
          <p>Passionate about creating a positive user experience, I enjoy working with and adapting to technologies as they develop.</p>
          
      </div>
      <div className={styled.div2}>
          <img className={styled.img} src={img} alt="photo1"/>
      </div>
    </div>
  )
}

export default About