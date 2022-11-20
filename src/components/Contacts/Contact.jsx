import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine}    from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id='contact'>
    <h5> Get In Touch</h5>
    <h2>Contact Me </h2>

    <div className='container contact__container'>
      <div className='contact__options'>
        <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon' />
        <h4>Email</h4>
        <h5>gbengaandrew13@gmail.com</h5>
        <a href='mailto:gbengaandrew13@gmail.com' target='_blank'> Send A message</a>
        </article>
        <article className='contact__option'>
          <RiMessengerLine contact__option-icon/>
        <h4>Messenge</h4>
        <h5>Mark-Adeyemi andrew</h5>
        <a href='mailto:gbengaandrew13@gmail.com'  target='_blank' > Send A message</a>
        </article>
        <article className='contact__option'>
          <BsWhatsapp contact__option-icon/>
        <h4>Whatsapp</h4>
        <h5>+2348138529578</h5>
        <a href='https://api.whatsapp.com/send?phone+2348138529578'  target='_blank' > Send A message</a>
        </article>
      </div>
      <form action=''>
        <input type='text' name='name' placeholder='Your Full Name' required />
        <input type='email' name='email' placeholder='email' required />
        <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'> Send Message</button>
      </form>
    </div>
</section>
  )
}

export default Contact