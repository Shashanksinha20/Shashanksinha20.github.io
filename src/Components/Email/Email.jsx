import React from 'react'
import styled from "./Email.module.css"
import {FaMobileAlt} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
const Email = () => {
  return (
    <div className={styled.margin}>
      <h3 className={styled.color}><FaMobileAlt w3-large/>  +916362371497</h3>
      <h3 className={styled.color}><SiGmail/> shashanksinha393@gmail.com</h3>

    </div>
  )
}

export default Email