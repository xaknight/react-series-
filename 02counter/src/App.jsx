import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function App() {
  // this setConter name is just a convention you can name it anything
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    console.log("clicked", counter)
    if (counter < 20){

      counter = counter + 1 
    }
    setCounter(counter)
  }

  const removeValue = () => {
    console.log("clicked", counter)
    if (counter > 0){
      counter = counter - 1 
    }
    setCounter(counter)
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add value {counter}</button>
    <p>footer : {counter}</p>
    <br />
    <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
