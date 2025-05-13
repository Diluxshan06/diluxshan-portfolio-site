import React from 'react'
import ExperienceArray from './ExperienceArray'
import { FaArrowRight } from "react-icons/fa";
import SingleExperience from './SingleExperience';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/varients';

const AllExperience = () => {
  return (
    // if add more in ExperienceArray put style flex md:flex-row sm:flex-col items-center justify-between'
    <div className=' flex flex-col items-center justify-between'>
      {ExperienceArray.map((exp,index)=>{
        return <>
          <SingleExperience key={index} experience={exp} />
          <motion.div
          variants={fadeIn('left',0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{once:false, amount:0}}
          >
           {index < ExperienceArray.length-1? <FaArrowRight className='text-6xl text-orange lg:block sm:hidden'/> : null}
          </motion.div>
        </>
      })}
    </div>
  )
}

export default AllExperience