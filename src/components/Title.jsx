import { useState, useEffect } from 'react'


function Title({ title }) {

  const [inAnimate, setInAnimate] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setInAnimate(false)
    }, 1000)
  }, [])

  return (
    <h1
    className={`text-5xl sm:text-7xl font-akshar font-semibold uppercase ${ inAnimate ? 'animate__animated animate__fadeInLeft' : ''}`}
    >
        { title }
    </h1>
  )
}

export default Title