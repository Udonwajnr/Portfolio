import React from 'react'
import '../components/assets/css/Portfolio.css'
import { motion } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../components/layout/ResponsiveLayout.css'
import '../components/assets/css/responsive/Portfolio.css'

const Portfolio = ({data}) => {
  return (
    <motion.div className='portfolio'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="portfolio-header">
        <h2>My works</h2>
      </div>
    <div className="portfolio-projects">
      {
        data?.map((data)=>{
          return (
     <div key={data?.id}  className="portfolio-card">
        <div className="card">
          <div className="card-img">
            <LazyLoadImage
            key={data.id}
              alt='testing image'
              src={data?.image[0]?.url}
              effect="blur"
              height={'100%'}
            />
          </div>
          <div className="card-body">
            <div className="circle-link">
                    <a target='_blank' rel="noreferrer" href={data?.linkToProject}>view <br /> project</a>
            </div>
          </div>
        </div>
      </div>
          )
        })

      }

    </div>

    </motion.div>
  )
}

export default Portfolio