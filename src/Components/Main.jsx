import React from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import Email from './Email/Email'
import Intro from './Intro/Intro'
import {Navbar1} from './Navbar/Navbar1'
import Project from './Project/Project'
import Sidebar from './Sidebar/Sidebar'
import Skills from './Skills/Skills'
import GitStat from './GitCalendar/GitStat'

const Main = () => {
  return (
    
    <>
      <Navbar1/>
      <Sidebar/>  
      <Intro/>
      <About/>
      <Skills/>
      <Project/>
      <GitStat/>
      <Contact/>
      <Email/>
    </>
  )
}

export default Main