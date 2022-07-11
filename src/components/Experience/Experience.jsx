import React from 'react'
import "./Experience.css"
import{RiFlutterFill} from "react-icons/ri"
import{FaPython} from "react-icons/fa"
import{DiReact} from "react-icons/di"
import{DiCss3} from "react-icons/di"
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
            <h4>Flutter</h4>
            <small className='text-light'>Intermediate</small>

          </article><article>
          <div className='icons'><DiReact/></div>
            <h4>ReactJS</h4>
            <small className='text-light'>Intermediate</small>

          </article><article>
            <div className='icons'><DiCss3/></div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>

          </article><article>
          <div className='icons'><SiMongodb/></div>
            <h4>MongoDB</h4>
            <small className='text-light'>Basic</small>

          </article><article>
          <div className='icons'><SiScikitlearn/></div>
            <h4>SciKit Learn</h4>
            <small className='text-light'>Basic</small>

          </article>
          <article>
          <div className='icons'><AiFillApi/></div>
            <h4>Api</h4>
            <small className='text-light'>Intermediate</small>

          </article>

        </div>
      </div>
    </section>
  )
}

export default Experience