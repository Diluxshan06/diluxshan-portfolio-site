import React from 'react'
import SingleContactSocial from './SingleContactSocial';
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <SingleContactSocial Icon={FaLinkedinIn} link={"https://linkedin.com/in/diluxshan-jogasinkam"}/>
        <SingleContactSocial Icon={FiGithub} link={"https://github.com/Diluxshan06"}/>
        <SingleContactSocial Icon={FaInstagram} link={"https://www.instagram.com/i_am_dilux/"}/>
    </div>
  )
}

export default ContactSocial;