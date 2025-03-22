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
    ): null
  )
}

export default EditPost