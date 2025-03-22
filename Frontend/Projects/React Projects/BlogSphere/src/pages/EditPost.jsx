import React from 'react'
import { Container, PostForm } from '../components'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import postService from '../appwrite/posts'

function EditPost() {
  const [post, setPost] = useState(null)
  const {slug} = useParams() //useParams is a hook that gives us values of the parameters in the URL
  const navigate = useNavigate()

  useEffect(() => {

    if(slug){ //if slug is present, fetch the post by slug
      postService.getPost(slug)
      .then((currPost) => {

        if(currPost){
          setPost(currPost)
        }
      }).catch(() => {
        navigate('/')
      })
    } else{ //if slug is not present, navigate to home page
      navigate('/')
    }
  }, [slug, navigate])

  return (
    post ? (
      <div className='py-8'>
        <Container>
          <PostForm post={post} />
        </Container>
      </div>
    ): (
      <h1 className='text-3xl my-4'> 404 Post not found</h1>
    )
  )
}

export default EditPost