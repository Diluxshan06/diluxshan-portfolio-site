import React from 'react'

const SingleSkill = ({imgSvg, text}) => {
  return (
    <div className='hover:-translate-y-10 transition-all duration-500'>
        <div className='flex flex-col relative items-center gap-2'>
            <div className='flex bg-white text-cyan w-[100px] h-[100px] justify-center items-center rounded-full hover:scale-105 transform translate-all duration-500 hover:text-darkGrey text-6xl border-4 border-orange'>{imgSvg}</div>
            <p className='text-white font-bold'>{text}</p>
        </div>
        <div className='w-[100px] h-[200px] bg-orange absolute top-[50px] -z-10'></div>
    </div>
  )
}

export default SingleSkill