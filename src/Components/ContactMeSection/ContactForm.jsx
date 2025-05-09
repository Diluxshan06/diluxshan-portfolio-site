import React, { useEffect } from 'react'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState('');


    const form = useRef();

    useEffect(() => {
        if (success) {
          setTimeout(() => {
            setSuccess('');
          }, 3000);
        }
        return () => {clearTimeout()};
      }, [success]);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_fe93qf4', 'template_308y3uc', form.current, {
            publicKey: 'yx7bY_Dhp-SqmGY-7',
          })
          .then(
            () => {
                setEmail('');
                setName('');
                setMessage('');
              setSuccess('Message sent successfully!');
            },
            (error) => {
              setSuccess('Failed to send message!  ' + error.text);
            },
          );
      };

  return (
    <div>
        <form className='flex flex-col gap-4 text-white' ref={form} onSubmit={sendEmail}>
            <input type='text' placeholder='Your Name' required className='h-12 rounded-lg bg-lightBrown px-2' name='from_name'
            value={name}
            onChange={(e) => setName(e.target.value)}/>
            <input type='email' placeholder='Your Email' required className='h-12 rounded-lg bg-lightBrown px-2' name='from_email'
            value={email} 
            onChange={(e) => setEmail(e.target.value)}/>
            <textarea type='text' placeholder='Message' rows='9' cols='50' required className=' rounded-lg bg-lightBrown p-2' name='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}/>
            {success && <p className='text-cyan'>{success}</p>}
            <button type='submit' className='w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl bg-cyan hover:bg-darkCyan transition-all duration-500'>Send</button>
        </form>
    </div>
  )
}

export default ContactForm