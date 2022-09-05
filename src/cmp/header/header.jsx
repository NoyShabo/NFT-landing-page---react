import React from 'react'
import { useState } from 'react'
import './header.scss'

import logo from './logo.svg'
import iconShip from './icons/ship.svg'


export function Header() {
    const [isOpenNav, setOpenNav]  = useState(false);

    const onOpenNavMobile = ()=>{
        setOpenNav(!isOpenNav);
    }


  return (
    <header className="header">
    <nav className="navbar">
        <a href="#home" className="nav-logo"><img src={logo} alt="me"  /></a>
        <div className="container-ul-header">
        <ul className={`nav-menu ${isOpenNav? ' active ':'' }`}>
            <li>
                <ul  className={`nav-menu ${isOpenNav? ' active ':'' }`}>
                    <li className="nav-item">
                        <a href="#rent" className="nav-link" onClick={onOpenNavMobile}>For rent</a>
                    </li>
                    <li className="nav-item">
                        <a href="#features" className="nav-link" onClick={onOpenNavMobile}>Features</a>
                    </li>
                    <li className="nav-item">
                        <a href="#roadmap" className="nav-link" onClick={onOpenNavMobile}>Roadmap</a>
                    </li>
                    {isOpenNav && window.innerWidth<=899 &&  <li className='icons-container'>
                                        <button>OpenSea <div className='ship-container'><img src={iconShip} alt="ship" /></div></button>
                    </li>
                    }
                </ul>
            </li>
            <li className='icons-container'>
                <button>OpenSea <div className='ship-container'><img src={iconShip} alt="ship" /></div></button>
            </li>
        </ul>
        </div>
        <div className={`hamburger ${isOpenNav? ' active ':''} `} onClick={onOpenNavMobile}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
    </nav>
</header>
  )
}
