import React from 'react'
import '../components/assets/css/Home.css'
import { Link } from 'react-router-dom'
import MovingText from 'react-moving-text'
import {motion} from 'framer-motion'
import '../components/assets/css/responsive/Home.css'


const Home = () => {
  return (
    <motion.div
     className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}

     >
      <div className="text-zone">
        <div className="introduction">
          <div className="header ">
            <MovingText
              type="fadeIn"
              duration="3000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
            >
              <h1>Hi,
                <br />
                I am umoh Udonwa,<br />
                a Web developer.
              </h1>
            </MovingText>
            {/* <Loader/> */}
          </div>

          <div className="para">
            <MovingText
              type="fadeInFromLeft"
              duration="3000ms"
              delay="0s"          
                direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
            >
              <p>frontend developer/ backend developer</p>
            </MovingText>
          </div>

          <div className="contact-btn">
            <Link to={'/contact'} className="contact-link">
              Contact me !
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home
