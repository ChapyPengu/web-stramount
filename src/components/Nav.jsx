import { useState } from 'react'
import Icon from './Icon'

function Nav() {

  const [responsive, setResponsive] = useState(false)

  function onClickBars() {
    setResponsive(!responsive)
  }

  return (
    <nav className={`px-4 sm:px-0 py-2 shadow-lg fixed w-full bg-white`}>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
          <a href="#home" className='flex items-center'>
            <Icon/>
            <p className='cursor-pointe ml-1 text-base font-akshar font-bold lowercase'>Stramount</p>
          </a>
        </div>
        <div>
          <div className='sm:hidden px-2' onClick={onClickBars}>
            <i class="fa-solid fa-bars cursor-pointer"></i>
          </div>
          <ul className='hidden sm:flex gap-4'>
            <li className='text-xs'><a href="#projects">Proyectos</a></li>
            <li className='text-xs'><a href="#about">Sobre Nosotros</a></li>
            <li className='text-xs'><a href="#members">Miembros</a></li>
            <li className='text-xs'><a href="#contact">Contacto</a></li>
          </ul>
        </div>
      </div>
      <div className='block sm:hidden'>
        <ul className={`${responsive ? 'flex' : 'hidden'} flex-col gap-4 py-2`}>
          <li className='text-xs'><a href="#projects">Proyectos</a></li>
          <li className='text-xs'><a href="#about">Sobre Nosotros</a></li>
          <li className='text-xs'><a href="#members">Miembros</a></li>
          <li className='text-xs'><a href="#contact">Contacto</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav