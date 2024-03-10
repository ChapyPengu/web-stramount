import { useState } from 'react'
import Input from './Input'

function Form() {

    const [email, setEmail] = useState('')
    const [asunto, setAsunto] = useState('')


    function onSubmit(e) {
        e.preventDefault()
        alert(`${email}\n${asunto}`)
    }

  return (
    <form className='flex flex-col mx-auto w-full sm:w-96 gap-4' onSubmit={onSubmit}>
        <Input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
        <Input type='text' placeholder='Asunto' value={asunto} onChange={e => setAsunto(e.target.value)}/>
        <input className='bg-gray-500 py-2 cursor-pointer' type="submit" value='Enviar'/>
    </form>
  )
}

export default Form