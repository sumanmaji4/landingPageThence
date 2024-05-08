import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const texts = [
  `Enhance fortune 50 company's insights teams research capabilities`,
  `Lorem ipsum dolor sit amet cons ectetur, adipis icing elit. Fugiat, accu santium?`,
  `Totam minus atque amet quibusdam maxime. Rerum temporibus assumenda.`,
]

function CarausolComponent() {
  const [index, setIndex] = useState(0)

  return (
    <div className='w-[500px] font-manrope flex flex-col'>
      <div className='w-[398px] flex overflow-hidden relative'>
        {texts.map((item, id) => {
          // if (id == index)
          return (
            <p
              // transition-transform ease-in duration-500
              key={id}
              style={{ transform: `translateX(-${index * 100}%)` }}
              className=' transition-all ease-linear duration-500 w-[398px] h-[250px] font-semibold text-[40px] leading-[48px] tracking-[-2%] text-left flex-shrink-0'
            >
              {item}
            </p>
          )
        })}
      </div>
      <div className='flex gap-2'>
        {texts.map((item, id) => {
          return (
            <div
              onClick={() => setIndex(id)}
              key={id}
              className={
                id === index
                  ? 'w-3 h-3 hover:bg-[#CAD0CB] bg-[#2DA950] rounded-full'
                  : 'w-3 h-3 hover:bg-[#CAD0CB] bg-[#E4E3E3] rounded-full'
              }
            ></div>
          )
        })}
      </div>
      <Link className='border hover:bg-[#4E4E4E] transition-all bg-[#1C1C1C] text-white w-[245px] rounded-[100px] p-[26px] px-[41px] font-semibold text-xl flex items-center gap-4 mt-32'>
        Explore More
        <span>
          <FaArrowRight />
        </span>
      </Link>
    </div>
  )
}

export default CarausolComponent
