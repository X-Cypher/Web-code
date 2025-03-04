
import { useState } from 'react'
import UserContext from './UserContext'

// children bas elements hai. elements like div, or Card Navbar, etc will be passed here
export default function UserContextProvider({children}){ 
    const [user, setUser] = useState("")

    return (
        // provider se wrap kr dia sare children wale code ko. jis se 
        // uski sari value har element access kr paye. vo values ["value"] prop mai bhejte h
        // user aur setUser har child access kr payega
        <UserContext.Provider  value={{user, setUser}}>
        
        {children} 
        </UserContext.Provider>
    )
}
