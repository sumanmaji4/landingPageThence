import React from 'react'

function Error() {
  return (
    <div>
      <div className='w-16 h-16 flex'>
        <div className='w-16 h-16 bg-red-500 flex-shrink-0'></div>
        <div className='w-16 h-16 bg-blue-500'></div>
        <div className='w-16 h-16 bg-green-500'></div>
      </div>

      <p>Page not found</p>
    </div>
  )
}

export default Error
