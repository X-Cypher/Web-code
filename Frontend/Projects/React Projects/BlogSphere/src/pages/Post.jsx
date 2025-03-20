import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams, Link } from 'react-router-dom'
import postService from '../appwrite/posts'
import fileService from '../appwrite/file'
import { Button, Container } from '../components'
import parse from 'html-react-parser'

export default function Post() {
    const [post, setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    const userData = useSelector((state) => state.auth.userData)

    const isAuthor = post.user-id === userData.$id //check if current user is the author of the post

    useEffect(() => {
        if(slug){
            postService.getPost(slug)
            .then((response) => {
                if(response) {
                    setPost(response)
                } else{
                    navigate('/')
                }
            })
        } else{
            navigate('/')
        }
    }, [slug, navigate]);

    const deletePost = () => {
        postService.deletePost(post.$id)
        .then((status) => {
            if(status){
                fileService.deleteFile(post.featured-image)
                navigate('/')
            }
        })
    };

  return (
    post ? (
        <div className='py-8'>
            <Container>
                <div className='w-full flex justify-center mb-4 relative border rounded-xl p-2'>
                    <img 
                        className='rounded-xl'
                        src={fileService.getFilePreview(post.featured-image)} 
                        alt={post.title} 
                    />

                    {isAuthor && ( //if current user is the author of the post, show edit and delete button
                        <div className='absolute right-6 top-6'>
                            <Link to= {`/edit/${post.$id}`}>
                                <Button bgColor='bg-green-500' className='mr-3'>
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor='bg-red-500' onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>

                <div className='w-full mb-6'>
                    <h1 className='text-2xl font-bold'>
                        {post.title}
                    </h1>
                </div>
                
                <div>
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null
  )
}