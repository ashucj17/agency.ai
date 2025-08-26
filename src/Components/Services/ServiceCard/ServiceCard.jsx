import React, { useState } from 'react'

const ServiceCard = ({ service }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative overflow-hidden max-w-md w-full m-3 rounded-2xl border border-gray-200 dark:border-gray-600 shadow-xl hover:shadow-2xl transition-all duration-300 group"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setPosition({ x: 0, y: 0 })
        setIsHovered(false)
      }}
    >
      {/* Enhanced Glow effect with better visibility */}
      <div
        className={`pointer-events-none absolute z-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 transition-all duration-700 ease-out ${
          isHovered ? 'opacity-30 blur-xl w-80 h-80' : 'opacity-0 w-40 h-40 blur-2xl'
        }`}
        style={{ 
          top: position.y - 160, 
          left: position.x - 160,
          filter: 'blur(40px)'
        }}
      />

      {/* Content Container with improved contrast */}
      <div className="relative z-10 p-8 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/50">
        
        {/* Icon Section - Enhanced visibility */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <img
                src={service.icon}
                alt={service.title + ' icon'}
                className="w-12 h-12 object-contain filter group-hover:brightness-110 transition-all duration-300"
              />
            </div>
            {/* Icon glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
          </div>
        </div>

        {/* Text Content - Improved typography and spacing */}
        <div className="text-center space-y-4">
          {/* Title with better contrast and size */}
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {service.title}
          </h3>
          
          {/* Description with improved readability */}
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base font-medium px-2 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
            {service.description}
          </p>
        </div>

        {/* Optional: Add a subtle bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
        
        {/* Optional: Add a "Learn More" hint on hover */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  )
}

export default ServiceCard