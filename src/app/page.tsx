
import HeroSection from '@/components/layouts/HeroSection'
import Image from 'next/image'

export default function HomePage() {
  return(
    <main className='min-h-screen w-full flex items-center bg-homeBg bg-center bg-cover px-5 md:px-20'>
      <div className='w-[300px] md:w-[400px] -left-10 h-screen  md:h-[800px] max-h-screen bg-black absolute -z-0 opacity-40 blur-lg'>

      </div>
      <HeroSection/>
    </main>
  )
}