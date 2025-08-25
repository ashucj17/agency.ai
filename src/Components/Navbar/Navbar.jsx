import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import assets from '../../Assets/assets'
import ThemeToggleBtn from '../ThemeToggleBtn/ThemeToggleBtn'

const Navbar = ({theme, setTheme}) => {
  const [sideBarOpen, setSideBarOpen] = useState(false)

  return (
    <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/20 dark:border-gray-700/30'>

        <img src={theme === 'dark' ? assets.logo_dark : assets.logo} className='w-32 sm:w-40' alt=""/>

        <nav className={`text-gray-700 dark:text-gray-200 sm:text-sm ${!sideBarOpen ? 'max-sm:w-0 max-sm:overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-blue-600 dark:max-sm:bg-blue-700 max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>

          <img src={assets.close_icon} alt="close" className='w-5 absolute right-4 top-4 sm:hidden cursor-pointer hover:opacity-70' onClick={()=> setSideBarOpen(false)}/>
        
        <ul className="flex flex-col sm:flex-row gap-5 sm:items-center list-none">
          <li><NavLink onClick={()=> setSideBarOpen(false)} to="/" className='sm:hover:border-b hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>Home</NavLink></li>
          <li><NavLink onClick={()=> setSideBarOpen(false)} to="/services" className='sm:hover:border-b hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>Services</NavLink></li>
          <li><NavLink onClick={()=> setSideBarOpen(false)} to="/our-work" className='sm:hover:border-b hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>Our Work</NavLink></li>
          <li><NavLink onClick={()=> setSideBarOpen(false)} to="/contact-us" className='sm:hover:border-b hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>Contact Us</NavLink></li>
        </ul>
        </nav>

        <div className='flex items-center gap-2 sm:gap-4'>
            {/* <ThemeToggleBtn theme={theme} setTheme={setTheme} />

            <img src={theme === 'dark'? assets.menu_icon_dark : assets.menu_icon} alt="menu" onClick={()=> setSideBarOpen(true)} className='w-8 sm:hidden cursor-pointer hover:opacity-70 transition-opacity' /> */}
            
            <a href="#contact-us" className='text-sm max-sm:hidden flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-200'>
                Connect <img src={assets.arrow_icon} width={14} alt=""/>
            </a>
        </div>
    </div>
  )
}

export default Navbar