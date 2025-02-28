import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, setCounter] = useState(15);


function increaseValue(){
  if(counter < 20){
    setCounter(counter+1);
    console.log("Increased");
  }
}

function decreaseValue(){
  if(counter > 0){
    setCounter(counter-1);
    console.log("Decreased");    
  }
}

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={increaseValue}>Increment</button>
      <button onClick={decreaseValue}>Decrement</button>
      
    </>
  )
}

export default App

