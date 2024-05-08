import React from 'react'
import Questions from './Questions'

function SectionTwo() {
  return (
    <div className=' bg-[#E8EEE7] rounded-[40px] w-[1376px] h-[749px] flex mx-auto py-20 justify-between'>
      <div className='relative'>
        <div className='pl-20 h-[111px] font-normal text-[32px] leading-[35px] tracking-[-2%]'>
          <h5 className=' font-grace text-[#9E9D9D] pb-4'>
            what's on your mind
          </h5>
          <h1 className=' font-manrope font-semibold text-[60px] leading-[66px] tracking-[-1%]'>
            Ask Questions
          </h1>
        </div>
        <img
          src='./UnionArrow.svg'
          alt='arrow'
          className='w-[491px] h-[514px] absolute -bottom-24'
        ></img>
      </div>
      <div>
        <Questions />
      </div>
    </div>
  )
}

export default SectionTwo
