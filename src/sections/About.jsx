import React from 'react'
import TitleSection from '../components/TitleSection'

function About() {
  return (
    <div className='px-4 sm:px-0 py-24 border border-black flex items-center justify-center'>
      <div className=''>
        <div className='text-center mb-6'>
          <TitleSection title='Sobre Nosotros'/>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center md:w-full md:px-24 mt-12 gap-12'>
          <article className='flex flex-col gap-4'>
            <p>
              Somos un grupo estudiantes de la Escuela Tecnica Nro 21 DE 10, en Buenos Aires Capital. Creamos Stramount como una empresa
              simulada para la asignatura de Practicas Profesionalizantes, la idea es que a lo largo de año podamos realizar
              procesos al estilo de una empresa real, como proyectos, reuniones, marketing y demas.
            </p>
            <p>
              Este año tenemos pensado desarrollar 4 proyectos entre ellos una aplicacion de futbol, una aplicacion de comida,
              una aplicacion de tareas y por ultimo un juego de plataformas
            </p>
          </article>
          <img className='w-full md:w-96 object-cover' src="friends.png" alt="Amigos" />
        </div>
        
      </div>
    </div>
  )
}

export default About