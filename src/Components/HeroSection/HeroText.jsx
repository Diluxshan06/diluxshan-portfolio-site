import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/varients'

const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center md:text-left sm:text-center'>
        <motion.h2
        variants={fadeIn('down',0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{once:false, amount:0}}
        className='lg:text-2xl sm:text-xl text-cyan uppercase' >Full Stack Software Engineer</motion.h2>
        <motion.h1
        variants={fadeIn('right',0.4)}
        initial='hidden'
        whileInView='show'
        viewport={{once:false, amount:0}}
         className='bg-clip-text md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special uppercase' style={{background:"linear-gradient(to right,#15d1e9,#88e5f0,#fb9718,#fac27b,#d28422,#88e5f0,#009fb3,#15d1e9,#fb9718,#fac27b )", backgroundSize:"200%", backgroundClip:"text", WebkitTextFillColor:"transparent", animation:"gradient 4s linear infinite"}} >
          DILUXSHAN JOGASINKAM
        </motion.h1>
        <motion.p
        variants={fadeIn('up',0.6)}
        initial='hidden'
        whileInView='show'
        viewport={{once:false, amount:0}}
         className='text-white text-lg mt-4'>Passionate Full Stack Developer dedicated to crafting <br/> responsive, scalable, and user-focused web applications.</motion.p>
    </div>
  )
}

export default HeroText