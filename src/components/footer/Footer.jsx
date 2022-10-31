import React from 'react'
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {FaTwitter} from "react-icons/fa"
import "./footer.css"

const footer = () => {
  return (
    <section>
      <footer>
      <a href='#' className='footer_logo'>SANDEEP</a>
      <div className='footer_socials'>
      <a href='https://linkedin.com/in/sandeep-kumar-iitdelhi' target="_blank"><AiFillLinkedin/></a>
      <a href='https://github.com/imsandeepk' target="_blank"><AiFillGithub/></a>
      <a href='https://instagram.com/not_sandeep_?igshid=YmMyMTA2M2Y=' target="_blank"><AiFillInstagram/></a>
      <a href='https://twitter.com/not_sandeep' target="_blank"><FaTwitter/></a></div>
      <div className='footer_copyrights'>
        <small>&copy;All rights reserved.</small>
      </div>
    </footer>
    </section>
    
  )
}

export default footer