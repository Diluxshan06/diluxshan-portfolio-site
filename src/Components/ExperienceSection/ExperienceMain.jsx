import React from 'react'
import ExperienceText from './ExperienceText'
import ExperienceTop from './ExperienceTop'
import AllExperience from './AllExperience'

const ExperienceMain = () => {
  return (
    <div id='experience' className='max-w-[1200px] px-4 mx-auto'>
        <ExperienceText/>
        <ExperienceTop/>
        <div className='w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden'></div>
        <AllExperience/>
    </div>
  )
}

export default ExperienceMain