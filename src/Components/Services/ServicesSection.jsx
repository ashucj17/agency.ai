import React, { useState } from 'react'
import assets from '../../Assets/assets'
import Title from '../Title/Title'
import { NavLink } from 'react-router-dom'

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const servicesData = [
    {
      title: 'Advertising',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage, and convert your audience.',
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

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    setHoveredCard(index)
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
    setHoveredCard(null)
  }

  return (
    <div id='services' className='relative flex flex-col items-center gap-12 px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-700 dark:text-white'>
      {/* Background Image */}
      <img src={assets.bgImage2} alt="background-image" className='absolute -top-40 -left-20 -z-10 opacity-30 dark:hidden' />
      
      {/* Header Section */}
      <div className="text-center space-y-6">
        <Title 
          title='How can we help' 
          description='From strategy to execution, we craft digital solutions that move your business forward.'
        />
        
        <NavLink 
          to='/services' 
          className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white mt-6 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group'
        >
          Learn More 
          <img 
            src={assets.arrow_icon} 
            width={14} 
            alt=""
            className="group-hover:translate-x-1 transition-transform duration-300"
          />
        </NavLink>
      </div>

      {/* Services Grid with ServiceCard Style */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full max-w-7xl'>
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-600 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Enhanced Glow effect */}
            <div
              className={`pointer-events-none absolute z-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 transition-all duration-700 ease-out ${
                hoveredCard === index ? 'opacity-20 blur-xl w-80 h-80' : 'opacity-0 w-40 h-40 blur-2xl'
              }`}
              style={{ 
                top: mousePosition.y - 160, 
                left: mousePosition.x - 160,
                filter: 'blur(40px)'
              }}
            />

            {/* Content Container */}
            <div className="relative z-10 p-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/50 h-full flex flex-col">
              
              {/* Icon Section */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <img
                      src={service.icon}
                      alt={service.title + ' icon'}
                      className="w-8 h-8 object-contain filter group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                  {/* Icon glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center space-y-3 flex-grow flex flex-col justify-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
              
              {/* Hover indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4 space-y-4">
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Ready to transform your business with our comprehensive digital solutions? 
        </p>
        <NavLink 
          to='/contact' 
          className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105"
        >
          Get Started Today
        </NavLink>
      </div>
    </div>
  )
}

export default ServicesSection