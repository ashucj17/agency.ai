import React from 'react'
import { NavLink } from 'react-router-dom'
import assets from '../../Assets/assets'

const Navbar = ({theme, setTheme}) => {
  return (
    <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70 '>

        <img src={theme === 'dark' ? assets.logo_dark : assets.logo} className='w-32 sm:w-40' alt=""/>

        <ul className='text-gray-700 dark:text-white sm:text-sm max-sm:w-50 max-sm:pl-10 max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all '>
        <li><NavLink to="/" className='sm:hover:border-b'>Home</NavLink></li>
          <li><NavLink to="/services" className='sm:hover:border-b'>Services</NavLink></li>
           <li> <NavLink to="/our-work" className='sm:hover:border-b'>Our Work</NavLink></li>
            <li><NavLink to="/contact-us" className='sm:hover:border-b'>Contact Us</NavLink></li>
        </ul>

        <div>
            <a href="#contact-us" className='text-sm max-sm:hidden flex items-center gap-2 bg-blue-500 text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'>
                Connect <img src={assets.arrow_icon} width={14} alt=""/>
            </a>
        </div>
    </div>
  )
}

export default Navbar