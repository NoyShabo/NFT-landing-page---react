import React from 'react'
import './roadmap.scss'


export function Roadmap() {
  return (
    <div id="roadmap" className='roadmap'>
        <h2  data-aos="fade-up" data-aos-offset="200" data-aos-easing="linear">Roadmap</h2>
        <p  data-aos="fade-up" data-aos-offset="200" data-aos-easing="linear">We have a lot of cool things planned! Have a look.</p>

        <ul className='time-line-list'>
      <li className='time-line-item' data-aos="fade-up" data-aos-offset="200" data-aos-easing="linear" >
        <div>
          <time>Q1 2022</time>
          <ul className='list-of-time-item'>
              <li> <div className="is-done done"></div> Pre-sale raiseTeam buildingFinalizing White paperRegister  </li>
              <li> <div className="is-done done"></div> an entity in a crypto-friendly jurisdictionOpen Social</li>
              <li> <div className="is-done done"></div> Media Accounts (Twitter, Telegram,</li>
              <li> <div className="is-done done"></div> Lorem ipsum dolor sit amet, consectetur adipiscing</li>
              <li> <div className="is-done done"></div> consectetur purus ut faucibus pulvinar elementum</li>
        </ul>
        </div>
      </li>
      <li   className='time-line-item' data-aos="fade-up" data-aos-offset="200" data-aos-easing="linear" >
        <div>
          <time>Q2 2022</time>
          <ul>
              <li> <div className="is-done done"></div>Raise a seed roundLaunch the MEIT AppAt Launch - Basic </li>
              <li> <div className="is-done"></div>app functionality only (rent with crypto)</li>
              <li> <div className="is-done"></div>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
              <li> <div className="is-done"></div>consectetur purus ut faucibus pulvinar elementum</li>
        </ul>
        </div>
      </li>
      <li  className='time-line-item' data-aos="fade-up" data-aos-offset="200" data-aos-easing="linear" >
        <div>
          <time>Q3 2022</time>
          <ul>
              <li> <div className="is-done"></div>IDOPancakeswap liquidity poolCommunity AirdropOpen</li>
              <li> <div className="is-done"></div>MEIT governance to tenants and token holders</li>
              <li> <div className="is-done"></div>Development of the MEIT platform</li>
        </ul>
        </div>
      </li>      
    </ul>
    </div>
  )
}
