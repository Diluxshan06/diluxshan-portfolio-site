import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'
import AllProjectsArray from './AllProjectsArray'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/varients'

const ProjectMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] px-4 mx-auto'>
        <motion.div
        variants={fadeIn('up',0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{once:false, amount:0}}
        >
          <ProjectText/>
        </motion.div>
        <div className='max-w-[900px] flex flex-col gap-20 mx-auto mt-12'>
            {AllProjectsArray.map((project,index)=>{
                return <SingleProject key={index} project={project.name} desc={project.desc} year={project.year} align={project.align} image={project.image} link={project.link} />
            })}
        </div>
    </div>
  )
}

export default ProjectMain