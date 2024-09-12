import React from 'react'
import SocialIcons from '../assets/SocialMedia/Social Icons-1.png'
import SocialIcons1 from '../assets/SocialMedia/Social Icons-2.png'
import SocialIcons2 from '../assets/SocialMedia/Social Icons-3.png'
import SocialIcons3 from '../assets/SocialMedia/Social Icons.png'
import Send from '../assets/send.png'

const MainFooter = () => {
  return (
    <div className='Mainfooter-Info'>
        <div>
        <h3>Logo</h3>
        <div className='copy-right'>Copyright © 2020 Landify UI Kit.<br/>All rights reserved</div>
       
        < div className='SocialIcons'>
            <img src={SocialIcons} alt='icon1' className='Media-Icon'/>
            <img src={SocialIcons1} alt='icon1' className='Media-Icon'/>
            <img src={SocialIcons2} alt='icon1' className='Media-Icon'/>
            <img src={SocialIcons3} alt='icon1'className='Media-Icon'/>
        </div>
        </div>
        
        <div className='Main-footer-Info'>
          <div className="footer-headings">
            <h3>Company</h3>
            <ul>
              <li><a href='#google.com'>About us</a></li>
              <li><a href='#google.com'>Blog</a></li>
              <li><a href='#google.com'>Contact us</a></li>
              <li><a href='#google.com'>Pricing </a></li>
              <li><a href='#google.com'>Testimonials</a></li>
            </ul>
            
          </div>
          <div className="footer-headings">
            <h3>Support </h3>
            <ul>
              <li><a href='#google.com'>Help center</a></li>
              <li><a href='#google.com'>Terms of Service</a></li>
              <li><a href='#google.com'>Contact us</a></li>
              <li><a href='#google.com'>Pricing </a></li>
              <li><a href='#google.com'>Testimonials</a></li>
            </ul>
            
          </div>
          <div className="footer-headings">
            <h3>Stay up to date</h3>
            <div className='email-input-container'>
            <input type='email' placeholder='Your email address' id='newsLetter' required="required" className='email-input'/>      
            <button type="submit" class="send-button">
              <img src={Send} alt="Send" />
            </button>      

            </div>
          </div>
        </div>
        
    </div>
  )
}

export default MainFooter