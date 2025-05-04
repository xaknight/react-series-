// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// this function shows that even if the counter is increasing the value is not updating in the UI
function App() {
  let counter = 15

  const addValue = () => {
    console.log("clicked", counter)
    counter = counter + 1
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br />
    <button>remove value</button>
    </>
  )
}

export default App
