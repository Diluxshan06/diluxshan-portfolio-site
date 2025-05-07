import React from 'react'

const SingleExperience = ({experience}) => {
  return (
    // if add more experince in ExperienceArray put for style "md:h=[350px] md:w-[240px] sm:h-auto sm:w-full"
    <div className=' border-2 border-orange border-dashed rounded-2xl mt-2 p-4'> 
      <p className='font-bold text-cyan'>{experience.job}</p>
      <p className='text-orange'>{experience.company}</p>
      <p className='text-lightGrey'>{experience.date}</p>
      <ul className='list-disc mt-4 pl-4 text-white'>{experience.responsibilities.map((res,index)=>{
        return <li key={index}>{res}</li>
      })}</ul>
    </div>
  )
}

export default SingleExperience