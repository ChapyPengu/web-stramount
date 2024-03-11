import React from 'react'
import Title from '../components/Title'

function Header() {
  return (
    <div className='pt-40'>
      <div className='mx-auto flex flex-col xl:flex-row max-w-max gap-12 px-4 sm:px-0'>
        <div className='flex items-center justify-center flex-col'>
          <Title title='Stramount'/>
          <p className='text-sm font-light'>
              Empresa dedicada al desarrollo de software
          </p>
            <div className='flex flex-col sm:flex-row mt-6 gap-4'>
              <a href='#about'
                className='bg-blue-400 text-white py-2 px-4 cursor-pointer rounded-sm shadow-md hover:bg-blue-500 btn'
              >
                Leer mas
              </a>
              <a href='#contact'
                className='bg-blue-400 text-white py-2 px-4 cursor-pointer rounded-sm shadow-md hover:bg-blue-500 btn'
              >
                Contacto
              </a>
            </div>
          </div>
        <img src="desarrollo-web.png" alt="desarrollo web" />
      </div>
      <div className="h-[200px] overflow-hidden mt-1 sm:mt-6" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full"><path d="M-3.67,26.16 C149.99,150.00 377.25,-97.19 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" className="stroke-none fill-blue-400"></path></svg></div>
    </div>
  )
}

export default Header