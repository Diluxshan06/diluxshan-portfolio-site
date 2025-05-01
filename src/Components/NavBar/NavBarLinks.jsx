import React from 'react'

const links = [
  {link:"About Me", section:"about"},
  {link:"Skills", section:"skills"},
  {link:"Experience", section:"experience"},
  {link:"Projects", section:"projects"},
  {link:"Contact", section:"contact"},  
];

const NavBarLinks = () => {
  return (
    <ul className='flex gap-6 text-white font-bold text-center sm:flex-col lg:flex-row sm:absolute lg:relative sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full py-4'>
      {links.map((link, index) => {
        return(
            <li key={index} className='group'>
                <a href="#"
                className='cursor-pointer hover:text-cyan text-white transition-all duration-500'
                >{link.link}</a>
                <div className='mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500'></div>
            </li>
        );
      })}
    </ul>
  );
}

export default NavBarLinks;