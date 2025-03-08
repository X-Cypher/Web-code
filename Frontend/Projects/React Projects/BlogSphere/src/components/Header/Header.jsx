import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Logo, LogoutBtn} from '../index'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {

  const userStatus = useSelector((state) => state.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      url: "/",
      isActive: true
    }, 
    {
      name: "Login",
      url: "/login",
      isActive: !userStatus,
    },
    {
      name: "Signup",
      url: "/signup",
      isActive: !userStatus,
    },
    {
      name: "All Posts",
      url: "/all-posts",
      isActive: userStatus,
    },
    {
      name: "Add Post",
      url: "/add-post",
      isActive: userStatus,
    },
    ]

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>

        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>

          <ul className='flex ml-auto'>
            {
              navItems.map((item) => 
              item.isActive? (
                <li key={item.slug}>
                  <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  onClick={() => navigate(item.url)}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            
            {/* if logged in. then only show logout button 
              {condition && (render component). This is a common way of 
              writing if else in JSX*/}

            {userStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}

          </ul>

        </nav>
      </Container>

    </header>
  )
}

export default Header