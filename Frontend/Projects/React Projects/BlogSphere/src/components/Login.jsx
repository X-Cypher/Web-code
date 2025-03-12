import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login } from '../features/authSlice'
import {Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm() //useForm is a hook provided by react-hook-form to manage form state
    const [error, setError] = useState('')

    const loginUser = async(data) => {
        setError('') //login ho rha hai means error nhi h. so error ko clean krdo
        try {
            const session = await authService.login(data)
            if(session){
                const userData = await authService.getCurrentUser()
                if(userData){
                    dispatch(login(userData))
                    navigate('/') //agar login ho gya toh home page pe le jao
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }

//nbsp is used between 2 words to give space and they will always be on same line together.
  return (
    <div className='flex items-center justify-center w-full'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>

            <div className='mb-2 flex justify-center'>
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo width= "100%" />
                </span>
            </div>

            <h2 className="text-center text-2xl font-bold leading-tight">
                Sign in to your account
            </h2>

            <p className="mt-2 text-center text-base text-black/60">
                Don&apos;t have any account?&nbsp;
                <Link
                    to="/signup"
                    className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                    Sign Up
                </Link>
            </p>
            {error && 
                <p className='text-red-600 mt-8 text-center'>
                    {error}
                </p>
            }

            <form onSubmit={handleSubmit(loginUser)} className='mt-8'>
                <div className='space-y-5'>
                    <Input 
                        label= 'Email'
                        placeholder = 'Enter your email'
                        type='email'
                        {...register('email',{
                            required: true,
                            validate:{
                                matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.
                                test(value) || 'Please enter a valid email'
                            }
                            })
                        }
                    />

                    <Input
                        label='Password'
                        placeholder='Enter your password'
                        type='password'
                        {...register('password',{
                            required: true,
                        })}
                    />

                    <Button
                        type='submit'
                        className='w-full'
                    >
                        Sign In
                    </Button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default Login