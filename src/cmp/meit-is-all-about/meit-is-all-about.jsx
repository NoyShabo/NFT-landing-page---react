import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './meit-is-all-about.scss'

export function MeitIsAllAbout() {

    useEffect(()=>{
        Aos.init();
    },[])

  return (
    <div className='meit-is-all-about'>
        
        <ul className='blocks-info'>
            <li data-aos="fade-right" data-aos-offset="100"  data-aos-duration="600">
                <h2>Works on blockchain</h2>
                <p>The main technology behind the development and success of cryptocurrencies is blockchaintechnology.
                    This modern technology works on the principle of decentralization. It provides better security, 
                    safety, and privacy. It reduces the risk of data lost and allows transparency with the key feature of 
                    decentralization, solving the problem of security and confidentiality threats.
                </p>
            </li>    
            <li data-aos="fade-left" data-aos-offset="100"  data-aos-duration="600">
                <h2>Established business</h2>
                    <p>We already have thousands of users and <b>properties on our platform</b>.
                    </p>
            </li>    
            <li data-aos="fade-right" data-aos-offset="100"  data-aos-duration="600">
                    <h2>We are pioneers</h2>
                    <p>This makes MEIT the first company in the long-term residential real estate space that will 
                        strive to operate internationally and ensure a fair, smooth, and seamless long-term rental 
                        process for all parties involved.
                    </p> 
            </li>    
            <li data-aos="fade-left" data-aos-offset="100"  data-aos-duration="600">
                    <h2>New solutions to old <b>challenges</b></h2>
                    <p>We plan to deliver ongoing enhancements to the MEIT platform with a proven algorithm to stay 
                        ahead in innovation and technology while at the same time being creative, allowing better work 
                        quality.
                    </p>
            </li>    
        </ul>    
        
    </div>
  )
}
