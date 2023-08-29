
import HeroSection from '@/components/layouts/HeroSection'
import Image from 'next/image'

export default function HomePage() {
  return(
    <main className='min-h-screen w-full flex items-center bg-homeBg bg-center bg-cover px-20'>
      <div className='w-[400px] h-[800px] max-h-screen bg-black absolute -z-0 opacity-20 blur-lg'>

      </div>
      <HeroSection/>
    </main>
  )
}