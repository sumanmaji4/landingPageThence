import React from 'react'

/*
weight == font-[600]
size == text-[56px]
line height  == leading-[67px]
letter spacing == tracking-tight
*/

function ImageWithHighlights() {
  return (
    <div className=' font-manrope relative'>
      <img
        src='/girl.svg'
        alt='girl image'
        className=' w-[506px] h-[546px] rounded-[50.7px]'
      />

      <div className='absolute top-[114px] -left-[144px] bg-white flex flex-col w-[267px] h-[240px] text-left rounded-[27px] p-[30px] shadow-2xl '>
        <div className='relative weight-[500]'>
          <img
            src='/spark.svg'
            alt='spark'
            className='absolute -top-10 -left-10'
          />
          <p className=' text-6xl leading-[76px] tracking-[-3%] font-rubik mt-4'>
            40%
          </p>
          <p className=' text-lg leading-[24px] text-[#828282]'>
            Achieved reduction in project execution time by optimising team
            availability
          </p>
        </div>
      </div>

      <div className=' absolute -left-[58px] top-[412px] bg-white flex w-[245px] h-[88px] rounded-[112px] shadow-lg items-center border p-4'>
        <img src='/rocket.svg' alt='rocket' className=' w-[52px] h-[52px]' />
        <div className='flex flex-col pl-4'>
          <span className='font-[700] text-2xl uppercase text-left'>
            10 days
          </span>
          <p className='text-base leading-[20px] text-[#828282]'>
            Staff Deployment
          </p>
        </div>
      </div>
      <div className='shadow-lg top-[357px] left-[293px] absolute font-medium flex flex-col w-[290px] h-[240px] p-8 bg-[#002E18] rounded-[28px] border border-slate-700 text-white gap-6'>
        <div className='flex items-end gap-3 mt-4'>
          <h2 className='text-6xl font-rubik'>$0.5</h2>
          <span className=' text-[#A6A3A0] uppercase text-[22px] leading-[31px] '>
            million
          </span>
        </div>
        <p className='text-[#CCCCCC] text-lg leading-6 text-left'>
          Reduced client expenses by saving on hiring and employee costs.
        </p>
      </div>
    </div>
  )
}

export default ImageWithHighlights
