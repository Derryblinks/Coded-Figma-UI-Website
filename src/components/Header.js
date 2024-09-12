import React from 'react'
import '../index.css'
import logo from '../assets/Down.png'
// import mainLogo from "../assets/Logo.png"



function Header() {
  return (
    <div className='header-stretch'>
        <header className='header'>
           <h1>Logo</h1>
           {/* <img src={mainLogo} alt="Logo" /> */}
           <nav>
            <ul>
                <li><a href='#google.com'>Home</a></li>
                <li><a href='#google.com'>community</a></li>
                <li><a href='#google.com'>features</a></li>
                <li><a href='#google.com'>blog</a></li>
                <li><a href='#google.com'>Pricing</a></li>
                <li>
                    <button className='btn'>Register Now
                        <img src={logo} alt="arrow" className='logo'/>
                    </button>
                </li>
            </ul>
            </nav>
          
        </header>
    </div>
 
  )
}

export default Header