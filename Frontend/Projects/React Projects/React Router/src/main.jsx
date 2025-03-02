import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Root from './Root'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github from './components/Github/Github'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element = {<Root />}>
    <Route path='' element = {<Home />} />
    <Route path= 'about' element = {<About />} />
    <Route path= 'contact' element = {<Contact />} />
    <Route path= 'user/:userid' element = {<User />} />
    <Route path= 'github' element = {<Github />} />
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
