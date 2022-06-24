import './App.css';
import { useState,useEffect } from 'react';
import {Route,Routes} from 'react-router-dom'
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Triangle } from 'react-loader-spinner';
import { useLocation } from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion'
import request from 'graphql-request'
import Particls from './components/Particls';


function App() {
  const [data,setData] = useState([])

  const portfolioCard=async()=>{
    const  {projects}  = await request("https://api-eu-west-2.graphcms.com/v2/cl3w98l7egfum01xk63op5a7s/master",
    `
    {
      projects{
        id
        name
        linkToProject
        image{
          url
          fileName
        }
      }
    }
    `
    )

    
   setData(projects)
  }

  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },6000)
  },[])

  useEffect(()=>{
    portfolioCard()
  },[])


  const location = useLocation()

  return (  
    <div className="App">
      {
        loading
        ?
        <div
         className="loading-screen">
            <Triangle color='#1bc3b8'/>
        </div>
        :
      <div className="routes">
        <Particls/>
        <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/'  element={<Layout/>}>
            <Route path='/'index element={<Home/>}/>
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/portfolio' element={<Portfolio  data={data}/>} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/*' element={<Home />} />
          </Route>
        </Routes>
        </AnimatePresence>
      </div>
      }
    </div>
  );
}

export default App;
