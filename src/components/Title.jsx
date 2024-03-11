import React from 'react'

function Title({ title }) {
  return (
    <h1
    className='text-5xl sm:text-7xl font-akshar font-semibold uppercase'
    >
        { title }
    </h1>
  )
}

export default Title