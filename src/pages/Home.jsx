import React from 'react'
import SectionOne from '../components/SectionOne'
import { Link } from 'react-router-dom'
import SectionTwo from '../components/SectionTwo'

function Home() {
  return (
    <div>
      <header className='flex  flex-col md:flex-row border rounded-[65.28px] m-6 pl-16 p-[15px] items-center justify-between font-[500] text-base text-[18px] font-manrope'>
        <img src='/VectorLogo.svg' alt='logo'></img>
        <div className='flex  flex-col md:flex-row gap-2'>
          <Link
            to='/register'
            className='border rounded-[107px] p-[26px] px-[41px] hover:bg-[#F1F1F1] transition-all'
          >
            Get Projects
          </Link>
          <Link className='border rounded-[107px] p-[26px] px-[41px] bg-[#1C1C1C] text-white hover:bg-[#4E4E4E] transition-all'>
            Onboard Talent
          </Link>
        </div>
      </header>
      <div className='mb-[180px]'>
        <SectionOne />
      </div>
      <SectionTwo />
      <footer className=' bg-[#F5F5F5] w-[1376px] h-[144px] my-16 mx-auto p-[60px] rounded-[40px] font-medium text-lg leading-[19px] flex justify-between'>
        <p>&copy; Talup 2023. All rights reserved</p>
        <p className=' font-normal'>
          <span className='underline decoration-1'>Terms & Conditions</span>{' '}
          <span className=' underline decoration-1'>Privacy Policy</span>
        </p>
      </footer>
    </div>
  )
}

export default Home
