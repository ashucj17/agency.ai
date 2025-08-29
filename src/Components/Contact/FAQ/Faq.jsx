import React from 'react'
import Title from '../../Title/Title'

const Faq = () => {
  return (
    <>
        
        {/* FAQ Section */}
        <div className='mt-16 px-4 sm:px-12 lg:px-24 xl:px-40'>
          <div className='text-center mb-12'>
            <Title
              title="Frequently Asked Questions"
              description="Quick answers to common questions about our services and process."
            />
          </div>
          
          <div className='grid md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
            <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg'>
              <h3 className='text-lg font-semibold mb-3 text-gray-800 dark:text-white'>How long does a project take?</h3>
              <p className='text-sm text-gray-600 dark:text-gray-300'>Project timelines vary based on complexity. Typically 2-12 weeks from start to launch.</p>
            </div>
            
            <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg'>
              <h3 className='text-lg font-semibold mb-3 text-gray-800 dark:text-white'>Do you provide ongoing support?</h3>
              <p className='text-sm text-gray-600 dark:text-gray-300'>Yes, we offer comprehensive maintenance and support packages for all our projects.</p>
            </div>
            
            <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg'>
              <h3 className='text-lg font-semibold mb-3 text-gray-800 dark:text-white'>What technologies do you use?</h3>
              <p className='text-sm text-gray-600 dark:text-gray-300'>We use modern technologies like React, Node.js, Python, and cloud platforms like AWS.</p>
            </div>
            
            <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg'>
              <h3 className='text-lg font-semibold mb-3 text-gray-800 dark:text-white'>Can you work with our budget?</h3>
              <p className='text-sm text-gray-600 dark:text-gray-300'>We offer flexible packages and can work within various budget ranges. Let's discuss!</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Faq