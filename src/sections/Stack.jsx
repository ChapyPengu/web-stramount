import React from 'react'
import TitleSection from '../components/TitleSection'

function Stack() {
  return (
    <div className='border border-black py-24'>
      <div className='text-center'>
        <TitleSection title='Tegnologias'/>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-6 mt-12 place-items-center place-content-center w-full md:max-w-max mx-auto gap-4'>
        <img className='w-24 h-24 object-cover' src="logo-c.png" alt="logo c"/>
        <img className='w-24 h-24 object-contain' src="logo-dart.png" alt="logo dart"/>
        <img className='w-24 h-24 object-contain' src="logo-flutter.png" alt="logo flutter"/>
        <img className='w-24 h-24 object-cover' src="logo-javascript.png" alt="logo javascript"/>
        <img className='w-24 h-24 object-cover' src="logo-kotlin.png" alt="logo kotlin"/>
        <img className='w-24 h-24 object-cover' src="logo-mongodb.png" alt="logo mongodb"/>
        <img className='w-24 h-24 object-cover' src="logo-mysql.png" alt="logo mysql"/>
        <img className='w-24 h-24 object-cover' src="logo-postgressql.png" alt="logo postgressql"/>
        <img className='w-24 h-24 object-cover' src="logo-python.png" alt="logo python"/>
        <img className='w-24 h-24 object-contain' src="logo-react.png" alt="logo react"/>
        <img className='w-24 h-24 object-contain' src="logo-tailwind.png" alt="logo tailwind"/>
        <img className='w-24 h-24 object-contain' src="logo-wollok.png" alt="logo wollok"/>
        <img className='w-24 h-24 object-cover' src="logo-html.png" alt="logo html"/>
        <img className='w-24 h-24 object-cover' src="logo-css.png" alt="logo css"/>
        <img className='w-24 h-24 object-contain' src="logo-linux.jpg" alt="logo linux"/>
        <img className='w-24 h-24 object-contain' src="logo-aws.png" alt="logo aws"/>

      </div>
    </div>
  )
}

export default Stack