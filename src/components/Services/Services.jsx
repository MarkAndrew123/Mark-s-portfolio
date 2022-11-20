import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section  id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>

    <div className='container services__container' >
      <article className="service">
        <div className='service__head'>
        <h3> UI UX Design</h3>
        </div>
         
        <ul className='service__list'>
          <li>
          <BiCheck  className='service__list-icon'/>
          <p>Mobile UIUX Designs</p>
          </li>
          <li>
          <BiCheck  className='service__list-icon'/>
          <p>Web UIUX Designs</p>
          </li>
          <li>
          <BiCheck  className='service__list-icon'/>
          <p>
          Medical And Financial Apps UIUX</p>
          </li> 
        </ul>

      </article>
      <article className="service">
        <div className='service__head'>
        <h3> Web Development</h3>
        </div>
         
        <ul className='service__list'>
          <li>
          <BiCheck  className='service__list-icon'/>
          <p>Landing Pages</p>
          </li>
          <li>
          <BiCheck  className='service__list-icon'/>
          <p>Front End Webpages</p>
          </li>
          <li>
          <BiCheck  className='service__list-icon'/>
          <p>
          Dynamic and Static Webpages</p>
          </li> 
        </ul>

      </article>
      <article className="service">
        <div className='service__head'>
        <h3>Mobile Development</h3>
        </div>
         
        <ul className='service__list'>
          <li>
          <BiCheck  className='service__list-icon'/>
          <p>Android And ios Development</p>
          </li>
          <li>
          <BiCheck  className='service__list-icon'/>
          <p>Basic Mobile Apps</p>
          </li>
          <li>
          <BiCheck  className='service__list-icon'/>
          <p>
          Full Stack Mobile Apps</p>
          </li> 
        </ul>

      </article>
    </div>
    </section>
    
  )
}

export default Services