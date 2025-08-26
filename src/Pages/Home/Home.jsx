import React from 'react'
import assets from '../../Assets/assets'
import TrustedBy from '../../Components/Home/TrustedBy/TrustedBy'
import ServicesSection from '../../Components/Services/ServicesSection'

const Home = () => {
  return (
    <div id='hero' className='relative flex flex-col items-center justify-center py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900'>
      <div className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
        <img className='w-20' src={assets.group_profile} alt="group-profile-icon"/>
        <p className='text-xs font-medium text-gray-600 dark:text-gray-300'>Trusted by 10k+ people</p>
      </div>
      <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl text-gray-600 dark:text-gray-300 '> Tuning imagination into <span className='bg-gradient-to-r from-[#5044e5] to-[#4d8cea] bg-clip-text text-transparent'>digital</span> impact.
      </h1>
      <p className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:maxw-lg- pb-3'>Creating meaningful connections and turning big ideas into interactive digital experiences.</p>
      <div className='relative'>
        <img src={assets.hero_img} alt="hero" className='w-full max-w-6xl' />
        <img src={assets.bgImage1} alt="background-color" className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden' />
      </div>
      <TrustedBy />
      <ServicesSection />
    </div>
  )
}

export default Home