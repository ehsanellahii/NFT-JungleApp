import React from 'react'
import LightBg from '../Images/Hero/light-bg.webp'
import DarkBg from '../Images/Hero/dark-bg.webp'
import Main from '../Images/Hero/main.png'
import {Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Hero = () => {
  return (
    // Start of Home Section
   <section>
   <div className='flex flex-col md:flex-row gap-[30px]'>
   {/* Welcome to the Jungle Div */}
    <div  className='max-w-[700px] pt-[40px]'>
        <h2 className='font-bold italic text-[50px] sm:text-center  md:text-[60px] lg:text-left lg:text-[65px] leading-tight' >WELCOME TO THE JUNGLE - OX <span className='text-[#2196F5]'>NFT</span> CLUB</h2>
        <p className='mt-[15px] text-[20px] text-center lg:text-left' >JUNGLE OX CLUB | KOUPREY is the first ever NFT collection by Kon Khmer. JOC is a collection of 10,000 unique digital NFT collectibles on the Polygon blockchain. Each Jungle Ox works as your membership for Jungle Ox social club and HelloTalk loyalty program and allows authentic wallet connection to your HelloTalk chat application and social timeline to be used as verified profile photo. Mint your KOUPREY today to get more future benefits and perks unlocked by community roadmap activation</p>
          <div className='relative mt-[30px] flex justify-center items-center '>
            <img src={LightBg} alt="" className='w-[270px] h-[70px] ' />
            <span className='uppercase font-bold absolute text-[20px]'>buy on opensea</span>
          </div>
    </div>
    {/* Swipper Div */}
    <div className=' max-w-[400px] max-h-[1500px] relative'>
       <Swiper className='max-w-full max-h-full '
     loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          }}
      // install Swiper modules
      modules={[Autoplay ]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: false }}
      // scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={Main} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Main} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Main} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Main} alt="" /></SwiperSlide>
    </Swiper>
    
    <div className='absolute cursor-pointer flex justify-center items-center left-[64px] bottom-[100px] ' >
    <div className='relative w-[300px] h-[60px]' >
      <img src={DarkBg} alt="" />
    </div>
      <span className='absolute font-bold capitalize text-[20px]'>Mint your ox <span className='font-extrabold text-[30px]'>→</span></span>
    </div>
     </div>

    </div>
   </section>
  //  End of Home Section
  )
}

export default Hero