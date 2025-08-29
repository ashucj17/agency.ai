import React from 'react'


const Title = ({title, description}) => {
  return (
    <>
        <h2 className='text-3xl sm:text-5xl font-medium dark:text-white text-center'>{title}</h2>
        <p className='text-center text-gray-500  dark:text-white/75 mb-0'>{description}</p>
    </>
  )
}

export default Title