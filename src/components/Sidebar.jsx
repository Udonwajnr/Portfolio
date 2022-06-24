import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
// import { AiOutlineTwitter } from 'react-icons/ai'
// import { AiOutlineInstagram } from 'react-icons/ai'
import './assets/css/Sidebar.css'
import { AiOutlineMail } from 'react-icons/ai'
import { FaSuitcase } from 'react-icons/fa'
import { BsFillGearFill } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import '../components/assets/css/responsive/Sidebar.css'
const Sidebar = () => {


    return (
        <>
            <div className="sidebar">
                {/* <div className="logo">
                    <Link to={'/'} className='font-logo'>
                        U
                    </Link>
                </div> */}

                <div className="nav-links">
                    <NavLink className='nav' to={'/'}>

                        {({ isActive }) => (
                            <div className="nav-item attr">
                                <AiFillHome className={isActive ? 'nav-icons active' : 'nav-icons'} />
                                <span>Home</span>
                            </div>
                        )
                        }
                    </NavLink>

                    <NavLink className='nav' to={'/about'} >
                        {({ isActive }) => (
                            <div className="nav-item attr">
                                <BsFillPersonFill className={isActive ? 'nav-icons active' : 'nav-icons'} />
                                <span>About</span>
                            </div>
                        )
                        }

                    </NavLink>

                    <NavLink className='nav' exact='true' to={'/skills'}>
                        {({ isActive }) => (
                            <div className="nav-item attr">
                                <BsFillGearFill className={isActive ? 'nav-icons active' : 'nav-icons'} />
                                <span>Skill</span>
                            </div>
                        )
                        }
                    </NavLink>

                    <NavLink className='nav' to={'/portfolio'}>
                        {({ isActive }) => (
                            <div className="nav-item attr">
                                <FaSuitcase className={isActive ? 'nav-icons active' : 'nav-icons'} />
                                <span>Portfolio</span>
                            </div>
                        )
                        }
                    </NavLink>

                    <NavLink className='nav' to={'/contact'}>
                        {({ isActive }) => (
                            <div className="nav-item attr">
                                <AiOutlineMail className={isActive ? 'nav-icons active' : 'nav-icons'} />
                                <span>Contact</span>
                            </div>
                        )
                        }

                    </NavLink>
                </div>

                <div className="social-links">
                    <ul>
                        {/* <li><a href="https://twitter.com/Udonwa7" ><AiOutlineTwitter className='social-icons' /></a></li> */}
                        {/* <li><a href="https://www.instagram.com/umoh__/"><AiOutlineInstagram className='social-icons' /></a></li> */}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar