import React from 'react'
import assets from '../../Assets/assets'
import Title from '../Services/Title/Title'
import { NavLink } from 'react-router-dom'

const Services = () => {

  const servicesData = [
    {
      title: 'Advertising',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
      icon: assets.ads_icon,
    },
    {
    title: 'Branding',
    description: 'We help businesses build memorable brands with strong visual identities and clear messaging.',
    icon: assets.content_icon,
  },
  {
    title: 'Web Development',
    description: 'From design to deployment, we craft responsive, high-performing websites tailored to your needs.',
    icon: assets.social_icon,
  },
  {
    title: 'SEO & Marketing',
    description: 'Boost visibility and drive growth with our tailored SEO strategies and digital marketing campaigns.',
    icon: assets.marketing_icon,
  }
  ]

  return (
    <>
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 textgr700 dark:text-white'>
      <img src={assets.bgImage2} alt="background-image" className='absolute -top-110 -left-70 -z-1 dark:hidden' />

      <Title title='How can we help' description='From strategy to execution, we craft digital solutions that move ypur business forward.'/>
      <NavLink to='/services' className='text-sm max-sm:hidden flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-200 mb-4'>
                Learn More <img src={assets.arrow_icon} width={14} alt=""/>
            </NavLink>
    </div>
    </>
  )
}

export default Services