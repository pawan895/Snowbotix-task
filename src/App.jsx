import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gray-800 h-screen flex flex-col items-center justify-center'>
        <div className='flex flex-col m-2 p-4 py-12 items-center justify-center border border-gray-600 shadow-xl rounded-xl'>
          <header className='text-gray-200 font-bold text-4xl'>
            Snowbotix - app
          </header>
          <div >
            <h1 className='text-gray-400 p-2 m-2' >Under Construction, Please visit this page in 2 hours</h1>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
