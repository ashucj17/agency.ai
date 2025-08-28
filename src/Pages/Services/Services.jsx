import React from 'react'
import assets from '../../Assets/assets'
import Title from '../../Components/Title/Title'
import ServicesGrid from '../../Components/Services/ServicesGrid/ServicesGrid'
import ServiceCard from '../../Components/Services/ServiceCard/ServiceCard'


const Services = () => {
  const featuredServicesData = [
    {
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation strategies that align with your business goals and drive sustainable growth.',
      icon: assets.ads_icon,
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create intuitive, engaging, and conversion-focused digital experiences.',
      icon: assets.web_icon,
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete online store development with secure payment integration and inventory management systems.',
      icon: assets.content_icon,
    },
    {
      title: 'Analytics & Optimization',
      description: 'Data-driven insights and continuous optimization to maximize your digital performance and ROI.',
      icon: assets.marketing_icon,
    }
  ]

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
      <div 
        className="relative flex flex-col items-center justify-center px-6 sm:px-12 lg:px-24 xl:px-40 py-20 min-h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${assets.service_hero})`
        }}
      >
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
        
        <div className="relative z-10 text-center text-white">
          <div className='inline-flex items-center gap-2 border border-white/30 bg-white/10 backdrop-blur-sm p-1.5 pr-4 rounded-full mb-6'>
            <img className='w-20' src={assets.group_profile} alt="services-icon"/>
            <p className='text-xs font-medium text-white/90'>Professional Services</p>
          </div>

          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white'>
            Our <span className='bg-gradient-to-r from-[#5044e5] to-[#4d8cea] bg-clip-text text-transparent'>Services</span>
          </h1>
          
          <p className='text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed'>
            Comprehensive digital solutions designed to elevate your business and drive meaningful results in today's competitive landscape.
          </p>

          {/* Optional CTA Button */}
          <div className="mt-8">
            <button className="bg-gradient-to-r from-[#5044e5] to-[#4d8cea] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
              Explore Our Services
            </button>
          </div>
        </div>

        {/* Optional: Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div>
      </div>

      {/* ✅ Services Sections */}
      <div className='py-16'>
        <div className='text-center mb-12'>
          <Title
            title='What We Offer' 
            description='Explore our comprehensive range of services designed to help your business thrive in the digital world.'
          />
        </div>
        
        <ServicesGrid />

        <div className='mt-20 px-4 sm:px-12 lg:px-24 xl:px-40'>
          <div className='text-center mb-12'>
            <Title
              title='Featured Services' 
              description='Premium solutions with advanced features and interactive experiences designed for maximum impact.'
            />
          </div>
          <div className='flex flex-wrap justify-center items-center'>
            {featuredServicesData.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className='mt-16 py-12 bg-white dark:bg-gray-800'>
          <div className='px-4 sm:px-12 lg:px-24 xl:px-40'>
            <div className='text-center mb-8'>
              <h2 className='text-3xl font-semibold mb-4 text-gray-800 dark:text-white'>Why Choose Us?</h2>
              <p className='text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
                We combine creativity, technology, and strategy to deliver exceptional results that exceed expectations and drive sustainable growth.
              </p>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
              <div className='text-center'>
                <div className='w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl'>🎯</span>
                </div>
                <h3 className='text-xl font-semibold mb-2 text-gray-800 dark:text-white'>Strategic Approach</h3>
                <p className='text-gray-600 dark:text-gray-300'>Every project begins with a deep understanding of your goals and target audience.</p>
              </div>
              
              <div className='text-center'>
                <div className='w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl'>⚡</span>
                </div>
                <h3 className='text-xl font-semibold mb-2 text-gray-800 dark:text-white'>Fast Delivery</h3>
                <p className='text-gray-600 dark:text-gray-300'>We deliver high-quality results on time without compromising on excellence.</p>
              </div>
              
              <div className='text-center'>
                <div className='w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl'>🤝</span>
                </div>
                <h3 className='text-xl font-semibold mb-2 text-gray-800 dark:text-white'>Ongoing Support</h3>
                <p className='text-gray-600 dark:text-gray-300'>We provide continuous support and maintenance to ensure your success.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services