import React from 'react'
import '../components/assets/css/About.css'
import me from '../components/assets/img/me.jpg'
import {motion} from 'framer-motion'
import '../components/assets/css/responsive/About.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'

const About = () => {

  return (
    <motion.div 
    className='about-section'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <div className="about-info">
        <h1>About me</h1>
        <div className="about-paragraph para">
          <p>My name is Umoh Udonwa. I am fom Nigeria. I started my web development journey 2019 and started freelancing 2022.My aim is to work with small businesses and marginalized communities to bring their passions to life with my web development skills. I offer both design and development services for web applications or websites. If you are looking for a developer to add to your team or work on a project, you can contact me. I would love to here from you. </p>
          <div className="my-social-icons">
            <a href="https://twitter.com/Udonwa7" className='my-icons'>
              <AiOutlineTwitter size={30} />
            </a>
            <a href="https://www.instagram.com/umoh__/" className='my-icons'>
              <AiOutlineInstagram size={30} />
            </a>
          </div>
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