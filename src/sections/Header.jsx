import React from 'react'
import Title from '../components/Title'

function Header() {
  return (
    <div className='py-48 px-4 sm:px-0 border border-black'>
      <div className='mx-auto flex flex-col sm:flex-row max-w-max gap-12'>
        <div className='flex items-center justify-center flex-col'>
          <Title title='Stramount'/>
          <p className='text-sm font-medium mt-2'>
              Empresa simulada de desarrollo de software
          </p>
            <div className='mt-6 flex gap-4'>
              <a href='#about'
                className='bg-zinc-400 rounded-lg shadow-md px-4 py-1'
              >
                Leer mas
              </a>
              <a href='#contact'
                className='bg-zinc-400 rounded-lg shadow-md px-4 py-1'
              >
                Contacto
              </a>
            </div>
          </div>
        <img src="desarrollo-web.png" alt="desarrollo web" />
      </div>        
    </div>
  )
}

export default Header