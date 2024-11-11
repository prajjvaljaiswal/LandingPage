'use client'
import React, { useState } from 'react'
import Header from './header'

const Login = () => {

  const [isLogin, setLogin] = useState(true)

  const handelSignIn = () =>{
    setLogin(!isLogin)
  }

  return (
    <div>
      <Header/>
      <form onSubmit={(e)=>{return e.preventDefault()}} className='w-72 bg-gray-500 my-20 justify-self-center justify-items-center'>
        <h1 className='py-12'>Sign in</h1>
        <input className='mx-10' type='text' placeholder='Email'/>
        <input className='mx-10 my-10' type='password' placeholder='Password'/>
        {/* <h1 className='my-4'>try sign up </h1> */}
        <h1 className='my-2 mx-20' onClick={handelSignIn}>try sign up</h1>
        <button className='border-2 border-black my-6 mx-28 px-4 mb-10'>Submit</button>
      </form>
    </div>
  )
}

export default Login