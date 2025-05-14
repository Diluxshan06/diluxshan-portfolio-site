import React from 'react'
import DiluxPic from '../../assets/images/DiluxPic.png'
import { PiHexagonThin } from "react-icons/pi";
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/varients'

const HeroPic = () => {
  return (
    <motion.div
    variants={fadeIn('left',0.2)}
    initial='hidden'
    whileInView='show'
    viewport={{once:false, amount:0}}
    className='flex h-full justify-center items-center'>
        <img src={DiluxPic} alt='DiluxPic' className='max-h-[450px] w-auto'/>
        <div className='absolute flex -z-10 justify-center items-center animate-pulse'>
          <PiHexagonThin className='md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]'/>
        </div>
    </motion.div>
  )
}

export default HeroPic