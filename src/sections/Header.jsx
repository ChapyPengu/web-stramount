import React from 'react'
import Title from '../components/Title'

function Header() {
  return (
    <div className='py-48 px-4 sm:px-0 border border-black'>
        <div className='mx-auto flex items-center justify-center gap-2 flex-col'>
            <Title title='Stramount'/>
            <p className='text-sm font-medium mt-2'>
                Empresa simulada de desarrollo de software
            </p>
            <div className='mt-6 flex gap-4'>
              <button
                className='bg-zinc-400 rounded-lg shadow-md px-4 py-1'
              >
                Leer mas
              </button>
              <button
                className='bg-zinc-400 rounded-lg shadow-md px-4 py-1'
              >
                Contacto
              </button>
            </div>
        </div>
    </div>
  )
}

export default Header