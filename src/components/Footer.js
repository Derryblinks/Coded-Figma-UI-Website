import React from 'react'
import Down from "../assets/Down.png"

const Footer = () => {
  return (
    <div className='footerInfo'>
        <h1> 
        Regularly seek feedback from your supervisors <br/>
        and peers on your performance and contributions.
        </h1>
        <button className='btn'>
            Get a Demo 
            <img src={Down} alt='arrowImage' className='rightArrow'/>
        </button>
    
    </div>
  )
}

export default Footer