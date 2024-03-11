import React from 'react'
import TitleSection from '../components/TitleSection'
import Form from '../components/Form'

function Contact() {
  return (
    <div className='py-12 px-4 sm:px-0 border border-black'>
        <div className='text-center'>
            <TitleSection title='Contactanos'/>
        </div>
        <div className='mt-12'>
            <Form/>
        </div>
    </div>
  )
}

export default Contact