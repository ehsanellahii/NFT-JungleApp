import React from 'react'
import Teams from '../Images/Community/team-bg.webp'
import TeaamPeep from '../Images/Community/team1.webp'

const Team = () => {
  return (
  <section>
    <div className='outer'>
      <img src={Teams} alt="" className='hidden lg:block'/>
      <div className='inner flex flex-col lg:px-[4rem] gap-8 lg:gap-14 bg-[rgb(19,65,102,0.7)] lg:bg-transparent'>
        <div className='text-center lg:text-left'>
          <h1>the team</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        </div>
          <div className='flex flex-wrap flex-row gap-8 justify-center items-center'>
            <div>
              <img src={TeaamPeep} alt=""  />
            </div>
            <div>
              <img src={TeaamPeep} alt=""  />
            </div>
            <div>
              <img src={TeaamPeep} alt=""  />
            </div>
          </div>
        <div className='text-center'>
            <p >VERIFIED SMART CONTRACT ADDRESS: <span className='text-[#2196F5]'>0xBC4CA0EdA7647A8aB7C2061</span>  </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Team