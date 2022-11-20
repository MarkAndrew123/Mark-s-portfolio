import React from 'react'
import './About.css'
import Mark from '../../assets/MArk.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section  id='about'>
      <h5>Get To KnoW</h5>
      <h2>About Me</h2>


<div  className='container about__container'>
  <div className='about__me'>     
<div className='about__me__image'>
  <img src={Mark} alt='' />
</div>
  </div>

<div className='about__content'>
  <div className='about__cards'>
    <article className='about__card'>
      <FaAward className='about__icon'/>
   <h5>Experience</h5>
   <small>1+ Years Working Exj,perience</small>

    </article>
    <article className='about__card'>
      <FiUsers className='about__icon'/>
   <h5>Clients</h5>   
   <small>9+ Local</small>

    </article>
    <article className='about__card'>
      <VscFolderLibrary className='about__icon'/>
   <h5>Project</h5>
   <small>6+ Completed Projects</small>

    </article>
  </div>
  <p> I'm An Enthusiatic Developer And Enginner with Your Best Interest At heart , I like to put my Clients And employers first before anything i can scale up your business to whatever 
    height you want with my goodluck and skills all you have to do is hire me  </p>
    <a  href='#contact' className='btn btn-primary'> Let's Talk</a>
</div>


</div>

    </section>
  )
}

export default About