import './App.css'
import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from './features/authSlice'
import {Header, Footer} from './components/index'
import { Outlet } from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  //this runs whenever app runs
  useEffect(() => {

    authService.getCurrentUser() //get current user data
    .then((userData) => {
      if(userData){ //agar user data mila toh login wali state update kr do
        dispatch(login({userData}))
      } else{
        dispatch(logout()) //agar user data nahi mila toh logout wali state update kr do
      }
    })
    .finally(() => setLoading(false)) //jab ye sab ho jaye tab loading ko false kr do
  }, [])


  if(loading){
    return <h1>Loading...</h1>
  } else{
      return (
      <>
        <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
          <div className='w-full block'>
            <Header />
            <main>
              <Outlet />
            </main>
            <Footer />
          </div>
        </div>
      </>
    )
  } 
}

export default App
