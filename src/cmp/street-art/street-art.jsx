import React from 'react'

import './street-art.scss'
import iconImage from './ethereum.svg'

export function StreetArt() {
    const duration = 500;
  return (
    <div className='street-art'>
        <section className='text-section'>
            <h2 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration={duration}>Tokenized street art</h2>
            <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration={duration}>MEIT aims to provide a decentralized platform for long-term rentals that will transform a costly,
                        Manual process with the power of blockchain technology. Rental payments in cryptocurrency 
                        will enable a long-term rental process that is more convenient and secure.
            </p>

        </section>
      

        <section  className="images-container">
            <div className="nft-container">
                <div className="image1" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration={duration}>
                    <img className='image-icon' src={iconImage} alt="" />
                    <img className='nft-image' src="https://www.cnet.com/a/img/resize/0b8aea076935c5f2921df9bb329af25b16277292/2021/12/13/d319cda7-1ddd-4855-ac55-9dcd9ce0f6eb/unnamed.png?auto=webp&width=940" alt="NET"  />
                    <h3>NFT Name</h3>
                </div>
                <button className='price'>12.345,00 $</button>
            </div>
            <div className="nft-container" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration={duration}>
                <div className="image1">
                    <img className='image-icon' src={iconImage} alt="" />
                    <img className='nft-image' src="https://www.artnews.com/wp-content/uploads/2022/01/unnamed-2.png?w=631" alt="NET"  />
                    <h3>NFT Name</h3>
                </div>
                <button className='price'>12.345,00 $</button>
            </div>
            <div className="nft-container" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration={duration}>
                <div className="image1">
                    <img className='image-icon' src={iconImage} alt="" />
                    <img className='nft-image' src="https://lh3.googleusercontent.com/SuPXcvDKA_rp9mcYJzxtrT-Wy_6aGFrs8G0J3ZJXdZ6zmSkkKqjVIHWcm0s6ZzPOXu-i7CnuiN36ZP4_JEe1FLVw2aa_IwR2Gpop2w=w600" alt="NET"  />
                    <h3>NFT Name</h3>
                </div>
                <button className='price'>12.345,00 $</button>
            </div>
            
        
        </section>
    
    </div>
  )
}
