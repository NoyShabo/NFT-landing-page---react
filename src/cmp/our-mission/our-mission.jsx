import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './our-mission.scss'

export  function OurMission() {

  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <div className='our-mission'>
        <div className='text-container'>
        <h2 data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">Our Mission</h2 >
        <article>
            <p data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                MEIT aims to provide a decentralized platform for long-term rentals that will transform a costly, 
                Manual process with the power of blockchain technology. Rental payments in cryptocurrency will enable a 
                long-term rental process that is more convenient and secure.
            </p>
            <p data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
            Furthermore MEIT provides a blockchain technology system for transferring property ownership rights between
                different parties. The transparent ecosystem with verified Information on renters and landlords
                fosters trust between the parties. In addition, embedding blockchaintechnology into the system reduces
                traditional frustrations, scam rates, time delays, and friction points in the rental process to benefit
                tenants and landlords. Also, the MEIT ecosystem will offer the ability for community members to help back
                quality tenants, unfreezing millions of dollars tied up rental deposits in the process and enabling
                a system that will incentivize all parties in the process.

                <br />
                <br />
                <br />
                Furthermore MEIT provides a blockchain technology system for transferring property ownership rights 
                between different parties. The transparent ecosystem with verified Information on renters and landlords 
                fosters trust between the parties. In addition, embedding blockchaintechnology into the system reduces 
                traditional frustrations, scam rates, time delays, and friction points in the rental process to benefit 
                tenants and landlords.
            </p>
        </article>
        <div className='image-home' data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500"></div>
       <button className='whitepaper-btn' data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="500">Whitepaper</button>
    </div>
    </div>
  )
}
