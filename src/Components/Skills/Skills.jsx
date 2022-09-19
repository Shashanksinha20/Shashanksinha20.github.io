import React from 'react'
import styled from "./Skills.module.css"
import { AiFillGithub } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import {SiJavascript} from 'react-icons/si';
import {SiBootstrap} from 'react-icons/si';
import {SiChakraui} from 'react-icons/si';
const Skills = () => {
  return (
    <div id="skills">
      <h1 className={styled.mid}>Skills</h1>
       <div   className={styled.flex}>
         <div className={styled.size}>
         <FaReact className={styled.color}/>
         <h3 className={styled.mid}>React</h3>
         </div>
         <div className={styled.size}>
           <SiRedux className={styled.color}/>
           <h3 className={styled.mid}>Redux</h3>
         </div>
         <div className={styled.size}>
         <AiOutlineHtml5 className={styled.color}/>
         <h3 className={styled.mid}>HTML</h3>
         </div>
         <div className={styled.size}>
         <FaCss3Alt className={styled.color}/>
         <h3 className={styled.mid}>CSS</h3>
         </div>
         </div>
         <div   className={styled.flex}>
         <div className={styled.size}>
         <DiNodejs className={styled.color}/>
         <h3 className={styled.mid}>NodeJS</h3>
         </div>
         <div className={styled.size}>
         <SiBootstrap className={styled.color}/>
         <h3 className={styled.mid}>Bootstrap</h3>
         </div>
        
         <div className={styled.size}>
           <AiFillGithub className={styled.color}/>
           <h3 className={styled.mid}>Git</h3>
         </div> 

         <div className={styled.size}>
         <SiJavascript className={styled.color}/>
         <h3 className={styled.mid}>JavaScript</h3>
         </div>
         
       </div>
       <div   className={styled.flex}>
      
         
         <div className={styled.size}>
         <SiChakraui className={styled.color}/>
         <h3 className={styled.mid}>Chakra UI</h3>
         </div>
         </div>
    </div>
  )
}

export default Skills