import React from 'react'
import TitleSection from '../components/TitleSection'

function Projects() {
  return (
    <div className='py-24 px-4 sm:px-0 border border-black'>
        <div>
            <div className='text-center'>
              <TitleSection title='Proyectos'/>
            </div>
            <div className='flex items-center justify-center mt-12'>
              <img className='w-72 h-72' src="desarrollo-movil.png" alt="desarrollo movil" />
            </div>
        </div>
    </div>
  )
}

export default Projects