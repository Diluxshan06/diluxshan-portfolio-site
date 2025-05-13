import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/varients';

const SingleExperience = ({experience}) => {
  return (
    // if add more experince in ExperienceArray put for style "md:h=[350px] md:w-[240px] sm:h-auto sm:w-full"
    <motion.div
    variants={fadeIn('right','0.2')}
    initial='hidden'
    whileInView='show'
    viewport={{once: false, amount:0}}
    className=' border-2 border-orange border-dashed rounded-2xl mt-2 p-4'> 
      <p className='font-bold text-cyan'>{experience.job}</p>
      <p className='text-orange'>{experience.company}</p>
      <p className='text-lightGrey'>{experience.date}</p>
      <ul className='list-disc mt-4 pl-4 text-white'>{experience.responsibilities.map((res,index)=>{
        return <li key={index}>{res}</li>
      })}</ul>
    </motion.div>
  )
}

export default SingleExperience