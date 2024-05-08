import React from 'react'

function Success() {
  return (
    <div className='w-[718px] h-[357px] font-manrope font-medium mt-20'>
      <div className='text-center flex flex-col items-center'>
        <img src='/roundtick.svg' alt='roundtick' className='mb-10' />
        <h5 className=' font-grace font-[400] text-4xl tracking-tight text-[#2DA950]'>
          Success Submitted
        </h5>
        <h1 className='font-[600] text-[56px] leading-[67px] tracking-tight mb-6'>
          Congratulations
        </h1>
        <h2 className=' text-[#727272] text-[27px] leading-[36px]'>
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </h2>
      </div>
    </div>
  )
}

export default Success
