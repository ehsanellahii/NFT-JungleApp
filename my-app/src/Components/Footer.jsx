import React from 'react'
import Divider from '../Images/divider-down.webp'
import YT from '../Images/youtube-footer.webp'
const Footer = () => {
  return (
    <section>
    <div className='text-center lg:text-left'>
        <h1 className='text-6xl bold '>NFT.</h1>
        <h2>GET ON THE LIST</h2>
    </div>
    <div className='flex justify-center lg:justify-between flex-wrap gap-[2rem] mt-[2rem] items-center'>
        <form action="">
            <input type="email" name="
            " id="" placeholder='Add Email' className=' bg-transparent border-[#2196F5] border-solid border-2 h-[40px] outline-none mr-[1.25rem]'   />
            <button type='submit' className='bg-[#1976d2] w-[100px] h-[40px] rounded-sm'>Submit</button>
        </form>
        <div className='flex gap-[3rem]'>
           <span>Link</span>
           <span>Link</span>
           <span>Link</span>
        </div>
    </div>
        <img src={Divider} alt="" className=' mt-[2rem] mb-[2rem]'/>
        <footer className='flex justify-center lg:justify-between items-center flex-wrap gap-[2rem]'>
            <div className='flex gap-4'>
                <div>
                    <img src={YT} alt="" />
                </div>
                <div>
                    <img src={YT} alt="" />
                </div>
                <div>
                    <img src={YT} alt="" />
                </div>
                <div>
                    <img src={YT} alt="" />
                </div>
            </div>
            <div>
                <h2 className='text-center'>
                   © 2022 All right Reserved by <span className='text-[#2196F5]'>NFT.</span> 
                </h2>
            </div>
        </footer>
    </section>
  )
}

export default Footer