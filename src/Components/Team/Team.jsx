import React from 'react'
import Title from '../Title/Title'
import assets, { teamData } from '../../Assets/assets'
import { NavLink } from 'react-router-dom'

const Team = () => {
  return (
    <div className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-800 dark:text-white'>
        <Title title="Meet the team" description="A group of enthusiastic digital professionals committed to the success of your brand."/>

        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
            {teamData.map((team, index)=>(
                <div key={index} className='flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-105 transition-all divide-purple-400'>
                    <img src={team.image} className='w-12 h-12 rounded-full' alt="team-member"/>
                    <div className='flex-1'>
                    <h3 className='font-bold text-sm'>{team.name}</h3>
                    <p className='text-xs opacity-60'>{team.title}</p>
                    </div>
                </div>

            ))}
            
        </div>
            <NavLink to='/contact-us' className='text-sm max-sm:hidden flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-200'>
                Connect Now<img src={assets.arrow_icon} width={14} alt=""/>
            </NavLink>
    </div>
  )
}

export default Team