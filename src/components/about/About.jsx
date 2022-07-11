import React from 'react'
import "./About.css"
import Me from "../../assets/images/me.jpeg"
import {FaMoneyBillAlt} from "react-icons/fa"
import {TbBoxModel} from "react-icons/tb"
import {MdDeveloperMode}  from "react-icons/md"

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaMoneyBillAlt className='about_icon'/>
              <h5>Finance</h5>

            </article>
            <article className='about_card'>
              <TbBoxModel className='about_icon'/>
              <h5>Machine Learning</h5>

            </article>
            <article className='about_card'>
              <MdDeveloperMode className='about_icon'/>
              <h5>Devlopment</h5>

            </article>
          </div>
          <p>Hello there! I am Sandeep, I am doing my UnderGrad from IIT-Delhi in Chemical Engineering.
            My interests lies in FinTech domain but I like Machine Learning and some outdoor sports too.
            Trying to explore as many aspects of tech as I can if my college allows me to do so rather than writing assignments :(
          </p>
        </div>
        
        </div>
    </section>
  )
}

export default About