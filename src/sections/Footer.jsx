import React from 'react'
import TitleSection from '../components/TitleSection'

function Footer() {
  return (
    <div className='py-12 px-4 sm:px-0 border border-black flex flex-col gap-4'>
      <div className='text-center'>
        <TitleSection title='Footer'/>
      </div>
      <div className='text-center'>
        <a href="mailto:stramount@gmail.com" target='_blank'><p className='underline'>stramount@gmail.com</p></a>
      </div>
    </div>
  )
}

export default Footer