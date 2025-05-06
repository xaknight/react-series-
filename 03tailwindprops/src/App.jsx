//  import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
    {/* this is how you pass props to the component */}
    <Card model="IMac"/>
    <Card model="Alienware"/>
    </>
  )
}

export default App
