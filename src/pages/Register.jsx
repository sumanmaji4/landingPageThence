import React, { useEffect, useState } from 'react'
import Success from '../components/Success'
import RegisterForm from '../components/RegisterForm'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
  const [success, setSuccess] = useState(false)
  const [time, setTime] = useState(5)

  let navigate = useNavigate()

  useEffect(() => {
    console.log('here ' + success)
    // var id = window.setTimeout(function () {}, 0)

    // while (id--) {
    //   window.clearTimeout(id) // will do nothing if no timeout with id is present
    // }
    if (!success) return
    let timer = setInterval(() => {
      setTime((prev) => prev - 1)
    }, 1000)

    let timer2 = setTimeout(() => navigate('/'), 5 * 1000)

    return () => {
      clearInterval(timer)
      clearTimeout(timer2)
    }
  }, [success])

  return (
    <div className='w-full h-full flex flex-col items-center'>
      <header className='py-[30px] px-[50px] flex w-full h-full'>
        <Link to='/'>
          <img src='/VectorLogo.svg' alt='logo'></img>
        </Link>
        {!success && (
          <Link to='/' className=' w-16 h-16 ml-auto'>
            <img src='crossbtn.svg' alt='cross'></img>
          </Link>
        )}
      </header>
      {success ? <Success /> : <RegisterForm setSuccess={setSuccess} />}
      {success && (
        <p className='p-4 mt-24 text-xl leading-[26px] text-[#727272] font-normal font-manrope'>
          Redirecting you to Homepage in{' '}
          <span className='text-black font-semibold'>{time} Seconds</span>
        </p>
      )}
    </div>
  )
}

export default Register
