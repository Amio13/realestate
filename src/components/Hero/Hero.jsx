import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup/'
const Hero = () => {
  return (
    <section className='hero-wrapper'>
        <div className='paddings innerWidth hero-container flexCenter'>
          {/* left side */}
          <div className='flexColStart hero-left'>

             <div className='hero-tittle'>
             <div className='orange-circle'/>
                <h1>
                   Get <br /> a Home <br />from a House
                </h1>
             </div>
             <div className=' flexColStart hero-des'>
              <span className='secondaryText'> Find your dream properties at affodable rate and at desirable taste</span>
               <span className='secondaryText'>Forget all the strenous part of doing so as we are here to relieve you of that</span>
             </div>
                <div className='flexCenter search-bar'>
                      <HiLocationMarker color='var(--blue)' size ={25}/>
                      <input  type='text'/>
                      <button className='button'>search</button>
                       </div>
               <div className='flexCenter stats'> 
               <div className='flexColStart stat'>
                <span>
                   <CountUp start ={56} end={90} duration ={4}/>
                   <span>+</span>
                </span>
                <span className='secondaryText'>
                    Premium Products
                </span>
               </div>

               <div className='flexColStart stat'>
                <span>
                   <CountUp start ={34} end={56} duration ={4}/>
                   <span>+</span>
                </span>
                <span className='secondaryText'>
                   Projects
                </span>
               </div>

               <div className='flexColStart stat'>
                <span>
                   <CountUp end={19}/>
                   <span>+</span>
                </span>
                <span className='secondaryText'>
                    Happy Customers
                </span>
               </div>
               </div>
          </div>

          {/* right side */}
          <div className=' flexCenter hero-right'>
            <div className='image-container'>
            <img src='./hero-image.png' alt=''/>
            </div>
           
          </div>
        </div>
    </section>
  )
}

export default Hero