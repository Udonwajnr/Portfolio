import React from 'react'
import Sidebar from '../Sidebar'
import '../layout/Layout.css'
import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
const Layout = () => {
  

  return (
    <div className='layout'>
       <aside className='aside'>
        <Sidebar />
      </aside>      
      <div className='pages'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout