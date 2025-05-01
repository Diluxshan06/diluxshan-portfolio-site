import React from 'react'
import NavBarBtn from './NavBarBtn'
import NavBarLinks from './NavBarLinks'
import NavBarLogo from './NavBarLogo'

import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

const NavBarMain = () => {
  const[menuOpen, setMenuOpen] = useState(false);

  const toggle = () =>{
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2'>
        <div className='flex justify-between p-6 max-w-[1200px] w-full items-center bg-black mx-auto rounded-r-full rounded-l-full border-[0.5px] border-orange'>
            <NavBarLogo/>
            <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
              <NavBarLinks/>
            </div>
            <NavBarBtn/>
        </div>
        <div className='flex items-center justify-center rounded-full lg:hidden sm:block border-orange bg-black p-6 border-[0.5px]'>
          <button onClick={toggle} className='text-2xl p-3 border border-orange rounded-full text-white'>
              <GiHamburgerMenu />
           </button>
        </div>
    </nav>
  )
}

export default NavBarMain;
