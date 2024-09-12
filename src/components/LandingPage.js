import React from 'react'
import "../index.css"
import illustration from '../assets/Illustration.png'
import Dots from '../assets/Dot.png'

const LandingPage = () => {
  return (
    <div className='landing-page'>
    <div className='hero'>
        <div className='hero-text' >
            <h1 className='hero-text'>Lessons and Insights </h1>
            <span className='sub-text' >From 8 years</span>
            <p>Where to grow your business as a photographer: site or social media?</p>   
            <button className='btn'>Register</button>         
        </div>
        <div>
            <img src={illustration} alt='illustration' className='illustrationImage'></img>
        </div>
        
    </div>
    <div className='Dots'>
            <img src={Dots} alt='Dots' />
        </div>
    </div>
    
  )
}

export default LandingPage