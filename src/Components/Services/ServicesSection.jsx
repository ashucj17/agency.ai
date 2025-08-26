import React from 'react'
import assets from '../../Assets/assets'
import Title from './Title/Title'
import ServicesGrid from './ServicesGrid/ServicesGrid'
import { NavLink } from 'react-router-dom'

const ServicesSection = () => {
  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <img src={assets.bgImage2} alt="background-image" className='absolute -top-110 -left-70 -z-1 dark:hidden' />
      
      <Title title='How can we help' description='From strategy to execution, we craft digital solutions that move your business forward.'/>
      
      <NavLink to='/services' className='text-sm max-sm:hidden flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-200 mb-4'>
        Learn More <img src={assets.arrow_icon} width={14} alt=""/>
      </NavLink>
      
      <ServicesGrid />
    </div>
  )
}

export default ServicesSection