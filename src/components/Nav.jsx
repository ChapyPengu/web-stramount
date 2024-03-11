import { useState } from 'react'
import Icon from './Icon'

function Nav() {

  const [responsive, setResponsive] = useState(false)

  function onClickBars() {
    setResponsive(!responsive)
  }

  return (
    <nav className='px-4 md:px-0 py-2.5 shadow-lg fixed w-full bg-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
          <a href="#home" className='flex items-center'>
            <Icon className='w-9 h-9' color='black'/>
            <p className='ml-2 text-lg font-akshar font-medium lowercase'>Stramount</p>
          </a>
        </div>
        <div>
          <div className='md:hidden p-1' onClick={onClickBars}>
            <i className="fa-solid fa-bars cursor-pointer"></i>
          </div>
          <ul className='hidden md:flex gap-6'>
            <li className='text-sm font-normal font-open text-black'><a className='hover:text-blue-600 border-b-[1px] border-b-transparent hover:border-b-blue-600' href="#projects">Proyectos</a></li>
            <li className='text-sm font-normal font-open text-black'><a className='hover:text-blue-600 border-b-[1px] border-b-transparent hover:border-b-blue-600' href="#about">Sobre Nosotros</a></li>
            <li className='text-sm font-normal font-open text-black'><a className='hover:text-blue-600 border-b-[1px] border-b-transparent hover:border-b-blue-600' href="#members">Miembros</a></li>
            <li className='text-sm font-normal font-open text-black'><a className='hover:text-blue-600 border-b-[1px] border-b-transparent hover:border-b-blue-600' href="#contact">Contacto</a></li>
          </ul>
        </div>
      </div>
      <div className='block md:hidden container mx-auto'>
        <ul className={`${responsive ? 'flex' : 'hidden'} flex-col gap-4 py-4`}>
          <li className='text-sm font-normal font-open text-black'><a className='hover:text-blue-600 border-b-[1px] border-b-transparent hover:border-b-blue-600' href="#projects">Proyectos</a></li>
          <li className='text-sm font-normal font-open text-black'><a className='hover:text-blue-600 border-b-[1px] border-b-transparent hover:border-b-blue-600' href="#about">Sobre Nosotros</a></li>
          <li className='text-sm font-normal font-open text-black'><a className='hover:text-blue-600 border-b-[1px] border-b-transparent hover:border-b-blue-600' href="#members">Miembros</a></li>
          <li className='text-sm font-normal font-open text-black'><a className='hover:text-blue-600 border-b-[1px] border-b-transparent hover:border-b-blue-600' href="#contact">Contacto</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav