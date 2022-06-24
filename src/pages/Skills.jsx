import React from 'react'
import '../components/assets/css/Skills.css'
import ProgressBar from "@ramonak/react-progress-bar";
import '../components/assets/css/responsive/Skill.css'

// import Cube from '../components/Cube';
import { motion } from 'framer-motion';
const Skills = () => {
  return (
    <motion.div
     className='skills-section'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}>
      <div className="skills-info">
        <h2>Skills & <br /> Experience</h2>
        <div className="skills-paragraph para">
          <p>
            Since beginning my journey as a freelance developer nearly 10 years ago, I’ve done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and consumer use.
          </p>
          <p>
            I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.
          </p>
          <p>
            I also have full-stack developer experience with popular open-source CMS like (WordPress, Drupal, Magento, Keystone.js and others) .
          </p>
        </div>
      </div>
      <div className="skills-animation">
          <div className="progress-section">
            <div className="progress">
              <span>FrontEnd</span>
              <ProgressBar completed={70} customLabel='React' labelClassName='label' height='3px' borderRadius='20px' padding='0px' className="wrapper" bgColor='#1bc3b8' barContainerClassName="bar" animateOnRender={true} transitionDuration='2.5s' />
            </div>

            <div className="progress">
              <span>Backend</span>
              <ProgressBar completed={50} customLabel='React' labelClassName='label' height='3px' borderRadius='20px' padding='0px' className="wrapper" bgColor='#c90468' barContainerClassName="bar" animateOnRender={true} transitionDuration='2.5s' />
            </div>

            <div className="progress">
              <span>React</span>
              <ProgressBar completed={60} customLabel='React' labelClassName='label' height='3px' borderRadius='20px' padding='0px' className="wrapper" bgColor='#0003bd' barContainerClassName="bar" animateOnRender={true} transitionDuration='2.5s' />
            </div>

            <div className="progress">
              <span>Python</span>
              <ProgressBar completed={50} customLabel='React' labelClassName='label' height='3px' borderRadius='20px' padding='0px' className="wrapper" bgColor='#1bc3b8' barContainerClassName="bar" animateOnRender={true} transitionDuration='2.5s' />
            </div>
          </div>     
        <div className="experience">
          <div className="experience-card">
            <div className="experience-card-header">
              <h1>Full stack developer</h1>
              <p>SpiCodeX</p>
              <small>2020-2021</small>
            </div>
            <div className="experience-card-body">
              <p>Website design, website animation and Backend development with safe authentication </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Skills