import React from 'react'
import Spec from '../Data/spec'

const Gallery = () => {
  return (
    <section>
    <div className='text-center lg:text-left'>
      <h1 className='mb-[1.5rem]'>welcome to the jungle</h1>
      <p className=' leading-[30px] text-[1.2rem] font-thin'>When you buy a Jungle Ox (Bos sauveli), you are buying a part of Khmer history and a rare piece of art. Jungle Ox | Kouprey is the national animal of Cambodia and a historic national heritage. Once you own a an Ox you are becoming part of a social club which will offer many benefits over time activated by our timeline. Our Jungle Ox NFT collection is the first ever NFT collection done in Cambodia and will make history, and owning a NFT in our collection will be a great future investment as well. Additionally, your Ox can serve as your digital identity, and open digital doors for you.</p>
    </div>
    
    <div className='flex flex-row flex-wrap gap-8 mt-[5rem] items-center justify-center'>
    { Spec.map((item)=>{
    const {id,img1,img2,text} = item;
    return(
      <div key={id} className='flex flex-col justify-center items-center'>
          <div className=' w-[200px] h-[250px] mb-[10px] '>
            <img src={img1} alt="" className='w-[100%] h-[100%]'/>
          </div>
          <div className=' max-w-[230px] outer'>
            <img src={img2} alt="" />
              <span className='inner text-[#fff] max-w-[90px] text-[.8rem]'>{text}</span>
          </div>
      </div> 
    )
   })
    }
    </div>
    </section>
  )
}

export default Gallery