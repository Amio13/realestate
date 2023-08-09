import React, { useState } from 'react'
import { 
 Accordion,
 AccordionItem,
 AccordionItemHeading,
 AccordionItemButton,
 AccordionItemPanel,
 AccordionItemState   
 } from "react-accessible-accordion";
 import "react-accessible-accordion/dist/fancy-example.css";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropDownCircle,
} from "react-icons/md";
import data from "../../utils/accordion.jsx";
import "./Value.css";
import { motion } from 'framer-motion';

const Value = () => {
  return (
    <section id='va' className='v-wrapper'>
<div className='paddings innerWidth flexCenter v-container '>
{/* left side */}
<div className='v-left'>
<div className='image-container'>
<motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
  >         
<img src='./value.png' alt='value' />
</motion.div>
</div>
</div>
{/* right side */}
<div className='flexColStart v-right'>
<span className='orangeText'>Our Value</span>
<span className='primaryText'>Value We Provide </span>
<span className='secondaryText'>
    We always providing thebest services to you.
    <br />
    We believe in customer-oreinted services!
</span>

<Accordion className='accordion'
allowMultipleExpanded={false}
preExpanded={[0]}
>
{
data.map((item, i) =>{
    const [className, setClassName] =useState(null)
    return(
        <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
        <AccordionItemHeading>
        <AccordionItemButton className='flexCenter accordionButton'>
             <AccordionItemState>
                {({expanded}) =>
                expanded 
                ? setClassName("expanded")
                 : setClassName("collapsed")
                 }
             </AccordionItemState>
            <div className='flexCenter icon '>
                  {item.icon}
            </div>
               <span className='primaryText'> 
               {item.heading}
               </span>
               <div className='flexCenter icon'>
                       <MdOutlineArrowDropDown size={20} />
               </div>
                  

        </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <p className='secondaryText'>{item.detail} </p>
        </AccordionItemPanel>



        </AccordionItem>
    )
})
}

</Accordion>
</div>
</div>

    </section>
  )
}

export default Value