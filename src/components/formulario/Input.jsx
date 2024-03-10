import React from 'react'

function Input({type, placeholder, onChange, value}) {
  return (
    <input
        className='py-2 px-4 border border-black'
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
    />
  )
}

export default Input