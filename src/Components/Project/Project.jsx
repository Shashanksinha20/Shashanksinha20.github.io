import React, { useState } from 'react'
import styled from './Project.module.css'
import { AiFillGithub } from 'react-icons/ai'
import { BiLink } from 'react-icons/bi'
import Modal from 'react-modal'
import asosImg from '../files/asos.png'
import weatherImg from '../files/weather.png'

const Project = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)
  const [isOpen5, setIsOpen5] = useState(false)
  return (
    <div id="project">
      <h1 className={styled.mid}>Projects</h1>
      <div className={styled.width}>
        <div className={styled.left}>
          <img
            className={styled.img}
            src={asosImg}
            alt="logo"
          />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2>ASOS Website</h2>
          <div className={styled.box}>
            <p>
              ASOS allows you to shop fashion and cosmetics apparals and accessories 
              from various brands
              
            </p>

          </div>
          <h5>JavaScript || HTML || CSS </h5>
          <div className={styled.flex}>
            <a
              className={styled.size}
              href="https://github.com/Aman103767/Unit-3-project"
            >
              {' '}
              <AiFillGithub className={styled.size} />
            </a>
            <a
              className={styled.size}
              href="https://relaxed-starship-4fb21b.netlify.app/"
            >
              <BiLink className={styled.size} />
            </a>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className={styled.width}>
        <div className={styled.left}>
          <img
            className={styled.img}
            src={weatherImg}
            alt="logo"
          />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2>Weather Forecast</h2>
          <div className={styled.box}>
            <p>
              Weather Forecast allows you to fetch weather information of the city worldwide.
            </p>

          </div>
          <h5>React || HTML || CSS || REST API</h5>
          <div className={styled.flex}>
            <a
              className={styled.size}
              href="https://github.com/Shashanksinha20/weather_forecast"
            >
              {' '}
              <AiFillGithub className={styled.size} />
            </a>
            <a
              className={styled.size}
              href="https://shashanksinha20.github.io/weather_forecast/"
            >
              <BiLink className={styled.size} />
            </a>
          </div>
        </div>
      </div>
        </div>
  )
}

export default Project