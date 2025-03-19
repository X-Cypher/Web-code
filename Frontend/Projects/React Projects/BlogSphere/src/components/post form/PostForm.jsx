import React from 'react'
import { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {Button, Input, Select, RTE} from '../index'
import postService from '../../appwrite/posts'
import fileService from '../../appwrite/file'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function PostForm({post}) {
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues:{ //ye edit form mai values show karne ke liye default values le li hai post ki.
            title: post?.title || '', //if post title is available, use it, otherwise use empty string
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active'
        }
    })
    const navigate = useNavigate()
    const user = useSelector(state => state.auth.userData)

    const submitPost = async(data) => {
      if(post){
        const file = data.image[0] ? await fileService.uploadFile(data.image[0]): null

        if(file){ //if file is uploaded then delete the previous image
          fileService.deleteFile(post.featured-image) //featured-image is the database column name in which image is stored
        }

        const updatedPost = await postService.updatePost(post.$id, { //post.$id/slug is the id of the post
          ...data,
          featuredImage : file? file.$id : undefined,
        })

        if(updatedPost){ //if post is updated successfully then navigate to the post page
          navigate(`/post/${updatedPost.$id}`)
        }
      } else{ //if post is not available then create a new post
        const file = data.image[0] ? await fileService.uploadFile(data.image[0]): null
        if(file){
          const fileId = file.$id
          data.featuredImage = fileId
        }

        const newPost = await postService.createPost({
          ...data,
          userId : user.$id
        })

        if(newPost){
          navigate(`/post/${newPost.$id}`)
        }
      }
    }

    const generateSlug = useCallback((value) => {
      if(value && typeof value === 'string'){
        return value.trim().toLowerCase().replace(/[^a-zA-Z\d]+/g, '-').replace(/^-+|-+$/g, '')
      } else {
        return ''
      }
    }, [])

    useEffect(() => {
      const subscription = watch((value, {name}) => { //value contains value of all the fields and name is the namae of the field that is changed
        if(name === 'title'){ //agar title field change hota hai to slug field ko update karna hai
          setValue('slug', generateSlug(value.title), {shouldValidate: true})
        }
      })
      return () => subscription.unsubscribe() //unsubscribe to avoid memory leaks
    }, [watch, generateSlug, setValue])

  return (
    <form onSubmit={handleSubmit(submitPost)} className="flex flex-wrap">
        <div className="w-2/3 px-2">
            <Input
                label="Title :"
                placeholder="Title"
                className="mb-4"
                {...register("title", { required: true })}
            />
            <Input
                label="Slug :"
                placeholder="Slug"
                className="mb-4"
                {...register("slug", { required: true })}
                readonly = {true}
            />
            <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
        </div>
        <div className="w-1/3 px-2">
            <Input
                label="Featured Image :"
                type="file"
                className="mb-4"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                {...register("image", { required: !post })}
            />
            {post && (
                <div className="w-full mb-4">
                    <img
                        src={fileService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-lg"
                    />
                </div>
            )}
            <Select
                options={["active", "inactive"]}
                label="Status"
                className="mb-4"
                {...register("status", { required: true })}
            />
            <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                {post ? "Update" : "Submit"}
            </Button>
        </div>
    </form>
  )
}
