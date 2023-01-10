import React, { useState } from 'react'
import styled from './Project.module.css'
import { BsGithub } from 'react-icons/bs'

import { BiLink } from 'react-icons/bi'
import Modal from 'react-modal'
import asosImg from '../files/asos.png'
import weatherImg from '../files/weather.png'
import apple from '../files/apple.png'
import cric from '../files/cric.png'

const Project = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)
  const [isOpen5, setIsOpen5] = useState(false)
  return (
    <div id="project" className = {styled.project}>
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
          <h2>Asos.com Clone</h2>
          <div className={styled.box}>
            <p>
              <b>Description : </b>ASOS allows you to shop fashion and cosmetics apparals and accessories 
              from various brands. A user can view, shop, increase/decrease quanitity or remove product from the list<br/>
              <b>Time Duration</b> : 5 days
              <br/>
              <b>Collaborative Project</b> : A team of 5 dedicated developers<br/>
              <b>Responsibility</b> : Navbar, Add to Cart Functionality, Cart Update/Delete
              
            </p>

          </div>
          <h5>JavaScript | HTML | CSS </h5>
          <div className={styled.flex}>
            <a
              className={styled.size}
              target = "_blank"
              href="https://github.com/Aman103767/Unit-3-project"
            >
              {' '}
              <BsGithub className={styled.size} />
            </a>
            <a
              className={styled.size}
              target = "_blank"
              href="https://stellular-alfajores-660d81.netlify.app/"
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
            src={apple}
            alt="logo"
          />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2>Apple TV+ Clone</h2>
          <div className={styled.box}>
            <p>
            <b>Description : </b>Apple TV+ is an over the top platform for watching series and movies worldwide. The user can signup/login and watch content.
             <br/>
              <b>Time Duration</b> : 5 days
              <br/>
              <b>Collaborative Project</b> : A team of 5 dedicated developers<br/>
              
            </p>

          </div>
          <h5>Node | Express | MongoDB | React | Redux |  Chakra UI</h5>
          <div className={styled.flex}>
            <a
              className={styled.size}
              target = "_blank"
              href="https://github.com/Shubham0442/scintillating-work-864"
            >
              {' '}
              <BsGithub className={styled.size} />
            </a>
            <a
              className={styled.size}
              target = "_blank"
              href="https://appletvclone.netlify.app/"
            >
              <BiLink className={styled.size} />
            </a>
          </div>
        </div>
      </div>

      <div className={styled.width}>
        <div className={styled.left}>
          <img
            className={styled.img}
            src={cric}
            alt="logo"
          />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2>Cricket.com Clone</h2>
          <div className={styled.box}>
            <p>
            <b>Description : </b>Cricket.com is a one stop solution for all the cricket information. Users can explore live matches, upcoming/ongoing/past series or matches or player/team profile. Fantasy sports gaming is also integrated<br/>
              <b>Time Duration</b> : 5 days
              <br/>
              <b>Collaborative Project</b> : A team of 5 dedicated developers<br/>
              
            </p>

          </div>
          <h5>React |  HTML | CSS | ChakraUI</h5>
          <div className={styled.flex}>
            <a
              className={styled.size}
              target = "_blank"
              href="https://github.com/MDZUBAIR599/aromatic-pull-7043"
            >
              {' '}
              <BsGithub className={styled.size} />
            </a>
            <a
              className={styled.size}
              target = "_blank"
              href="https://isnt-mdzubair599-awesome.netlify.app/"
            >
              <BiLink className={styled.size} />
            </a>
          </div>
        </div>
      </div>


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
            <b>Description : </b>Weather Forecast allows you to fetch weather information of the city worldwide.
              It uses OpenWeather API to fetch the weather data with local time. Apart from temperature it show other relevant information like sunset, sunrise, wind speed, humidity, visibilty and pressure.<br/>
              <b>Time Duration</b> : 2 days
              <br/>
              <b>Individual Project</b>
              
            </p>

          </div>
          <h5>React | HTML | CSS | REST API</h5>
          <div className={styled.flex}>
            <a
              className={styled.size}
              target = "_blank"
              href="https://github.com/Shashanksinha20/weather_forecast"
            >
              {' '}
              <BsGithub className={styled.size} />
            </a>
            <a
              className={styled.size}
              target = "_blank"
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