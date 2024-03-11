import React from 'react'
import TitleSection from '../components/TitleSection'

function Stack() {
  return (
    <div className='py-24 px-3 md:px-0'>
      <div className='text-center'>
        <TitleSection title='Lenguajes y Frameworks'/>
      </div>
      <div className='sm:w-96 xl:w-[800px] mx-auto mt-6 text-center'>
        <p>
          Dominamos distintos lenguajes y marcos de trabajo para el desarrollo de software multiplataforma
          como aplicaciones webs, aplicaciones movil, base de datos y aplicaciones de escritorio.
        </p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-6 place-items-center place-content-center w-full md:max-w-max mx-auto gap-4'>
        <img className='w-24 h-24 object-contain' src="logo-tecnologia/logo-c.png" alt="logo c"/>
        <img className='w-24 h-24 object-cover' src="logo-tecnologia/logo-dart.png" alt="logo dart"/>
        <img className='w-24 h-24 object-contain' src="logo-tecnologia/logo-flutter.png" alt="logo flutter"/>
        <img className='w-24 h-24 object-cover' src="logo-tecnologia/logo-javascript.png" alt="logo javascript"/>
        <img className='w-24 h-24 object-cover' src="logo-tecnologia/logo-kotlin.png" alt="logo kotlin"/>
        <img className='w-24 h-24 object-cover' src="logo-tecnologia/logo-mongodb.png" alt="logo mongodb"/>
        <img className='w-24 h-24 object-cover' src="logo-tecnologia/logo-mysql.png" alt="logo mysql"/>
        <img className='w-24 h-24 object-cover' src="logo-tecnologia/logo-postgressql.png" alt="logo postgressql"/>
        <img className='w-24 h-24 object-cover' src="logo-tecnologia/logo-python.png" alt="logo python"/>
        <img className='w-24 h-24 object-contain' src="logo-tecnologia/logo-react.png" alt="logo react"/>
        <img className='w-24 h-24 object-contain' src="logo-tecnologia/logo-tailwind.png" alt="logo tailwind"/>
        <img className='w-24 h-24 object-contain' src="logo-tecnologia/logo-wollok.png" alt="logo wollok"/>
        <img className='w-24 h-24 object-cover' src="logo-tecnologia/logo-html.png" alt="logo html"/>
        <img className='w-24 h-24 object-cover' src="logo-tecnologia/logo-css.png" alt="logo css"/>
        <img className='w-24 h-24 object-contain' src="logo-tecnologia/logo-linux.jpg" alt="logo linux"/>
        <img className='w-24 h-24 object-contain' src="logo-tecnologia/logo-aws.png" alt="logo aws"/>
        <img className='w-24 h-24 object-cover' src="logo-tecnologia/logo-django.jpg" alt="logo django"/>
        <img className='w-24 h-24 object-contain' src="logo-tecnologia/logo-astro.png" alt="logo astro"/>
        <img className='w-24 h-24 object-contain' src="logo-tecnologia/logo-express.png" alt="logo express"/>
        <img className='w-24 h-24 object-contain' src="logo-tecnologia/logo-node.png" alt="logo node"/>
        <img className='w-24 h-24 object-contain' src="logo-tecnologia/logo-php.svg" alt="logo php"/>
        <img className='w-24 h-24 object-contain' src="logo-tecnologia/logo-unity.png" alt="logo unity"/>
      </div>
    </div>
  )
}

export default Stack