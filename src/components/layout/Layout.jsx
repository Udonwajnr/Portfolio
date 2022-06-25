import React from 'react'
import Sidebar from '../Sidebar'
import '../layout/Layout.css'
import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../Navbar'

const Layout = () => {


  return (
<div className="layout-section">
  <div className="navbar-section">
    <Navbar/>
  </div>

    <div className='layout'>
       <aside className='aside'>
        <Sidebar />
      </aside>      
      <div className='pages'>
        <Outlet />
      </div>
    </div>
</div>

  )
}

export default Layout