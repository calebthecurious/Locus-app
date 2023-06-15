"use client"

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  const [location, setLocation] = useState("")
  return (
<main className="bg-gray-100 min-h-screen w-screen">
    <main className='max-w-scren-2xl m-auto bg-white'>
      {/* NAVBAR */}
      <nav className="bg-white p-2 flex justify-between">
        <Link href="/" className='font-bold text-gray-700 text-2xl'>Locus</Link>
        <div className="flex">
          <button className='bg-blue-400 text-white border p-1 px-4 rounded mr-3'>Sign In</button>
          <button className='border p-1 px-4 rounded'>Sign Up</button>
        </div>
      </nav>
      {/* NAVBAR */}
      <main>
        {/* HEADER */}
        <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
          <div className="text-center mt-10">
            <h1 className='text-white text-5xl font-bold mb-2'>Find a skill to learn today!</h1>
        {/* SEARCH BAR */}
        <div className="text-left text-lg py-3 m-auto flex justify-center">
          <input 
            type="text" 
            className="rounded mr-3 p-2 w-[450px]" 
            placeholder='Start Searching'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button 
          className="rounded bg-red-600 px-9 py-2 text-white "
          onClick={() => {
            if (location === "banana") return;
            router.push('/search');
          }}  
        >
          Let's go!
        </button>
        {/* SEARCH BAR */}
          </div>
        </div>  
        {/* HEADER */}
        {/* CARDS */}
        <div className="py-3 px-36 mt-10 flex flex-wrap">
          {/* CARD */}
          <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
            <img src="/images/garden.jpg" alt="" className="w-full h-36" />
            <div className="p-1">
              <h3 className="font-bold text-2xl mb-2">Taking care of your plants</h3>
              <div className="flex items-start">
                <div className="flex mb-2">*****</div>
                <p className="ml-2">77 reviews</p>
              </div>
              <div className="flex text-reg font-light capitalize">
                <p className="mr-3 ">Home</p>
                <p className="mr-3">$$$$</p>
                <p>Collingwood</p>
              </div>
              <p className="text-sm mt-1 font-bold">Booked 3 times this week</p>
            </div>
          </div>
          {/* CARD */}
        </div>
        {/* CARDS */}
      </main>
    </main>
  </main>
  )
}

