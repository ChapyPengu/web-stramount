import React from 'react'

function Title({ title }) {
  return (
    <h1
    className='text-4xl sm:text-6xl font-akshar font-semibold uppercase'
    >
        { title }
    </h1>
  )
}

export default Title