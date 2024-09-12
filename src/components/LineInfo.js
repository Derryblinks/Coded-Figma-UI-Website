import React from 'react'
import membeershipIcon from '../assets/membership icon.png'
import GreetingIcon from '../assets/Greeting.png'
import HandIcon from '../assets/handIcon.png'
import FolderIcon from '../assets/Folder.png'
import '../index.css'

const LineInfo = () => {
  return (
    <div className='local-info'>
        <div>
            <h2>Having a local <br/> <span id='span-text'> business reivent itself</span></h2>
            <p>LWe reached here with our hard work and dedication</p>
        </div>
        <div className='grid-items'>
            <div className='membership'>
                <img src={membeershipIcon} alt="membership" className="membership-icon"/>
              <div className='numbers'>
                <h2>2,245,341</h2>
                <p>members</p>
              </div>
             
           </div>
            <div className='membership'>
                <img src={GreetingIcon} alt="membership" className="membership-icon"/>
              <div className='numbers'>
                <h2>2,245,341</h2>
                <p>clubs</p>
              </div>
             
           </div>
            <div className='membership'>
                <img src={HandIcon} alt="membership" className="membership-icon"/>
              <div className='numbers'>
                <h2>2,245,341</h2>
                <p>Event booking</p>
              </div>
             
           </div>
            <div className='membership'>
                <img src={FolderIcon} alt="membership" className="membership-icon"/>
              <div className='numbers'>
                <h2>2,245,341</h2>
                <p>Payment</p>
              </div>
             
           </div>
      </div>
    </div>
  )
}

export default LineInfo