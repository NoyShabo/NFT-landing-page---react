import React from 'react'

import './footer.scss'

import iconTwitter from './icons/twiter.svg'
import iconDiscord from './icons/discord.svg'
import iconInstagram from './icons/instagram.svg'
import logo from './icons/logo.svg'
import iconTeleegram from './icons/telegram.svg'

export function Footer() {
  return (
    <div className='footer'>
            <div className="news-setter">
                <h2>CURIOUS?</h2>
                <h3>NEWSLETTER</h3>
                <div className="input-container">
                    <input className='input' type="text"  placeholder='Recieve news from MEIT'/>
                    <button className='send-btn'>
                    </button> 
                </div>
            </div>
            <img className='logo' src={logo} alt="logo" />
            <div className="follow-us">
                <h2>FOLLOW US ON</h2>
                <div className="icons-container">
                    <a href="#" className="nav-link"><img src={iconTwitter} alt=""  /></a>
                    <a href="#" className="nav-link"><img src={iconDiscord} alt=""  /></a>
                    <a href="#" className="nav-link"><img src={iconInstagram} alt=""  /></a>
                    <a href="#" className="nav-link"><img src={iconTeleegram} alt=""  /></a> 
                </div>
            </div>
            
    </div>
  )
}
