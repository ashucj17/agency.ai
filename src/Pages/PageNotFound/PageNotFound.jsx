import React from 'react'
import Title from '../../Components/Services/Title/Title'
import assets from '../../Assets/assets'

const PageNotFound = () => {
  return (
    <div className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <img src={assets.bgImage2} alt="background-image" className='absolute -top-110 -left-70 -z-1 dark:hidden' />
      
      <Title title='Page Not Found'/>
    </div>
  )
}

export default PageNotFound