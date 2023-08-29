"use client"
import React from 'react'
import Punchline from '../fragments/Punchline'
import {BsDribbble, BsGithub} from 'react-icons/bs'
import { useRouter } from 'next/navigation'

const HeroSection = () => {
  
  const router = useRouter()
  return (
    <section className='drop-shadow-2xl '>
        <div className='bg-blue-700 w-36 text-center rounded-full text-sm  px-6 py-1 '>
            landing page
        </div>
        <h1 className='text-5xl md:text-7xl font-bold mt-10 mb-5'>Omah</h1>
        <Punchline>
          Web Selling//renting <br/>
          houses easily and raliably
        </Punchline> 
        <div className='flex flex-col gap-y-3 mt-10 '>
          <div onClick={()=> router.push("https://dribbble.com/shots/20691975-Omah-Real-Estate-Website-Design")} className='flex items-center gap-x-2 md:gap-x-3 cursor-pointer bg-slate-500 py-2  justify-center w-40 md:w-52 rounded-full'>
            <div className='rounded-full bg-pink-600 p-2'>
              <BsDribbble/>
            </div>
            <h3 className='text-sm md:text-lg'>Dzaki Muzhaffar</h3>
          </div>  
          <div onClick={()=>router.push("https://github.com/KaitoDeCode/omah-web-design")} className='flex  items-center gap-x-2 md:gap-x-3 bg-slate-500 py-2 cursor-pointer  justify-center w-40 md:w-52 rounded-full'>
            <div className='rounded-full bg-black p-2'>
              <BsGithub/>
            </div>
            <h3 className='text-sm md:text-lg'>Adi Kurniawan</h3>
          </div>
        </div>

    </section>
  )
}

export default HeroSection