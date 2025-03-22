import React from 'react'
import { Container, PostForm } from '../components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function AddPost() {
  const user = useSelector(state => state.auth.userData)
  if(user){
    return (
    <div className='py-8'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
  } else{
    return ( 
      <h1 className='text-3xl py-4'>
          <Link to="../login" className='text-blue-700 hover:underline pr-2' >
            Login
          </Link>
          to add a post
        </h1>
      )
  }
  
}

