import React from 'react'
import { useEffect, useState } from 'react'
import { Container, PostCard } from '../components'
import postService from '../appwrite/posts'

function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        postService.getActivePosts()
        .then((response) => {
            if(response){
                setPosts(response.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'> 
                {posts.map((currPost) => ( //loop lga ke har ek post ke liye ek card bnao
                    <div key={currPost.$id} className='p-2 w-1/4'>
                        <PostCard {...currPost} />
                    </div>
                    )
                )}
            </div>
        </Container>
    </div>
  )
}

export default Home