import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4 mb-4'>Tailwind Test</h1>
      <div id='cards'>
        <Card title= "El Chapo" slogan = "I am the God"/>
        <Card title= "Monkey"/>
      </div>
      
      
    </>
  )
}

export default App
