import React from 'react'
import AllNavBarArray from '../NavBar/AllNavBarArray'
import { Link } from 'react-scroll';

const FooterMain = () => {
  return (
    <div className='px-4'>
        <div className='w-full h-[1px] bg-lightGrey mt-24'></div>
        <div className='justify-between sm:hidden md:flex mt-4 max-w-[1200px] mx-auto'>
            <p className='text-3xl text-lightGrey'>Diluxshan Jogasinkam</p>
            <ul className='flex gap-4 text-lightGrey text-xl'>
                {AllNavBarArray.map((link, index) => {
                    return(
                        <li key={index} className='group'>
                            <Link to={link.section} spy={true} smooth={true} offset={-130} duration={500} className='cursor-pointer hover:text-white transition-all duration-500'>{link.link}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
        <p className='max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown'>© 2025 Diluxshan | All Rights Reserved.</p>
    </div>
  )
}

export default FooterMain