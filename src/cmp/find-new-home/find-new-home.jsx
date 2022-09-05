import React, { useState } from 'react'

import './find-new-home.scss';
import iconImage from './imgs/ethereum.svg';

export  function FindNewHome() {

 

  const [imagesArray, setimagesArray] = useState([
    {url:'https://media-exp1.licdn.com/dms/image/C4E1BAQFCEdtXfi0CIA/company-background_10000/0/1519800067758?e=2147483647&v=beta&t=zCWd79_20HuxBCO9rmzV4zl-jMtr6vHBP_bhdLVPeoY',name:'NFT Name1',price:'11.345,00' },
    {url:'https://images.unsplash.com/photo-1625602812206-5ec545ca1231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',name:'NFT Name2', price:'12.345,00'},
    {url:'https://teja12.kuikr.com/is/a/c/880x425/gallery_images/original/cf5d08bff955e71.gif',name:'NFT Name3', price:'13.345,00'},
    {url:'https://images.squarespace-cdn.com/content/v1/5a7b00b6bce176b3d67fac27/1537329430851-YOCIR6CP06YYH2FMTYQG/_8140118_w.jpg?format=1000w',name:'NFT Name4', price:'14.345,00'},
    {url:'https://pix10.agoda.net/hotelImages/493/493461/493461_13092413540016149675.jpg?ca=2&ce=1&s=1024x768',name:'NFT Name5', price:'15.345,00'},
    {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDe10Xvp9DNdz4xvaD0hTt3cZbQs7UoSSHKg&usqp=CAU',name:'NFT Name6', price:'16.345,00'},
    {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiUtpgtzP4sIL8TFdGNl_Jw0Mhgc_911rIYw&usqp=CAU',name:'NFT Name7', price:'17.345,00'}
  ]);

  const changeBigImage =(index)=>{
    const arrayWithOutIndex = imagesArray.filter((image,indexCurrr)=>indexCurrr!=index);
    setimagesArray(prevArray=>[prevArray[index],...arrayWithOutIndex ]);
  }

  return (
    <div id="rent" className='find-new-home'>

      <section className='container'>
        <h2 data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">Find a new Home</h2>  
              <h3 data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">Browse through our most viewed Rentals!</h3>

        <section className='images-container'>
          <div className='image1-container' data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <img className='icon-image-big' src={iconImage} alt="" />
              <img className='image-1' src={imagesArray[0].url} alt="" />
              <h3>{imagesArray[0].name}</h3>
              <button className='price-btn'>{imagesArray[0].price} $</button>
          </div>
        
          <div className="small-images">
            <div className="for-hover-small-image">
              <div className="small-image-container" onClick={()=>changeBigImage(1)} data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <div className='icon-image-small'> <img  src={iconImage} alt="" /></div>
                <img className='image-small' src={imagesArray[1].url} alt="" />
                <h3>{imagesArray[1].name}</h3>
              </div>
            </div>

            <div className="for-hover-small-image">
              <div className="small-image-container" onClick={()=>changeBigImage(2)} data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <img className='icon-image-small' src={iconImage} alt="" />
                <img className='image-small' src={imagesArray[2].url} alt="" />
                <h3>{imagesArray[2].name}</h3>
              </div>
              </div>
              <div className="for-hover-small-image">
              <div className="small-image-container" onClick={()=>changeBigImage(3)} data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <img className='icon-image-small' src={iconImage} alt="" />
                <img className='image-small' src={imagesArray[3].url} alt="" />
                <h3>{imagesArray[3].name}</h3>
              </div>
              </div>

              
            <div className="for-hover-small-image">
              <div className="small-image-container" onClick={()=>changeBigImage(4)} data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <img className='icon-image-small' src={iconImage} alt="" />
                <img className='image-small' src={imagesArray[4].url} alt="" />
                <h3>{imagesArray[4].name}</h3>
              </div>
              </div>


             <div className="for-hover-small-image">                  
              <div className="small-image-container" onClick={()=>changeBigImage(5)} data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <img className='icon-image-small' src={iconImage} alt="" />
                <img className='image-small' src={imagesArray[5].url} alt="" />
                <h3>{imagesArray[5].name}</h3>
              </div>
              </div>


              <div className="for-hover-small-image">
              <div className="small-image-container" onClick={()=>changeBigImage(6)} data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <img className='icon-image-small' src={iconImage} alt="" />
                <img className='image-small' src={imagesArray[6].url} alt="" />
                <h3>{imagesArray[6].name}</h3>
              </div>
              </div>

          </div>
        </section>
        <a href="#">View all &#8594;</a>
      </section>
    </div>
  )
}
