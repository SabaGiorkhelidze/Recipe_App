import React from 'react'

const CustomInput = ({label, placeholder}) => {
  return (
    <div className='flex flex-col px-3'>
        <label htmlFor="input" className='mx-1'>{label}</label>
        <input className='border-2 w-64 border-gray-400 px-1 rounded-[5px] py-1  focus:outline-none' placeholder={placeholder}/>
    </div>
  )
}

export default CustomInput