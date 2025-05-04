import React from 'react'
import DiluxPic from '../../../public/images/DiluxPic.png'
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <div className='flex h-full justify-center items-center'>
        <img src={DiluxPic} alt='DiluxPic' className='max-h-[450px] w-auto'/>
        <div className='absolute flex -z-10 justify-center items-center animate-pulse'>
          <PiHexagonThin className='md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]'/>
        </div>
    </div>
  )
}

export default HeroPic