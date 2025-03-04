import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext) //user ka access lia context se

    if(!user){
        return <div>Please Login</div>
    }
    
  return (
    <div>Welcome {user.username}</div>
  )
}

export default Profile