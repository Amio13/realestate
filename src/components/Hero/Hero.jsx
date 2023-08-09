import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup/'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <section className=' hero-wrapper'>
        <div className='paddings innerWidth flexCenter hero-container '>
          {/* left side */}
          <div className='flexColStart hero-left'>

             <div className='hero-title'>
             <div className='orange-circle'/>
                <motion.h1
                initial={{y:'2rem',opacity: 0}}
                animate ={{y: 0, opacity:1}}
                transition={{
                  duration: 4,
                  type: 'spring'
                }}
                >
                   Get <br /> a Home <br />from a House
                </motion.h1>
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
               <div className='flexColCenter stat'>
                <span>
                   <CountUp start ={56} end={90} duration ={4}/>
                   <span>+</span>
                </span>
                <span className='secondaryText'>
                    Premium Products
                </span>
               </div>

               <div className='flexColCenter stat'>
                <span>
                   <CountUp start ={34} end={56} duration ={4}/>
                   <span>+</span>
                </span>
                <span className='secondaryText'>
                   Projects
                </span>
               </div>

               <div className='flexColCenter stat'>
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
            <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
           
          >
            <img src="./hero-image.png" alt="houses" />
          </motion.div>
            </div>
           
          </div>
        </div>
    </section>
  )
}

export default Hero