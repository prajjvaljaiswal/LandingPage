'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {
        
    const nav = useRouter()

  return (
    <div>
        <div className='bg-slate-600 h-14 flex justify-between text-white'>
            
            <img className='pl-8' alt='logo' src="https://www.themelooks.com/documentation/bizdrone/wp-content/uploads/2018/12/Header-logo.jpg"/>
            <div className='pt-5'>
                <ul className='flex justify-between'>
                    <li className='px-10 hover:underline'>
                        <Link href={"/about"}>About</Link>
                    </li>
                    <li className='hover:underline'>
                        <Link href={"/"}>button</Link> 
                    </li>
                    <li className='px-10 hover:underline'>
                        <Link href={"/"}>button</Link>
                    </li>
                    {/* <li className='border-black border-2 rounded-md'>
                        <Link href={"/"} className='p-2'>Sign in</Link>
                    </li> */}
                </ul>
            </div>
            <button className='mr-10 border-2 my-2 px-1 rounded-md' onClick={()=>nav.push('/login')}>Sign in</button>
            {/* <Link href={'/login'} className='mr-10 border-2 my-2 py-2 px-1 rounded-md'>Sign in</Link> */}
        </div>
    </div>
  )
}

export default Header