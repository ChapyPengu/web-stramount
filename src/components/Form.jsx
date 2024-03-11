import { useState } from 'react'

function Form() {

    const [email, setEmail] = useState('')
    const [asunto, setAsunto] = useState('')
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorAsunto, setErrorAsunto] = useState(false)


    function onSubmit(e) {
        e.preventDefault()
        if (email.length === 0) {
          setErrorEmail(true)
        }
        if (asunto.length === 0) {
          setErrorAsunto(true)
        }
        if (asunto.length === 0 || email.length === 0) {
          return
        }

        Swal.fire({
          title: 'Correo enviado',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        }).then(() => {
          setEmail('')
          setAsunto('')
        })
    }

  return (
    <form className='flex flex-col w-full lg:w-1/2 gap-4' onSubmit={onSubmit}>
      
      <p className={`text-xs text-red-500 ${errorEmail ? 'inline': 'hidden'}`}>Este campo es requerido</p>
      <input className={`outline-none focus:border-blue-500 rounded shadow-sm border-2 py-2 px-4 ${errorEmail ? 'border-red-500' : 'border-blue-300'}`}
        type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} onFocus={e => setErrorEmail(false)}/>
      
      <p className={`text-xs text-red-500 ${errorAsunto ? 'inline': 'hidden'}`}>Este campo es requerido</p>
      <textarea className={`resize-none outline-none focus:border-blue-500 rounded shadow-sm border-2 py-2 px-4 ${errorAsunto ? 'border-red-500' : 'border-blue-300'}`}
        type="text" placeholder='Asunto' value={asunto} onChange={e => setAsunto(e.target.value)} onFocus={e => setErrorAsunto(false)}/>
      <input
      className='bg-blue-400 text-white py-2 cursor-pointer rounded-sm shadow-md hover:bg-blue-500 btn'
      type="submit" value='Enviar'/>
    </form>
  )
}

export default Form