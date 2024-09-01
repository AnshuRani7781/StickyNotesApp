/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";   
import { PiControl } from "react-icons/pi";
import {motion} from "framer-motion" 
const Card = ({data, constrainTsRef, onRemoveCard,index}) => {  
  const [descriptiontoggle,setDescriptionToggle]=useState(false);
  const handledescriptiontoggle=()=>{
    setDescriptionToggle(!descriptiontoggle);
  }  
  const bgColor = `${data.tag.tagColor}`;
  return (  
    <> 
     {descriptiontoggle ? (
        <>
    <motion.div  
        drag  
        whileDrag={{ scale: 1.2 }} 
        dragConstraints={constrainTsRef}  
        dragElastic={0.2} 
        dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }} 
        className=' relative w-60 h-72 rounded-[45px] bg-zinc-900/90 px-7 py-10 overflow-hidden flex-shrink-0' >
          <FaRegFileAlt />
          <p className='text-sm mt-5 leading-tight font-semibold' style={{ color: bgColor }}>{data.desc}</p> 
          <div className='absolute bottom-0 left-0  w-full'>
          <div className='flex items-center justify-between mb-3  px-8  py-3'>
            <h5>{data.date}</h5> 
            <motion.span 
              className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center' 
              onClick={()=>onRemoveCard(index)} 
              whileHover={{scale:1.2,rotate:90, color: `${bgColor}`}}
              transition={{ type: 'spring', stiffness: 300 }}> 
                {data.close?<IoMdClose />:  <MdOutlineFileDownload  size=".7em" color='#fff'/>}
            </motion.span>
          </div>  
          {
            data.tag.isOpen&&(
                <div className='tag w-full pl-5 pr-4 py-4 bg-${data.tag.tagColor}-600 flex items-center justify-between '
                style={{ backgroundColor: bgColor }}>  
                <div>
                  <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3> 
                  </div>  
                  <motion.div 
                      whileHover={{ scale: 1.1, rotate: 180,  }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handledescriptiontoggle}  
                      className='cursor-pointer'>
                      {descriptiontoggle ? (<PiControl size="1.5em" font="bold" />) : (<IoIosArrowDropdownCircle size="1.5em" />)}
                      </motion.div>
                </div>
            )
          }
          </div> 
    </motion.div>  
    </>):
    <>
    <motion.div 
     drag  
     whileDrag={{ scale: 1.2 }} 
     dragConstraints={constrainTsRef}  
     dragElastic={0.2} 
     dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}  
     className='relative w-60 h-12 rounded-[45px] pl-5 pr-4 py-4 flex items-center justify-between'
     style={{ backgroundColor: bgColor }}>
       <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3> 
                  <motion.div 
                      whileHover={{ scale: 1.1, rotate: 180,  }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handledescriptiontoggle}  
                      className='cursor-pointer'>
                      {descriptiontoggle ? (<PiControl size="1.5em" font="bold" />) : (<IoIosArrowDropdownCircle size="1.5em" />)}
                      </motion.div>
    </motion.div>
    </>
}
    </>
  )
}
export default Card