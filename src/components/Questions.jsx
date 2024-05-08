import React, { useState } from 'react'

const qs = [
  {
    q: 'Do you offer freelancers?',
    ans: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, culpa deleniti. Dolor placeat reprehenderit vel error soluta eius `,
  },
  {
    q: `What’s the guarantee that I will be satisfied
    with the hired talent?`,
    ans: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, culpa deleniti. Dolor placeat reprehenderit vel error soluta eius `,
  },
  {
    q: `Can I hire multiple talents at once?`,
    ans: `If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.`,
  },
  {
    q: `Why should I not go to an agency directly?`,
    ans: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, culpa deleniti. Dolor placeat reprehenderit vel error soluta eius `,
  },
  {
    q: `Who can help me pick a right skillset
  and duration for me?`,
    ans: `If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.`,
  },
]

function Questions() {
  const [number, setnumber] = useState(-1)

  return (
    <div className='pt-8 pr-20 w-[600px]  font-manrope text-left'>
      {qs.map((item, index) => (
        <div
          key={index}
          className={
            index != qs.length - 1 ? ' border-b-[1px] border-b-slate-300 ' : ''
          }
        >
          <p className=' font-semibold text-xl text-[#1C1C1C] flex justify-between flex-wrap pt-8 '>
            <span className='w-[400px] pb-6'>{item.q}</span>
            <span
              onClick={() => setnumber((prev) => (prev == index ? -1 : index))}
              className=' cursor-pointer'
            >
              {index == number ? (
                <img src='/minus.svg' alt='close' />
              ) : (
                <img src='/plus.svg' alt='open' />
              )}
            </span>
          </p>
          {index == number && (
            <p className='text-[#617275] font-normal text-base pb-6 '>
              {item.ans}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

export default Questions
