import React from 'react'
import './Portfolio.css'
import NFT from '../../assets/Nft.jpg'
import Photo from '../../assets/Photo.jpg'
import Live  from '../../assets/Live.jpg'
import Company from '../../assets/Organzation.png'

const data = [


{
    id: 1,
    Image: NFT,
    title: 'Nft Market Place App',
    github: 'https://github.com/MarkAndrew123/nft-repo/tree/main/components',
    demo:'https://www.youtube.com/watch?v=BBqiHNdcAIc'
},


  {
    id: 2,
    Image: Photo,
    title: 'Photos collection App',
    github: 'https://github.com/MarkAndrew123/Photoer',
    demo: 'https://www.youtube.com/shorts/321_SgZLbcw'
  },

  {
    id: 3,
    Image: Live,
    title: 'Livestock E-commerce App',
    github:'https://www.figma.com/file/78ai4v6oA65TLDo64YNuwb/LivestockDirect-(Buyers)?node-id=354%3A3107&t=e2vc8FO3eDVkz8Qr-0',
    demo:'https://www.youtube.com/watch?v=eZ2z8ZtQyjw'
},

{
  id: 4,
  Image: Company ,
  title:'Organization UIUX',
  github:'https://www.figma.com/file/kMNsMKFE3hzZKKCLfysTlz/TAWOL-Website?t=SSLkivFM6Qa9TREc-0',

}



]

const Portfolio = () => {
  return (
    <section  id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio </h2>

    <div className='container portfolio__container'>
      {
        data.map(({id, Image, title, github, demo}) => {
        return (
          <article key={id} className='portfolio__item'>

<div className='portfolio__item-image'>
          <img src={Image} alt={title} />
        </div>
        <h3>{title}</h3>
       <div className='portfolio__item-cta'>
        <a href={github} className='btn' target='_blank'>Github</a>
        <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>  
         </div>
      </article>
        
        )
      })
    }
      

    </div>


    </section>
  )
}

export default Portfolio