import React from 'react'
import squareImage from '../assets/squareImage.png'
import squareImage2 from '../assets/squareImage2.png'
import squareImage3 from '../assets/squareImage3.png'
import Rightarrow from '../assets/Rightarrow.png'



const Cardbutton = () => {
  return (
    <div className='card-info'>
      <div>
        <h1>Caring is the new marketing</h1>
        <p>
          The Nextcent blog is the best place to read about the latest membership insights,<br/> 
          trends and more. See who's joining the community, read about how our community are<br/>
          increasing their membership income and lot's more.
           ​</p>
      </div>

      <div className='all-square-info'> 
        <div>
        <div className='square-info'> 
        <img src={squareImage} alt='square-image' className='square-image'/>
      </div>  
      <div className='squarecard-info'>
        <p id="subcard-info">Creating Streamlined <br/>Safeguarding Processes <br/> with OneRen</p>
        <h3> Readmore <img src={Rightarrow} alt='Rightarrow' className='Rightarrow'/></h3>
        </div> 
        </div>
        <div>
        <div className='square-info'> 
        <img src={squareImage2} alt='square-image' className='square-image'/>
      </div>  
      <div className='squarecard-info'>
        <p id="subcard-info">Creating Streamlined <br/>Safeguarding Processes <br/> with OneRen</p>
        <h3> Readmore <img src={Rightarrow} alt='Rightarrow' className='Rightarrow'/></h3>
        </div> 
        </div>
        <div>
        <div className='square-info'> 
        <img src={squareImage3} alt='square-image' className='square-image'/>
      </div>  
      <div className='squarecard-info'>
        <p id="subcard-info">Creating Streamlined <br/>Safeguarding Processes <br/> with OneRen</p>
        <h3> Readmore <img src={Rightarrow} alt='Rightarrow' className='Rightarrow'/></h3>
        </div> 
        </div>
           
       </div>
     
      
    </div>
  )
}

export default Cardbutton