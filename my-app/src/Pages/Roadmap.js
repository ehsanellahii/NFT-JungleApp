import React from 'react'
import RoadMaps from '../Data/roadMap'
import RoadMap from '../Images/roadMap/roadmap-main.webp'
import Community from '../Images/Community/community-bg.webp'
import MiniLight from '../Images/Community/blue-bg-com.webp'
import MiniDark from '../Images/Community/dark-bg-comm.webp'

const Roadmap = () => {
  return (
<section>
  <main>
      <div className='text-center md:text-left'>
        <h1>Roadmap activities</h1>
         <p className='lg:max-w-[50%]'>We’ve set up some milestones for this project. Once we hit a target sell through percentage, we will begin to work on realizing the stated goal</p>
      </div>
      <div className='flex flex-col md:flex-row gap-[2rem] '>
      <div className='lg:max-w-[50%]'>
        {RoadMaps.map((item)=>{
          const {id,img,percent,text} = item;
          return(
          <div key={id} className='flex justify-start gap-[1rem] mb-[1rem]'>
            <div className='outer w-[120px] h-[40px] flex'>
             <img src={img} alt="" className='w-[100px]' />
             <span className='inner'>{percent}</span>
            </div>
            <span className='w-[130%]'>{text}</span>
          </div>
          )
        }
        )
        }
      </div>
    
      <div className='lg:max-w-[40%] pt-[2rem]'>
        <img src={RoadMap} alt="" />
      </div>
    </div>
  </main> 

    {/* 
    =========================
     Start of Community Tools
     ========================
    */}
    <article>
     {/* 
    ==========
     Left Side
     =========
    */}
  <div className='outer h-[500px] lg:h-[370px] mt-[7rem] bg-[rgb(19,65,102,0.7)] lg:bg-[transparent] rounded-[18px]'>
        <img src={Community} alt="" className='hidden md:block' />
      {/* 
    ==========
     Left Side
     =========
    */}  
  <div className='inner flex flex-col lg:flex-row gap-4 md:pr-[1rem] md:pl-[3rem]'>
    <div className='lg:max-w-[60%] text-center lg:text-left  '>
      <h1>Community Tools</h1>
      <p className='px-[20px] md:px-[0] text-[1.2rem]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
    </div>
     {/* 
    ==========
     Right Side
     =========
    */}
    <div className='flex items-center justify-center'>
      <div className='flex flex-col gap-4 lg:max-w-[30%]'>
        <div className='outer w-[250px]'>
          <img src={MiniLight} alt="" id="" />
          <span className='inner'>NETEXP.IO</span>
        </div>
        <div className='outer w-[250px]' >
          <img src={MiniDark} alt="" id=""  />
          <span className='inner'>Rarity Tools</span>
        </div>
      </div>
    </div>
  </div>
</div>
</article>
      {/* 
    =========================
    End of Community Tools
    =========================
    */}
    </section>
    
  )
}

export default Roadmap