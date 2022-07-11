import React from 'react'
import {AiFillHome} from "react-icons/ai"
import{AiFillContacts} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {MdWork} from "react-icons/md"
import "./nav.css"
import { useState } from 'react'
 
const Nav = () => {
  const [activeNav, setActiveNav]= useState("#")
  return (
    
    <nav>
      <a href='#' onClick={()=> setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiFillHome/></a>
      <a href='#about'  onClick={()=> setActiveNav("#about")}className={activeNav === "#about" ? "active" : ""}><AiOutlineUser/></a>
      <a href='#experience' onClick={()=> setActiveNav("#experience")}className={activeNav === "#experience" ? "active" : ""}><MdWork/></a>
      <a href='#contact' onClick={()=> setActiveNav("#contact")}className={activeNav === "#contact" ? "active" : ""}><AiFillContacts/></a>
    </nav>
  )
}

export default Nav