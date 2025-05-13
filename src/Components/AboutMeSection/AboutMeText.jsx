import React from 'react'
import {Link} from 'react-scroll'
import Diluxshan_CV from '../../../public/CV/Diluxshan.J_CV_New.pdf'

const AboutMeText = () => {
  return (
    <div
     className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
        <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
        <p className='text-white'>I'm Diluxshan Jogasinkam, a Computer Science (Hons) undergraduate
             at the University of Vavuniya, with a strong interest in full-stack software
              development. I have hands-on experience building responsive and scalable 
              applications using React, Django, and Spring Boot.<br/>

            I’m a quick learner with a passion for continuous improvement and innovation.
             I enjoy exploring new technologies and solving real-world challenges through clean,
              efficient code. I'm always open to opportunities that help me grow and make a meaningful impact.<br/>

            My mission is to become a skilled and versatile software engineer 
            who builds solutions that create real value for people and businesses.

        </p>
        <div className='flex justify-between items-center gap-96'>
        <Link to='projects' spy={true} smooth={true} offset={-130} duration={500}><button className='border border-orange py-2 px-4 rounded-full hover:bg-orange text-lg flex items-center mt-10 transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>My Projects</button></Link>
        <button className='border border-orange py-2 px-4 rounded-full hover:bg-orange text-lg flex items-center mt-10 transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'><a href={Diluxshan_CV} download='Diluxshan_CV'>View Resume</a></button>
        </div>
        
    </div>
  )
}

export default AboutMeText