import React, { useState } from 'react'
import { WiDaySunny } from "react-icons/wi";
import { IoIosStarOutline } from "react-icons/io";
import { MdOutlineWork } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { FaHouse } from "react-icons/fa6";
import {Link, NavLink} from 'react-router-dom'

function Tabs({items, impitems, workitems, peritems, hitems}) {

  const linkstyle = ({isActive}) => {
    return {
      backgroundColor : isActive ? 'white' : '#765ee6',
      color: isActive ? 'black' : 'white'
    }
  }

  return (
    <div className='d-flex flex-column tab px-2 py-5 tab mt-3'>
        
        <nav className='px-2'>
          <NavLink to = "/" className='nav-link rounded mb-2 link' style={linkstyle}><span className='d-flex justify-content-between'><span><><WiDaySunny className='me-3'/></>Today</span><span className='pe-md-5'>{items.length}</span></span></NavLink>

          <NavLink to = "/important" className='nav-link mb-2 link rounded' style={linkstyle}><span className='d-flex justify-content-between'><span><><IoIosStarOutline className='me-3'/></>Important</span><span className='pe-md-5'>{impitems.length}</span></span></NavLink>

          <NavLink to = "/work" className='nav-link mb-2 link rounded' style={linkstyle}><span className='d-flex justify-content-between'><span><><MdOutlineWork className='me-3'/></>Work</span><span className='pe-md-5'>{workitems.length}</span></span></NavLink>

          <NavLink to = "/personal" className='nav-link mb-2 link rounded' style={linkstyle}><span className='d-flex justify-content-between'><span><><IoIosMenu className='me-3'/></>Personal</span><span className='pe-md-5'>{peritems.length}</span></span></NavLink>

          <NavLink to = "/house" className='nav-link mb-2 link rounded' style={linkstyle}><span className='d-flex justify-content-between'><span><><FaHouse className='me-3'/></>House</span><span className='pe-md-5'>{hitems.length}</span></span></NavLink>
        </nav>
    </div>
  )
}

export default Tabs
