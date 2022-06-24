import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../components/assets/css/About.css'
import me from '../components/assets/img/me.jpg'
import {motion} from 'framer-motion'
import '../components/assets/css/responsive/About.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const About = () => {

  return (
    <motion.div 
    className='about-section'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0 }}
    >
      <div className="about-info">
        <h1>About me</h1>
        <div className="about-paragraph para">
          <p>I’m a Front-End Developer located in Poland. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experience
          </p>
          <p>
            Interested in the entire frontend spectrum and working on ambitious projects with positive people.
          </p>
          <p>
            Interested in the entire frontend spectrum and working on ambitious projects with positive people.
          </p>
          <p>
            <Link to={'/contact'} className='contact-2'>You can contact me</Link>
          </p>
        </div>
      </div>

      <div className="about-img">
        <LazyLoadImage
          alt='My picture'
          src={me}
          effect="blur"
          height={'100%'}
        />
        {/* <img src={me} alt="" /> */}
      </div>
    </motion.div>
  )
}

export default About