import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './our-vision.scss'

export  function OurVision() {

  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <div className='our-vision'>
        <div className='text-container'>
        <h2 data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">Our Vision</h2 >
        <article>
            <p data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
              The majority of cryptocurrencies are prone to high volatility. 
              By combining MEIT with real estate, we aim to offer a level of backing. 
              By backing cryptocurrency with real estate assets, we hope to increase the stability of 
              the token itself and still obtain high-value growth potential. As the token will be used 
              by parties to purchase or rent properties on the platform, transactions will be frequent, 
              meaning that the token will not be liable to the stagnation of the market. Experience has 
              shown us that tokens that have real use and are used daily are much more stable than those 
              that do not.
            </p>
          <div className='image-vision' data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
          </div>
        </article>
       <button className='net-btn' data-aos="fade-right" data-aos-offset="50" data-aos-easing="ease-in-sine" data-aos-duration="600">Browse NFTs</button>
    </div>
    </div>
  )
}
