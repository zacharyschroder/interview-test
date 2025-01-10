import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import getAutocompleteResults from './data/data'

function App() {
  return (
    <>
      <input
        role="button"
        type="text"
        placeholder="Type here"
        className="input w-full max-w-full aria-selected:ring-2 aria-selected:ring-primary"
      />
      <div className='mt-2 dropdown-content menu backdrop-blur-sm bg-white/25 rounded-box z-[1] w-full p-4 shadow'>
        Suggestions go here 
      </div>
    </>
  )
}

export default App
