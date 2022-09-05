import React from 'react'

import './main-header.scss'
import logo from './logo.svg'


export function MainHeader() {
  return (
    <div id="home" className='main-header'>
        <div className='bgc-yellow '>
            <div className="bgc-white" >
                <div className="images-background"> </div>
                  <div className='title-container' >
                    <h1 className='title-light'>MEET THE  <img src={logo} alt="logo" /></h1>
                    <h1>INFINITY TOKEN</h1>
                </div>
                     <p>A next-generation decentralized ecosystem for the massive mid-to-long-term <br />property rentals and Entity transfer industry.</p>
           
            <div className='linear-transpernt-line'>
                <div className="btns-container">
                </div>
                <div className='pink-boxes'>
                    <div className='box'></div>
                    <div className='box'></div>
                    <div className='box'></div>
                </div>
            </div>
            
        </div>
        </div>
    </div>
  )
}
