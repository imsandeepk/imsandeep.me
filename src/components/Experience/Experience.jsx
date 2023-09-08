import React from 'react'
import "./Experience.css"
import{RiFlutterFill} from "react-icons/ri"
import{FaPython} from "react-icons/fa"
import{DiReact} from "react-icons/di"
import{SiFlask} from "react-icons/si"
import{SiMongodb} from "react-icons/si"
import{SiScikitlearn} from "react-icons/si"
import{AiFillApi} from "react-icons/ai"
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>MY experience</h2>
      <div className='container experience_container'>
        <h3>Portfolio</h3>
        <div className='experience_content'>
          <article>
          <div className='icons'><FaPython/></div>
            <div>
            <h4>Python</h4>
            <small className='text-light'>Experienced</small>
            </div>

          </article>
          <article>
          <div className='icons'><RiFlutterFill/></div>
            <h4>React Native</h4>
            <small className='text-light'>Intermediate</small>

          </article><article>
          <div className='icons'><DiReact/></div>
            <h4>ReactJS</h4>
            <small className='text-light'>Intermediate</small>
            </article>
            <article>
            <div className='icons'><SiFlask/></div>
            <h4>Flask</h4>
            <small className='text-light'>Intermediate</small>

          </article>
          <article>
          <div className='icons'><AiFillApi/></div>
            <h4>Api Development</h4>
            <small className='text-light'>Intermediate</small>

          </article>

        </div>
      </div>
    </section>
  )
}

export default Experience