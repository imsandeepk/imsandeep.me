import React from 'react'
import Cta from './Cta'
import "./header.css"
import ME from "../../assets/images/uk.png"
import Headersocial from './Headersocial'

const header = () => {
  return (
      <header>
          <div className="container header_container">
              <h5>Hello I am</h5>
              <h1>Sandeep </h1>
              <h5 className="text-light">A Geek</h5>
              <Cta/>
              <Headersocial/>
              <div className="Me"><img src={ME} alt="ME" className='center' /></div>
          </div>
      </header>
  )
}

export default header