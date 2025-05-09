import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleContact from './SingleContact';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
        <SingleContact text={"dinuluxshan110@gmail.com"} Image={HiOutlineMail}/>
        <SingleContact text={"+94 765679128"} Image={FiPhoneCall}/>
        <SingleContact text={"Church road, Chankanai. <br/> Jaffna."} Image={IoLocationOutline}/>
    </div>
  )
}

export default ContactInfo