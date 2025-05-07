import React from 'react'
import ExperienceIfro from './ExperienceIfro'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
        <p className='text-3xl text-orange text-special font-bold uppercase text-center'>Since 2025</p>
        <div className='flex justify-center items-center gap-4'>
            <ExperienceIfro number="6" text="Months"/>
                <p className='font-bold text-6xl text-lightBrown'>-</p>
            <ExperienceIfro number="4" text="Projects"/>
        </div>
        <p className='text-center text-white'>With 6 months of experience building dynamic and user-friendly web applications.</p>
        {/* <ExperienceIfro number="$100k" text="Max Budget"/> */}
    </div>
  )
}

export default ExperienceTopLeft