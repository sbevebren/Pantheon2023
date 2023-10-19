// import React from 'react'

const CustomButton = ({ btnType, title, handleClick, styles }) => {
  return (
    <button
      type={btnType}
      className={`font-epilogue text-[16px] leading-[26px] min-h-[52px] bg-gradient-to-r from-purple-400 to-pink-600 hover:scale-105 transform transition-all duration-200 ease-in-out text-white font-bold py-3 px-6 rounded-md`}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton