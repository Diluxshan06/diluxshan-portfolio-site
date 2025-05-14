import React from 'react'
import ContactInfo from './ContactInfo'
import ContactSocial from './contactSocial'
import email_img from '../../assets/images/email-image.png'

const ContactMeRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
        <img src={email_img} alt='contact me'
        className='max-w-[300px]'/>
        <ContactInfo/>
        <ContactSocial/>
    </div>
  )
}

export default ContactMeRight