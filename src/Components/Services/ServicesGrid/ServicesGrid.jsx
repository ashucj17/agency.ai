import React from 'react'
import assets from '../../../Assets/assets'


const ServicesGrid = () => {
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
      icon: assets.web_icon,
    },
    {
      title: 'SEO & Marketing',
      description: 'Boost visibility and drive growth with our tailored SEO strategies and digital marketing campaigns.',
      icon: assets.marketing_icon,
    }
  ]

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-12 lg:px-24 xl:px-40'>
      {servicesData.map((service, index) => (
        <div key={index} className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <img src={service.icon} alt={service.title} className='w-12 h-12 mb-4' />
          <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
          <p className='text-gray-600 dark:text-gray-300'>{service.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ServicesGrid