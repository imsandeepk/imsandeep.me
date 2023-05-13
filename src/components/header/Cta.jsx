import React from 'react'
import {GiCoffeeCup} from "react-icons/gi"
import {GrDocument} from "react-icons/gr"

const Cta = () => {
  return (
    <div className='Cta'>
        <a href='https://drive.google.com/file/d/1lRxM5CchppqNXPtGtJchSL-g7-GgBPaa/view?usp=share_link' className='btn'>Download CV <GrDocument size={15}/></a>
        <a href='https://bmc.link/iamsandeep' className='btn btn-primary'>Buy Me A Coffee <GiCoffeeCup size={25}/></a>
        
    </div>
  )
}

export default Cta