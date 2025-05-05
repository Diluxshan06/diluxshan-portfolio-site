import React from 'react'
import skills from './SkillsArray'
import SingleSkill from './SingleSkill'


const AllSkills = () => {
  return (
    <div className='flex justify-center items-center gap-2 relative mx-auto max-w-[1200px]'>
        {skills.map((skill,index) => {
            return <SingleSkill key={index} text={skill.skill} imgSvg={skill.icon} />
        })}
    </div>
  )
}

export default AllSkills