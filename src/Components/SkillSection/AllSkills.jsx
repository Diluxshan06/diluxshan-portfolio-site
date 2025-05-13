import React from 'react'
import skills from './SkillsArray'
import SingleSkill from './SingleSkill'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/varients'


const AllSkills = () => {
  return (
    <div className='flex justify-center items-center gap-2 relative mx-auto max-w-[1200px]'>
        {skills.map((skill,index) => {
            return (
            <motion.div
            variants={fadeIn('up',`${index*0.2}`)}
            initial='hidden'
            whileInView='show'
            viewport={{once:false, amount:0.7}}
            >
              <SingleSkill key={index} text={skill.skill} imgSvg={skill.icon} />
            </motion.div>)
        })}
    </div>
  )
}

export default AllSkills