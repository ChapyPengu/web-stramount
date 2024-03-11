import React from 'react'
import TitleSection from '../components/TitleSection'
import Form from '../components/Form'

function Contact() {
  return (
    <div className='py-24 px-2 sm:px-0  flex flex-col items-center '>
        <div className='text-center'>
            <TitleSection title='Contactanos'/>
        </div>
        <div className='w-full px-0 lg:px-12 flex flex-col lg:flex-row mt-12 items-center justify-center gap-8'>
            <Form/>
            <img className='w-full lg:w-1/2' src="team.svg" alt="team"/>
        </div>
    </div>
  )
}

export default Contact