import React from 'react'
import Pana from '../assets/pana.png'

const Illustration = () => {
  return (
    <div className='illustrationInfo'>
        <div>
            <img src={Pana} alt="Illustration" className='illustration-image'/>
            
        </div>
        <div classsName='PanaInfo'>
            <h1>How to design your site footer like we did</h1>
            <p> 
                Donec a eros justo. Fusce egestas tristique ultricesDonec a eros justo. Fusce egestas tristique ultrices.<br/>
                Donec a eros justo. Fusce egestas tristique ultrices.Donec a eros justo. Fusce egestas tristique ultrices <br/>
                Donec a eros justo. Fusce egestas tristique ultrices.Donec a eros justo. Fusce egestas tristique ultrices
           </p>
           <button className='btn'>Learn More</button>
        </div>
    </div>
  )
}

export default Illustration