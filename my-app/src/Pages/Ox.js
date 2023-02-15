import React from 'react'
import LightOx from '../Images/BuyOx/ox-light.webp'
import DarkOx from '../Images/BuyOx/ox-dark.webp'
import MiniDark from '../Images/BuyOx/miniblack-bg.webp'
import Specs from '../Images/Specs/specs-img.webp'
import footer from '../Images/Specs/specs-footer.webp'
const Ox = () => {
  return (
    /*
    ========================
    Start of Community Boxes
    =========================
    */
   <>
     <section >
    <div className='flex flex-col gap-16'>
      <div className='outer bg-[rgb(19,65,102,0.7)] lg:bg-transparent border-0 rounded-[1.2rem] h-[300px]'>
        <img src={LightOx} alt="" className='hidden lg:block'/>
        <div className='inner w-[80%] text-center lg:text-left'>
          <h1 >fair distribution</h1>
          <p >We believe in fair price distribution. Each Jungle Ox costs 59 Polygon MATIC. There are no different price tiers and owning an Jungle Ox NFT will cost every one the same.</p>
        </div>
      </div>
      <div className='outer bg-[#2196f5] lg:bg-transparent rounded-[1.2rem]  h-[300px] p'>
        <img src={DarkOx} alt="" className='hidden lg:block' />
        <div className='inner w-[80%]'>
        <div className='flex flex-col lg:flex-row gap-[1.5rem] lg:gap-[3rem] justify-center items-center'>
          <div className='text-center lg:text-left'>
          <h1 className='text-[#fff]'>BUY AN OX</h1>
          <p >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet</p>
          </div>
          <div className='outer h-[75px] w-[300px] lg:w-[700px]'>
          <img src={MiniDark} alt="" />
          <span className='inner text-[#2196F5]'>BUY ON OPENSEA</span>
          </div>
          </div>
        </div>
      </div>
    </div>
    </section> 
     
    {/* ========================
    End of Community Boxes
    ========================= */}
    
    {/* 
    ========================
    Start of Specs Section
    =========================
    */ }
    <section className='mt-[10rem]' >
    <div className='flex flex-col lg:flex-row gap-8'>
      {/* Right Div */}
      <div className=' lg:pr-[68px] tracking-normal text-center lg:text-left'>
        <h1>the specs</h1>
        <p className='mt-[1.2rem] text-[1.1rem] leading-8'>Each Jungle OX|KOUPREY NFT is unique and programmatically generated from over 120 possible traits, including horns, expressions, headwear, clothing, and more. All OX's are awesome, but some are rarer than others.<br></br><br></br>The OX's are stored as ERC-721 tokens on the Polygon blockchain and hosted on IPFS. Purchasing an OX costs 59 MATIC.<br/><br/>Once you mint an Ox, you can connect your HelloTalk social app to update your profile with verified proof of ownership</p>
      </div>
      {/* End of Right Div */}
      {/* Left Div */}
      <div className='mt-[1rem] flex justify-center items-center '>
        <img src={Specs} alt="" className='h-[100%] w-[100%]' />
      </div>
      {/* End of Left Div */}
    </div>
      <div className='mt-[40px]' >
        <img src={footer} alt="" />
      </div>
    </section>
    </>
     /*
    ========================
    End of Specs Section
    =========================
    */
  )
}

export default Ox