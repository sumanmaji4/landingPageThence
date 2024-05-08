import React, { useState } from 'react'

function RegisterForm({ setSuccess }) {
  const [error, setError] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function handlesubmit(e) {
    e.preventDefault()
    let currname = name
    if (currname.trim().length < 1) {
      setError('Name cant be empty')
      return
    }
    let curremail = email
    if (curremail.trim().length < 5) {
      setError('Enter a valid email')
      return
    }
    if (!curremail.includes('@')) {
      setError('Enter a valid email')
      return
    }

    console.log(name, email, error)
    if (error == '') {
      setSuccess(true)
    }
  }

  return (
    <form className='w-[588px] h-[538px] flex flex-col items-center font-medium text-xl '>
      <div className='text-center'>
        <h5 className=' font-grace font-[400] text-4xl tracking-tight text-[#2DA950]'>
          Registration Form
        </h5>
        <h1 className='font-[600] text-[56px] leading-[67px] tracking-tight'>
          Start your success Journey here!
        </h1>
      </div>

      <div className='flex flex-col items-center'>
        <input
          onChange={(e) => {
            setName(e.target.value)
            setError('')
          }}
          value={name}
          type='text'
          placeholder='Enter your name'
          className='w-[417px] h-[75px] rounded-[74px]  bg-[#EFEFEF]   mt-16 py-6 px-9 placeholder:text-[#827A7A] focus:outline-[#537FF1]'
        ></input>
        <input
          onChange={(e) => {
            setEmail(e.target.value)
            setError('')
          }}
          value={email}
          type='email'
          placeholder='Enter your email'
          className='w-[417px] h-[75px] rounded-[74px]  bg-[#EFEFEF] mt-6 py-6 px-9 placeholder:text-[#827A7A] focus:outline-[#537FF1]'
        ></input>
        {error && (
          <p className='flex text-[#FF0808] text-base mr-auto p-2 -mb-[38px]'>
            <img src='/error!.svg' alt='!'></img>
            <span> {error}</span>
          </p>
        )}
        <button
          disabled={name == '' && email == ''}
          onClick={handlesubmit}
          className='w-[417px] h-[75px] hover:bg-[#4E4E4E] transition-all bg-black rounded-[74px] text-white mt-12 focus:outline-[#537FF1] disabled:bg-[#C9C9C9]'
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default RegisterForm
