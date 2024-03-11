import React from 'react'
import Icon from '../components/Icon'

function Footer() {
  return (
    <div className='py-16 px-4 sm:px-0 flex flex-col gap-4 bg-blue-100'>
      <div className='flex justify-center gap-8'>
        <div className='text-center flex flex-col gap-3'>
          <p className='text-base font-normal text-gray-900'>Redes Oficiales</p>
          <a href="mailto:stramount@gmail.com" target='_blank'><p className='text-sm text-gray-700 underline'>stramount@gmail.com</p></a>
          <a href="https://wa.me/+5491164590328" target='_blank'><p className='text-sm text-gray-700 underline'>+54 116459-0328</p></a>
        </div>
        <div className='flex justify-center items-center'>
          <div className='bg-[#333] rounded-full p-3 w-16 h-16 flex items-center justify-center'>
            <Icon className='w-16 h-w-16 text-white' color='white'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer