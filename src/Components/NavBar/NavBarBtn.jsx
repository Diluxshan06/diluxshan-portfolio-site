import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";
import { Link } from 'react-scroll';

const NavBarBtn = () => {
  return (
    <div>
        <Link to='contact' spy={true} smooth={true} offset={-130} duration={500}><button className='px-4 py-2 text-xl font-bold text-white border-cyan border flex items-center gap-1 rounded-full bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyandShadow'>
            Hire Me
            <LuArrowDownRight size={20} className="sm:hidden lg:block"/>
        </button></Link>
    </div>
  )
}

export default NavBarBtn;