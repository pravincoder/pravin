import React from 'react'
import './Nav.css'
import {FaHome} from 'react-icons/fa'
import {FaUserCircle} from 'react-icons/fa'
import {MdLibraryBooks} from 'react-icons/md'
import {RiServiceFill} from 'react-icons/ri'
import {RiMessage3Fill} from 'react-icons/ri'
import { useState } from 'react'
export const Nav = () => {
  const [activeNav,setActiveNav] =useState('#')
  return (
    <nav>
      <a href='#home' onClick={()=>setActiveNav('#')} className={activeNav==='#' ? 'active':''}><FaHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active':''}><FaUserCircle/></a>
      <a href='#experience'onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience' ? 'active':''}><MdLibraryBooks/></a>
      <a href='#services' onClick={()=>setActiveNav('#service')} className={activeNav==='#service' ? 'active':''}><RiServiceFill/></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active':''}><RiMessage3Fill/></a>
    </nav>
  )
}
export default Nav