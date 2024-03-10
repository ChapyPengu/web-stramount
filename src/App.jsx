import './App.css'
import Icon from './Icon'

function App() {
  return (
    <>
      <nav className='flex items-center justify-start bg-[#222] py-2.5 px-4 shadow-lg'>
        <Icon/>
        <p className='cursor-pointer text-white ml-2 text-xl'>Stramount</p>
      </nav>
      <h1 className='mt-24 font-semibold mx-auto text-7xl text-center py-4 px-8 max-w-min rounded-lg text-white'>Stramount</h1>
      <button className='bg-blue-500 text-white rounded py-2 px-8 block mx-auto mt-8 hover:bg-blue-400 shadow-lg text-2xl'>Start</button>
    </>
    )
}

export default App
