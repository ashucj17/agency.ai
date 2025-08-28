import React from 'react'
import Title from '../../Components/Title/Title'
import assets from '../../Assets/assets'

const ContactUs = () => {
  return (
    <div className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <div className='flex flex-col justify-center'>
        <Title title={"Reach out to us"} description={'We create digital solutions that advance your company from strategy to execution.'}/>
      </div>
      <form className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full' action="">
        <div>
          <label className='block mb-2 text-sm font-medium text-left' >Your name</label>
            <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
              <img src={assets.person_icon} alt="person icon"/>
              <input type="text" placeholder='Enter your name' className='w-full p-3 text-sm outline-none' required/>
            </div>
        </div>
        <div>
          <label className='block mb-2 text-sm font-medium text-left' >Email id</label>
            <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
              <img src={assets.email_icon} alt="person icon"/>
              <input type="email" placeholder='Enter your email' className='w-full p-3 text-sm outline-none' required />
            </div>
        </div>
        <div className='sm:col-span-2'>
          <label className='block mb-2 text-sm font-medium text-left' >Message</label>
          <textarea rows={8} placeholder='Enter your message'className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600'/>
        </div>
        <button type='submit' className='w-max flex gap-2 bg-blue-600 text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-all'>
        Submit <img src={assets.arrow_icon} alt="submit-arrow" className='w-4' />
        </button>
      </form>
    </div>
  )
}

export default ContactUs