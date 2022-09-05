import React from 'react'
import { useEffect ,useRef, useState } from 'react'
import { gsap,Quart } from "gsap";
import Aos from 'aos'
import 'aos/dist/aos.css'
import icon from './icon.svg'

import './counter-sale-end.scss'




export function CounerSaleEnd() {
  useEffect(()=>{
        Aos.init();
    },[])
  const [daysLeft, setDaysLeft] = useState('');
 
  const [hoursLeft, setHoursleft] = useState('');
  
  const [minutesLeft, setMinsLeft] = useState('');
 
  const [secLeft, setSecLeft] = useState('');
  
  const [timeTimer, setTimer] = useState('2022-12-12T19:07:23.726+00:00');
 
  const sec1TopRef = useRef();
  const sec1TopBackRef = useRef();
  const sec2TopRef = useRef();
  const sec2TopBackRef = useRef();

  const min1TopRef = useRef();
  const min1TopBackRef = useRef();
  const min2TopRef = useRef();
  const min2TopBackRef = useRef();
  
  const hours1TopRef = useRef();
  const hours1TopBackRef = useRef();
  const hours2TopRef = useRef();
  const hours2TopBackRef = useRef();
  
  const days1TopRef = useRef();
  const days1TopBackRef = useRef();
  const days2TopRef = useRef();
  const days2TopBackRef = useRef();

  

 useEffect(()=>{
  let countDownDate = new Date(timeTimer).getTime();
  let myfunc = setInterval(function() {
      let now = new Date().getTime();
      let timeleft = countDownDate - now;

      setDaysLeft({
        days1:((Math.floor(timeleft / (1000 * 60 * 60 * 24)))%10),
        days2: Math.floor((timeleft / (1000 * 60 * 60 * 24)) /10)
      })
      
      setHoursleft({
        hours1:Math.floor(((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))%10),
        hours2:Math.floor(((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))/10)
      })
        

      setMinsLeft({
          min1:Math.floor((((timeleft % (1000 * 60 * 60)) / (1000 * 60)))%10),
          min2:Math.floor((((timeleft % (1000 * 60 * 60)) / (1000 * 60))) /10)
      });

      setSecLeft({
          sec1: Math.floor(((timeleft % (1000 * 60)) / 1000) %10),
          sec2: Math.floor(((timeleft % (1000 * 60)) / 1000) /10)
      });
     
      if (timeleft <= 0) {
          clearInterval(myfunc);   
      }
  }, 1000);

    return ()=>{
      clearInterval(myfunc);
    }
 },[])


  const animation = (refTop,ref_back_top)=>{
    gsap.to(refTop.current, { 
    rotationX           : '-180deg',
    transformPerspective: 300,
    duration            :0.8,
    ease                : Quart.easeOut,
    onComplete          : function() {
      gsap.set(refTop.current, { rotationX: 0 })
    }
    });

    gsap.to(ref_back_top.current, { 
      rotationX           : 0,
      duration            :0.8,
      transformPerspective: 300,
      ease                : Quart.easeOut, 
      clearProps          : 'all' 
    });    
  } 
  
  useEffect(()=>{
    animation(sec1TopRef, sec1TopBackRef );
  },[secLeft.sec1])

  useEffect(()=>{
    animation(sec2TopRef, sec2TopBackRef );
  },[secLeft.sec2])

  useEffect(()=>{
    animation(min1TopRef, min1TopBackRef );
  },[minutesLeft.min1])

  useEffect(()=>{
    animation(min2TopRef, min2TopBackRef );
  },[minutesLeft.min2])


  useEffect(()=>{
    animation(hours1TopRef, hours1TopBackRef );
  },[hoursLeft.hours1])

  useEffect(()=>{
    animation(hours2TopRef ,hours2TopBackRef );
  },[hoursLeft.hours2])
  
  
  
  useEffect(()=>{
    animation(days1TopRef, days1TopBackRef );
  },[daysLeft.days1])

  useEffect(()=>{
    animation(days2TopRef ,days2TopBackRef );
  },[daysLeft.days2])


  return (
    <div className='pre-sale'>

      <div className="title-container"  data-aos="fade-left" data-aos-offset="100"  data-aos-duration="600" >
        <h2>PRE-SALE ENDS IN</h2>
        <div className='titles-above-line'>
          <h6>1st Presale 5/11 10PM (GTM+10)</h6>
          <h6>20% DISCOUNT</h6>
        </div>
        <div className="line">
              <div className="line-element-percent"></div>
        </div>
      </div>
      

      <div className="wrap"  data-aos="fade-right" data-aos-offset="100"  data-aos-duration="600">  
        <div className="countdown">
          <div className="bloc-time days" >
            {/* <span className="count-title">Hours</span> */}
            <div className="figure days days-1">                
            <span ref={days2TopRef} className="top" >{daysLeft.days2}</span>
                <span ref={days2TopBackRef} className="top-back">
                    <span>{daysLeft.days2}</span>
                </span>
               <span className="bottom">{daysLeft.days2}</span>
              <span className="bottom-back">
                 <span>{daysLeft.days2}</span>
              </span>
            </div>

      <div className="figure days days-2">
        <span ref={days1TopRef} className="top">{daysLeft.days1}</span>
        <span ref={days1TopBackRef} className="top-back">
          <span>{daysLeft.days1}</span>
        </span>
        <span className="bottom">{daysLeft.days1}</span>
        <span className="bottom-back">
          <span>{daysLeft.days1}</span>
        </span>
      </div>
        <span className="count-title">DAYS</span>

    </div>


    <div className="bloc-time hours" data-init-value="0">

      <div className="figure hours hours-1">
        <span ref={hours2TopRef}className="top">{hoursLeft.hours2}</span>
        <span ref={hours2TopBackRef} className="top-back">
          <span>{hoursLeft.hours2}</span>
        </span>
        <span className="bottom">{hoursLeft.hours2}</span>
        <span className="bottom-back">
          <span>{hoursLeft.hours2}</span>
        </span>        
      </div>

      <div className="figure hours hours-2">
       <span ref={hours1TopRef} className="top">{hoursLeft.hours1}</span>
        <span ref={hours1TopBackRef} className="top-back">
          <span>{hoursLeft.hours1}</span>
        </span>
        <span className="bottom">{hoursLeft.hours1}</span>
        <span className="bottom-back">
          <span>{hoursLeft.hours1}</span>
        </span>
      </div>
        <span className="count-title">Hours</span>
    </div>

    <div  className="bloc-time min" data-init-value="0">

        <div className="figure min min-1">
        <span  ref={min2TopRef} className="top">{minutesLeft.min2}</span>
        <span  ref={min2TopBackRef} className="top-back">
          <span>{minutesLeft.min2}</span>
        </span>
        <span className="bottom">{minutesLeft.min2}</span>
        <span className="bottom-back">
          <span>{minutesLeft.min2}</span>
        </span>          
      </div>

    <div className="figure min min-2">
          <span ref={min1TopRef} className="top">{minutesLeft.min1}</span>
          <span ref={min1TopBackRef} className="top-back">
            <span>{minutesLeft.min1}</span>
          </span>
          <span className="bottom">{minutesLeft.min1}</span>
          <span    className="bottom-back">
            <span>{minutesLeft.min1}</span>
          </span>
        </div>
          <span className="count-title">MINUTES</span>
      </div>
    
    <div  className="bloc-time sec" data-init-value="0">
        <div className="figure sec sec-1">
        <span  ref={sec2TopRef} className="top">{secLeft.sec2}</span>
        <span  ref={sec2TopBackRef} className="top-back">
          <span>{secLeft.sec2}</span>
        </span>
        <span className="bottom">{secLeft.sec2}</span>
        <span className="bot2tom-back">
          <span>{secLeft.sec2}</span>
        </span>          
      </div>

    <div className="figure sec sec-2">
          <span ref={sec1TopRef} className="top">{secLeft.sec1}</span>
          <span ref={sec1TopBackRef} className="top-back">
            <span>{secLeft.sec1}</span>
          </span>
          <span className="bottom">{secLeft.sec1}</span>
          <span    className="bottom-back">
            <span>{secLeft.sec1}</span>
          </span>    
        </div>
          <span className="count-title">SECONDS</span>
      </div>
    </div>
  </div>

    <button  data-aos="fade-left" data-aos-offset="100"  data-aos-duration="600">Buy Now <img src={icon} alt="icon"  /></button>
  </div>

  )
}


// secLeft2
// secLeft1