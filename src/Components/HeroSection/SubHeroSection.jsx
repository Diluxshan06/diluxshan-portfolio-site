import React from 'react'

const SubHeroSection = () => {
  return (
    <div className='w-full border-y border-lightGrey flex justify-around text-lightGrey uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 items-center gap-4 bg-brown mt-14'>
        <p>Fast Learner</p>
        <p className='hidden md:block'>Team Work</p>
        <p className='hidden md:block'>Details Master</p>
    </div>
  )
}

export default SubHeroSection