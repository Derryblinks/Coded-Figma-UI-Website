import React from 'react'
import TimsmithImage from '../assets/image 9.png'
import Logo1 from '../assets/clientLogos/Logo-1.png'
import Logo2 from '../assets/clientLogos/Logo-2.png'
import Logo3 from '../assets/clientLogos/Logo-3.png'
import Logo4 from '../assets/clientLogos/Logo-4.png'
import Logo5 from '../assets/clientLogos/Logo-5.png'
import Logo6 from '../assets/clientLogos/Logo-6.png'
// import Logo from '../assets/clientLogos/Logo.png'
import rightArrow from '../assets/Rightarrow.png'




const Timsmithpage = () => {
  return (
    <div className='illustrationInfo'>
        <div>
            <img src={TimsmithImage} alt="Illustration" className='illustration-image'/>
            
        </div>
        <div classsName='PanaInfo'>
            <h1>How to design your site footer like we did</h1>
            <p> 
                Donec a eros justo. Fusce egestas tristique ultricesDonec a eros justo. Fusce egestas tristique ultrices.<br/>
                Donec a eros justo. Fusce egestas tristique ultrices.Donec a eros justo. Fusce egestas tristique ultrices <br/>
                Donec a eros justo. Fusce egestas tristique ultrices.Donec a eros justo. Fusce egestas tristique ultrices
           </p>
           <h3 id='span-text'>Learn More</h3>
           <p>British Dragon Boat Racing Association</p>
           
           <div className="clients-for-Tim">
            <div className="client-for-Tim">
                <img src={Logo1} alt="Client 1" />
            </div>
            <div className="client-for-Tim" >
                <img src={Logo2} alt="Client 1" />
             </div>
             <div className="client-for-Tim">
                <img src={Logo3} alt="Client 1" />
             </div>
             <div className="client-for-Tim">
                <img src={Logo4} alt="Client 1" />
            </div>
            <div className="client-for-Tim">
                <img src={Logo5} alt="Client 1" />
            </div>
            <div className="client-for-Tim">
                <img src={Logo6} alt="Client 1" />
            </div>
            {/* <div className="client-for-Tim">
                <img src={Logo} alt="Client 1" />
            </div>  */}
                 <div>
                    <h3 className='span-text'>Meet all customers <img src={rightArrow} alt='rightArrow'/> </h3>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Timsmithpage