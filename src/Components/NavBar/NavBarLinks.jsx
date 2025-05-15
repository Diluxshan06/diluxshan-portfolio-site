import React from 'react'
import AllNavBarArray from './AllNavBarArray';
import {Link} from 'react-scroll';

const NavBarLinks = () => {
  return (
    <ul className='flex flex-col gap-6 text-white font-bold text-center sm:flex-col sm:top-[120%] lg:flex-row sm:absolute sm:left-1/2 lg:relative left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full py-4 '>
      {AllNavBarArray.map((link, index) => {
        return(
            <li key={index} className='group'>
                <Link to={link.section} spy={true} smooth={true} offset={-130} duration={500}
                className='cursor-pointer hover:text-cyan text-white transition-all duration-500'
                >{link.link}</Link>
                <div className='mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500'></div>
            </li>
        );
      })}
    </ul>
  );
}

export default NavBarLinks;