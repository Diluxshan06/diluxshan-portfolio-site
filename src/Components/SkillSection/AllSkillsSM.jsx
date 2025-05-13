import React from 'react'
import skills from './SkillsArray'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/varients'

const AllSkillsSM = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
        {skills.map((skill,index)=>{
            return(
                <motion.div
                variants={fadeIn('up','0.2')}
                initial='hidden'
                whileInView='show'
                viewport={{once:false, amount:0.7}}
                key={index} className='flex flex-col items-center'>
                    <div  className='text-7xl text-orange'>{skill.icon}</div>
                    <p className='text-center mt-4 text-white'>{skill.skill}</p>
                </motion.div>
            )
        })}
    </div>
  )
}

export default AllSkillsSM