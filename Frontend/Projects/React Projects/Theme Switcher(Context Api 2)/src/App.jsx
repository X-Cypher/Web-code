import { useState } from 'react'
import './App.css'
import {ThemeProvider} from './context/themeContext.js'
import { useEffect } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {

  const [theme, setTheme] = useState("light")

  const changeTheme = () => {
    if(theme === 'light'){
      setTheme('dark')
    } else{
      setTheme('light')
    }
  }

  //actual change in theme takes place here
  useEffect(() => {
    const html = document.querySelector('html')
    html.classList.remove('light', 'dark')
    html.classList.add(theme)
  }, [theme])

  return (
    //jo provider wali values hai, unke jaisa same variable bnayenge toh dono link ho jayenge(ek hi ho jayenge)
    <ThemeProvider value={{theme, changeTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">

            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card /> 
            </div>
            
        </div>
      </div>
    </ThemeProvider>  
    
  )
}

export default App
