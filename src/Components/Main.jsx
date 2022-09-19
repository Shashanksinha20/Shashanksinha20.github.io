import React from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import Email from './Email/Email'
import Intro from './Intro/Intro'
import Navbar from './Navbar/Navbar'
import Project from './Project/Project'
import Resume from './Resume/Resume'
import Sidebar from './Sidebar/Sidebar'
import Skills from './Skills/Skills'
import GitStat from './GitCalendar/GitStat'

const Main = () => {
  return (
    
    <>
      <Navbar/>
      <Sidebar/>  
      <Intro/>
      <About/>
      <Skills/>
      <Project/>
      <Resume/>
      <GitStat/>
      <Contact/>
      <Email/>
    </>
  )
}

export default Main