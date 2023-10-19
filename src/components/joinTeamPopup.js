import React from 'react'
import JoinTeam from './jointeam';

export default function JoinModel({ visible, onClose, id }) {
  if (!visible) return null;

  const handleOnClose = (e) => {
    if (e.target.id === 'container')
      onClose()
  }

  return (
    <div id='container' onClick={handleOnClose} className='fixed inset-0  bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center' >
      <div className='bg-white p-[1px] rounded-md w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%]' >
        <JoinTeam id={id} />
      </div>
    </div>
  )
}
