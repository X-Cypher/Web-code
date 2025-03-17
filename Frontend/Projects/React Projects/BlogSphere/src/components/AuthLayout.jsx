import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children}) {
    const navigate = useNavigate()
    const[loading, setLoading] = useState(true)
    const authStatus = useSelector(state => state.auth.status) //authStatus is a variable which will store the status of the user whether he is logged in or not (authSlice file)

    useEffect(() => {
        if(authStatus === true){
            navigate('/')
        } else{
            navigate('/login')
        }
        setLoading(false)
    }, [authStatus, navigate, authentication])

  return (
    loading ? <div>Loading...</div> : <>{children}</> //if loading is true then show loading else show children
  )
}

