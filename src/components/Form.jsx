import { useState } from 'react'

function Form() {

    const [email, setEmail] = useState('')
    const [asunto, setAsunto] = useState('')
    const [error, setError] = useState(false)

    function onSubmit(e) {
        e.preventDefault()
        if (email.length === 0) {
          setError(true)
          return
        }
        alert(`${email}\n${asunto}`)
    }

  return (
    <form className='flex flex-col mx-auto w-full sm:w-96 gap-4' onSubmit={onSubmit}>
      <p className={`text-red-500 ${error ? 'inline': 'hidden'}`}>Este campo es requerido*</p>
      <input className={`border py-2 px-4 ${error ? 'border-red-500' : 'border-black'}`}
        type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} onFocus={e => setError(false)}/>
      <textarea className='border border-black py-2 px-4'
        type="text" placeholder='Asunto' value={asunto} onChange={e => setAsunto(e.target.value)}/>
      <input className='bg-gray-500 py-2 cursor-pointer' type="submit" value='Enviar'/>
    </form>
  )
}

export default Form