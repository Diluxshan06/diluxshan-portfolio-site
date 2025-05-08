import React from 'react'

const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center md:text-left sm:text-center'>
        <h2 className='lg:text-2xl sm:text-xl text-cyan uppercase' >Full Stack Software Engineer</h2>
        <h1 className='whitespace-nowrap bg-clip-text md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special uppercase' style={{background:"linear-gradient(to right,#15d1e9,#88e5f0,#fb9718,#fac27b,#d28422,#88e5f0,#009fb3,#15d1e9,#fb9718,#fac27b )", backgroundSize:"200%", backgroundClip:"text", WebkitTextFillColor:"transparent", animation:"gradient 4s linear infinite"}} >
          DILUXSHAN JOGASINKAM
        </h1>
        <p className='text-white text-lg mt-4'>Passionate Full Stack Developer dedicated to crafting <br/> responsive, scalable, and user-focused web applications.</p>
    </div>
  )
}

export default HeroText