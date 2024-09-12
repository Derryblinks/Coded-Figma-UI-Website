import React from 'react'
import Logo1 from '../assets/clientLogos/Logo-1.png'
import Logo2 from '../assets/clientLogos/Logo-2.png'
import Logo3 from '../assets/clientLogos/Logo-3.png'
import Logo4 from '../assets/clientLogos/Logo-4.png'
import Logo5 from '../assets/clientLogos/Logo-5.png'
import Logo6 from '../assets/clientLogos/Logo-6.png'
import Logo from '../assets/clientLogos/Logo.png'

const OurClients = () => {
  return (
    <div className='Our-Clients'>
        <div className='client-Info'>
            <h1>Our Clients</h1>
            <p>Our clients are the backbone of our business. We are proud to work with a
                diverse range of clients across various industries.</p>                
        </div>
        <div className="clients">
            <div className="client">
                <img src={Logo1} alt="Client 1" />
            </div>
            <div className="client" >
                <img src={Logo2} alt="Client 1" />
             </div>
             <div className="client">
                <img src={Logo3} alt="Client 1" />
             </div>
             <div className="client">
                <img src={Logo4} alt="Client 1" />
            </div>
            <div className="client">
                <img src={Logo5} alt="Client 1" />
            </div>
            <div className="client">
                <img src={Logo6} alt="Client 1" />
            </div>
            <div className="client">
                <img src={Logo} alt="Client 1" />
            </div>                
            </div>
       
    </div>
  )
}

export default OurClients