import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [specialAllowed, setSpecialAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)
  
  const passwordGenerator = useCallback(() => { /* useCallback memoizes(caches) the callback function passed to it,
                                                   so that it is not recreated on every render.
                                                   It will run only when any of the dependencies(props) changes. 
                                                   This Hook is just for improving performance */
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const num = "0123456789"
    const special = "@!#$%^&*"

    if(numAllowed){
      str += num
    }
    if(specialAllowed){
      str += special
    }
    
    for(let i = 0; i < length; i++){
      const idx = Math.floor(Math.random() * str.length)
      pass += str.charAt(idx);
    }

    setPassword(pass)
  }, [length, numAllowed, specialAllowed]) //props passed as array


  function copyToClipboard(){
    passwordRef.current?.select()
    navigator.clipboard.writeText(password)
  }

  //will rerun whenever any passed Props(properties) changes
  //It will rerun passwordGenerator whenever we change length or the checkboxes
  useEffect(() => passwordGenerator(), [length, numAllowed, specialAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-3.5 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className=' text-center text-white my-4'>Password Generator</h1>

        <div className="bg-amber-50 flex shadow rounded-lg overflow-hidden mb-4">
          
          <input 
            className="outline-none w-full py-1 px-3"
            type="text"
            value={password}
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />

          <button 
            onClick={
              copyToClipboard
            }
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-sm hover:bg-blue-800 transition duration-200 ease-in-out'
            >copy
          </button>

        </div>

        <div className='flex text-sm gap-x-2 my-1 py-1.5'>

          <div className='flex  gap-x-1'>

            <input type="range"
              className='cursor-pointer'
              min={6}
              max={25}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />

            <label>Length: {length}</label>

          </div>

          <div className="flex gap-x-1">
            <input type="checkbox"              
              defaultChecked={numAllowed}
              onChange={(e) => setNumAllowed((prev) => !prev)} //useState function returns the value of variable. It can be captured from a callback function
            />

            <label>Numbers</label>

          </div>

          <div className="flex gap-x-1">

            <input type="checkbox"
              defaultChecked = {specialAllowed}
              onChange={(e) => setSpecialAllowed((prev) => !prev)}
            />

            <label>Special Characters</label>

          </div>

        </div>

      </div>
      
      
    </>
  )
}

export default App
