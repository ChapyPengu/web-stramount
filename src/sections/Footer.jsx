import React from 'react'

function Footer() {
  return (
    <div className='py-12 px-4 sm:px-0 border border-black flex flex-col gap-4'>
      <div className='text-center flex flex-col gap-4'>
        <a href="mailto:stramount@gmail.com" target='_blank'><p className='underline'>stramount@gmail.com</p></a>
        <a href="https://wa.me/+5491164590328" target='_blank'><p className='underline'>+54 1164590328</p></a>
      </div>
    </div>
  )
}

export default Footer