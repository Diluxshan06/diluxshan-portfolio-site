import React from 'react'
import skills from './SkillsArray'

const AllSkillsSM = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
        {skills.map((skill,index)=>{
            return(
                <div key={index} className='flex flex-col items-center'>
                    <div  className='text-7xl text-orange'>{skill.icon}</div>
                    <p className='text-center mt-4 text-white'>{skill.skill}</p>
                </div>
            )
        })}
    </div>
  )
}

export default AllSkillsSM