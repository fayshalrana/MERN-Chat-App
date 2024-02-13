import { useState } from 'react'

import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='flex items-center justify-center min-w-screen min-h-screen'>
    <Outlet/>
    </div>
  )
}

export default App
