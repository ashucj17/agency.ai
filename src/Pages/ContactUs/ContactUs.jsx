import React from 'react'
import Title from '../../Components/Title/Title'
import assets from '../../Assets/assets'
import ContactInfo from '../../Components/Contact/ContactInfo/ContactInfo'

const ContactUs = () => {
  // Contact information data

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
      {/* Hero Section */}
      <div 
        className="relative flex flex-col items-center justify-center px-6 sm:px-12 lg:px-24 xl:px-40 py-20 min-h-[50vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${assets.contact_hero || assets.hero_img})`
        }}
      >
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
        
        <div className="relative z-10 text-center text-white">
          <div className='inline-flex items-center gap-2 border border-white/30 bg-white/10 backdrop-blur-sm p-1.5 pr-4 rounded-full mb-6'>
            <img className='w-20' src={assets.group_profile} alt="contact-icon"/>
            <p className='text-xs font-medium text-white/90'>Get In Touch</p>
          </div>

          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white'>
            Contact <span className='bg-gradient-to-r from-[#5044e5] to-[#4d8cea] bg-clip-text text-transparent'>Us</span>
          </h1>
          
          <p className='text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed'>
            Ready to transform your ideas into digital reality? Let's start a conversation about your next project.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div>
      </div>

     <ContactInfo />
    </div>
  )
}

export default ContactUs