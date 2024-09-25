import React from 'react'
import './Contact.css'
import{MdOutlineEmail} from 'react-icons/md'
import {SiDiscord} from 'react-icons/si'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_kgpugtd', 'template_7mzrke7', form.current, '2bwoXR3jnrgOTFCim')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Pravincoder@gmail.com</h5>
            <a href="mailto:pravincoder@gmail.com">Send a Message</a>
          </article>
          <article className='contact__option'>
            <SiDiscord className='contact__option-icon'/>
            <h4>Discord</h4>
            <h5>Query Server</h5>
            <a href="https://discord.gg/dzteajjE" >Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 8459577542</h5>
            <a href="https://api.whatsapp.com/send?phone=918459577542" >Send a Message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email'required/>
          <textarea name='message' id='' rows='9' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}
export default Contact