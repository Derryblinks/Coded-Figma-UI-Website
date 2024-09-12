import React from 'react'
import Rafiki from '../assets/rafiki.png'

const MiddleInfo = () => {
  return (
    <div className='allInfo'>
        <div class>
            <img src={Rafiki} alt='rafiki-image' className='rafiki-image'/>
        </div>
        <div className='info'>
        <h1>The unseen of spending three<br/> years at Pixelgrade</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className='btn'>Learn more</button>
        </div>
        
    </div>
  )
}

export default MiddleInfo