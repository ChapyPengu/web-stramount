import React from 'react'
import TitleSection from '../components/TitleSection'

function About() {
  return (
    <div className='px-4 sm:px-0 py-12 border border-black flex items-center justify-center'>
      <div className=''>
        <div className='text-center mb-6'>
          <TitleSection title='Sobre Nosotros'/>
        </div>
        <div className='sm:w-[600px] flex flex-col gap-4'>
          <p>
            Somos estudiantes en el la Escuela Tecnica 21 DE 10, en Buenos Aires Capital. Creamos Stramount como una empresa
            simulada para la asignatura de Practicas Profesionalizantes, la idea es que a lo largo de anio podemas realizar
            procesos como una empresa de verdad, como proyectos, reuniones, marketing y demas.
          </p>
          <p>
            Este anio tenemos pensado desarrollar 4 proyectos entre ellos una aplicacion de futbol, una aplicacion de comida,
            una aplicacion de tareas y por ultimo un juego de plataformas
          </p>
        </div>
      </div>
    </div>
  )
}

export default About