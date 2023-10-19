import React from 'react'
import JoinTeam from './jointeam';
import EnterOtp from './enterOtp';

export default function JoinModel({ visible, onClose, name, phone, college, email, password }) {
  if (!visible) return null;

  const handleOnClose = (e) => {
    if (e.target.id === 'container')
      onClose()
  }

  return (
    <div id='container' onClick={handleOnClose} className='fixed inset-0  bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center' >
      <div className='bg-white p-[1px] rounded-md w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%]' >
        <EnterOtp name={name} email={email} phone={phone} college={college} password={password}  />
      </div>
    </div>
  )
}
