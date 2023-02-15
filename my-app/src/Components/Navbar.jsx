import React, { useState } from 'react'
import Logo from '../Images/Navbar/logo.webp';
import BtnImg from '../Images/Navbar/wallet.webp';
import {Link} from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { Drawer } from 'antd';
import Wallet from '../Images/Navbar/wallet-sidebar.webp'

const Navbar = () => {
  const [isOpen,setOpen] = useState(false);
  const onClose = ()=>{
    setOpen(false);
  }
  return (
    <nav className='flex justify-between lg:items-center w-full text-[16px] uppercase leading-[24px] px-[20px] lg:px-[90px]' >
    <div  className='mt-[20px]'>
     <img src={Logo} alt="logo" className='w-[150px] h-[120px]' />
     </div>
     {/* Hamburger */}
     <div className='lg:hidden mt-[1rem]' >
        <Hamburger toggled={isOpen} toggle={setOpen}/>
     </div>
     {/*
     ================
     Start of Drawer 
     ================
     */}
     {isOpen && <Drawer className='drawer' placement="left" onClose={onClose} open={isOpen} closable={false} >
     <div className='drawer-logo flex justify-center items-center'>
     <img src={Logo} alt="logo"  />
     </div>
     <div className='drawer-links'>
        <Link to='/buyox' className='drawer-link'>Buy An Ox</Link>
        <Link to='/roadmap' className='drawer-link'>RoadMap</Link>
        <Link to='/team' className='drawer-link'>Team</Link>
        <Link to='/gallery' className='drawer-link'>Gallery</Link>
        <Link to='/pedigree' className='drawer-link'>Pedigree</Link>
     </div>
     <div className='flex justify-center items-center mt-[20px]'>
     <img src={Wallet} alt="" className='w-[230px]'/>
     </div>
      </Drawer>}
     {/*
     ================
     End of Drawer 
     ================
     */}
  <div className='hidden lg:flex justify-center space-x-[25px] items-center'>
      <Link to='/buyox'>Buy An Ox</Link>
        <Link to='/roadmap'>RoadMap</Link>
        <Link to='/team'>Team</Link>
        <Link to='/gallery'>Gallery</Link>
        <Link to='/pedigree'>Pedigree</Link>
      <div className='outer'>
       <img src={BtnImg} alt="" className='w-[230px] '/>
         <span className='inner font-bold uppercase text-[15px] '>Connect Wallet</span>
      </div>
  </div>
</nav>

  )
}

export default Navbar