import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children},authenticationRequired) {
    const navigate = useNavigate()
    const[loading, setLoading] = useState(true)
    const authStatus = useSelector(state => state.auth.status) //authStatus is a variable which will store the status of the user whether he is logged in or not (authSlice file)

    useEffect(() => {
      if(authenticationRequired && authStatus !== authenticationRequired){ // agar authentication required hai aur user logged in nahi hai to login page pe navigate karo
        navigate("/login")
      } else if(!authenticationRequired && authStatus !== authenticationRequired){ // agar authenticationRequired nahi hai aur user logged in hai to home page pe navigate karo. Ye apan tab use karenge jab hum login ya signup page pe hote hai aur user pehle se logged in hai to home page pe navigate karenge.
          navigate("/")
      }
      setLoading(false)
    }, [authStatus, navigate])

  return (
    loading ? <div>Loading...</div> : <>{children}</> //if loading is true then show loading else show children
  )
}

