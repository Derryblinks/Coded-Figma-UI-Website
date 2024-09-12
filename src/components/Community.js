import React from 'react'
import icon from '../assets/Icon.png'
import icon2 from '../assets/Icon2.png'
import icon3 from '../assets/Icon3.png'
import  '../index.css'


const Community = () => {
    return (
        <div className="community-management-container">
          <h2>Manage your entire community <br/>in a single system</h2>
          <p className="subheading">Who is Nextcent suitable for?</p>
          <div className="cards-container">
            <div className="card">
              <div className="card-icon membership-icon"> <img src={icon} alt='icon'/></div>
              <h3>Membership Organisations</h3>
              <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div className="card">
              <div > <img src={icon2} alt='icon2'/></div>
              <h3>National Associations</h3>
              <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div className="card">
              <div className="card-icon clubs-icon"><img src={icon3} alt='icon3'/></div>
              <h3>Clubs And Groups</h3>
              <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
          </div>
        </div>
      )
}

export default Community