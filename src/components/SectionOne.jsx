import React from 'react'
import ImageWithHighlights from './ImageWithHighlights'
import CarausolComponent from './CarausolComponent'
import { Link } from 'react-router-dom'

/*
weight == font-[600]
size == text-[56px]
line height  == leading-[67px]
letter spacing == tracking-tight
*/

function SectionOne() {
  return (
    <section className='flex flex-col items-center justify-center text-center font-manrope'>
      <div className='w-[600px] py-[100px]'>
        <h5 className=' font-grace font-[400] text-4xl tracking-tight text-[#2DA950]'>
          Success Stories
        </h5>
        <h1 className='font-[600] text-[56px] leading-[67px] tracking-tight'>
          Every success journey we've encountered.{' '}
        </h1>
      </div>

      <div className='flex justify-between pl-20'>
        <ImageWithHighlights />
        <div className='relative'>
          <img
            src='/grid.svg'
            className='absolute -top-[100px] -right-[120px] w-[572px] h-[590px] -z-10'
          />
          <div className='mt-20 ml-[220px]'>
            <CarausolComponent />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionOne
