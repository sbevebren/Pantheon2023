import React from 'react'

export default function Scorecard({rank, name, score}) {
  return (
    <div className='flex p-4 gap-40 mx-auto text-center bg-primary bg-pink-200  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.09] rounded-lg  w-[90%] sm:w-[80%] md:w-[60%]'>
        <div className='ml-2 text-left w-[70%] text-gray-400 font-semibold'> 
          {name}
        </div>
        <div className=' w-[30%] text-gray-400 font-semibold'> 
          {score}
        </div>
    </div>
  )
}

 