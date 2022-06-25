import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../components/assets/css/Navbar.css'
import { AiOutlineMail } from 'react-icons/ai'
import { FaSuitcase } from 'react-icons/fa'
import { BsFillGearFill } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import '../components/assets/css/responsive/Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-nav-links">
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
    </div>
  )
}

export default Navbar