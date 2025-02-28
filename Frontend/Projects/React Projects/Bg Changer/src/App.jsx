import { useState } from 'react'
import './App.css'

function App() {
  const[color, setColor] = useState("teal")
  return (
    <>
      <div className='h-screen w-full duration-800'
        style={{backgroundColor: color}}> {/* inline css in JSX*/}

          <div className="flex absolute top-1/2 left-1/2 -translate-x-1/2">
          <button onClick={() => setColor('red')}
            className="rounded-md rounded-r-none bg-slate-800 py-2 px-4 border-2 border-slate-500 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Red
          </button>
          <button onClick={() => setColor('blue')}
            className="rounded-none bg-slate-800 py-2 px-4 border-2 border-l-0 border-r-0 border-slate-500 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            >
            Blue
          </button>
          <button onClick={() => setColor('green')}
            className="rounded-md rounded-l-none bg-slate-800 py-2 px-4 border-2 border-slate-500 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Green
          </button>
          <button onClick={() => setColor('orange')}
            className="rounded-md rounded-l-none bg-slate-800 py-2 px-4 border-2 border-slate-500 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Orange
          </button>
          <button onClick={() => setColor('yellow')}
            className="rounded-md rounded-l-none bg-slate-800 py-2 px-4 border-2 border-slate-500 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Yellow
          </button>
          <button onClick={() => setColor('pink')}
            className="rounded-md rounded-l-none bg-slate-800 py-2 px-4 border-2 border-slate-500 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Pink
          </button>
          <button onClick={() => setColor('grey')}
            className="rounded-md rounded-l-none bg-slate-800 py-2 px-4 border-2 border-slate-500 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Grey
          </button>
          <button onClick={() => setColor('aqua')}
            className="rounded-md rounded-l-none bg-slate-800 py-2 px-4 border-2 border-slate-500 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Aqua
          </button>
        </div>
      </div>
    </>
  )
}

export default App
