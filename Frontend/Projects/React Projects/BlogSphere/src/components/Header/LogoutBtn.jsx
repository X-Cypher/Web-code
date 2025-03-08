import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../features/authSlice'
import authService from '../../appwrite/auth'

function LogoutBtn() {
    const dispatch = useDispatch()

    const handleLogout = () => {
        authService.logout()
        .then(() => { //agar logout ho gaya toh logout wali state update kr do
            dispatch(logout())
        })
    }

  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={handleLogout}
    >
        Logout
    </button>
  )
}

export default LogoutBtn