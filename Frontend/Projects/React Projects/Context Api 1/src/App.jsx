
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  
  return (
    // h1, login, profile. ye sab children hai UserContextProvider ke
    <UserContextProvider> 
      <h1>React with Chai</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
