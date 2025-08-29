import React from "react";
import Title from "../../Components/Title/Title";
import assets, { teamData } from "../../Assets/assets";
import OurWorkPortfolio from "../../Components/OurWork/OurWorkPortfolio";

const OurWork = () => {
  // Extended work data for the full page
  const fullWorkData = [
    {
      title: "Mobile App Development",
      description: "We transform audacious concepts into potent digital solutions that engage, connect, empower users across all platforms.",
      image: assets.work_mobile_app,
      category: "Mobile Development"
    },
    {
      title: "Dashboard Management",
      description: "We create user-friendly dashboards that streamline complicated data so that teams can easily monitor, examine, and decide.",
      image: assets.work_dashboard_management,
      category: "Web Development"
    },
    {
      title: "Fitness App Promotion",
      description: "We develop and promote fitness applications that inspire people to lead active lives, track their progress, and accomplish their health goals.",
      image: assets.work_fitness_app,
      category: "Mobile App"
    },
    {
      title: "E-commerce Platform",
      description: "Complete online store solutions with secure payment integration, inventory management, and seamless user experience.",
      image: assets.e_commerce,
      category: "E-commerce"
    },
    {
      title: "Corporate Website",
      description: "Professional corporate websites that establish strong brand presence and drive business growth through effective digital marketing.",
      image: assets.corporate_website,
      category: "Web Design"
    },
    {
      title: "SaaS Application",
      description: "Scalable software-as-a-service applications built with modern technologies to solve complex business challenges efficiently.",
      image: assets.saas_application,
      category: "SaaS Development"
    }
  ];

    const featuredWork = [
    {
      title: "Award-Winning Mobile App",
      description: "Revolutionary fitness tracking app that won the 2024 Best Mobile Innovation Award.",
      icon: "🏆",
      stats: "500K+ Downloads"
    },
    {
      title: "Enterprise Dashboard",
      description: "Complex data visualization platform serving Fortune 500 companies worldwide.",
      icon: "📊",
      stats: "99.9% Uptime"
    },
    {
      title: "E-commerce Success",
      description: "Online marketplace that achieved $10M+ in first-year revenue for our client.",
      icon: "💰",
      stats: "$10M+ Revenue"
    },
    {
      title: "Global Platform",
      description: "International learning platform now serving students in 50+ countries.",
      icon: "🌍",
      stats: "50+ Countries"
    }
  ];

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
      <div
        className="relative flex flex-col items-center justify-center px-6 sm:px-12 lg:px-24 xl:px-40 py-20 min-h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${assets.work_hero || assets.hero_img})` // Use work_hero if available, fallback to hero_img
        }}
      >
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
        
        <div className="relative z-10 text-center text-white">
          <div className='inline-flex items-center gap-2 border border-white/30 bg-white/10 backdrop-blur-sm p-1.5 pr-4 rounded-full mb-6'>
            <img className='w-20' src={assets.group_profile} alt="our-work-icon"/>
            <p className='text-xs font-medium text-white/90'>Our Portfolio</p>
          </div>

          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white'>
            Our <span className='bg-gradient-to-r from-[#5044e5] to-[#4d8cea] bg-clip-text text-transparent'>Work</span>
          </h1>
          
          <p className='text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed'>
            Discover our portfolio of successful digital solutions that have transformed businesses and delighted users worldwide.
          </p>

          <div className="mt-8">
            <button className="bg-gradient-to-r from-[#5044e5] to-[#4d8cea] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
              View All Projects
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div>
      </div>

      {/* Main Portfolio Section - Using the Reusable Component */}
      <div className='py-16'>
        <OurWorkPortfolio 
          workData={fullWorkData}
          title="Our Complete Portfolio"
          description="Explore our comprehensive collection of successful digital solutions across various industries and technologies."
          showAll={true}
        />

        {/* Project Highlights Section */}
        <div className='mt-20 px-4 sm:px-12 lg:px-24 xl:px-40'>
          <div className='text-center mb-12'>
            <Title
              title='Project Highlights' 
              description='Our most impactful projects that showcase innovation, excellence, and measurable results for our clients.'
            />
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {featuredWork.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="bg-gradient-to-r from-[#5044e5] to-[#4d8cea] bg-clip-text text-transparent font-bold text-sm">
                  {project.stats}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section - Different Design for OurWork Page */}
        <div className='mt-20 px-4 sm:px-12 lg:px-24 xl:px-40'>
          <div className='text-center mb-12'>
            <Title
              title='The Creative Minds Behind Our Work' 
              description='Meet the talented professionals who bring innovative ideas to life and deliver exceptional results for every project.'
            />
          </div>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {teamData.slice(0, 8).map((team, index) => (
              <div key={index} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative p-6 text-center">
                  {/* Profile Image with Gradient Border */}
                  <div className="relative inline-block mb-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#5044e5] to-[#4d8cea] p-1">
                      <img 
                        src={team.image} 
                        className='w-full h-full rounded-full object-cover' 
                        alt={team.name}
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white dark:border-gray-800"></div>
                  </div>
                  
                  {/* Name and Title */}
                  <h3 className='font-bold text-lg mb-1 text-gray-800 dark:text-white group-hover:text-[#5044e5] transition-colors'>
                    {team.name}
                  </h3>
                  <p className='text-sm text-gray-600 dark:text-gray-300 mb-4'>
                    {team.title}
                  </p>
                  
                  {/* Skills or Specialization */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {/* Mock specializations based on common roles */}
                    {team.title.toLowerCase().includes('developer') && (
                      <>
                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full text-xs">React</span>
                        <span className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 px-2 py-1 rounded-full text-xs">Node.js</span>
                      </>
                    )}
                    {team.title.toLowerCase().includes('designer') && (
                      <>
                        <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 px-2 py-1 rounded-full text-xs">Figma</span>
                        <span className="bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300 px-2 py-1 rounded-full text-xs">UI/UX</span>
                      </>
                    )}
                    {team.title.toLowerCase().includes('manager') && (
                      <>
                        <span className="bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 px-2 py-1 rounded-full text-xs">Leadership</span>
                        <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 px-2 py-1 rounded-full text-xs">Strategy</span>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Hover Effect Background */}
                <div className="h-1 bg-gradient-to-r from-[#5044e5] to-[#4d8cea] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className='mt-16 py-12 bg-white dark:bg-gray-800'>
          <div className='px-4 sm:px-12 lg:px-24 xl:px-40'>
            <div className='text-center mb-8'>
              <h2 className='text-3xl font-semibold mb-4 text-gray-800 dark:text-white'>Our Process</h2>
              <p className='text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
                We follow a proven methodology that ensures every project delivers exceptional results and exceeds client expectations.
              </p>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-12'>
              <div className='text-center'>
                <div className='w-16 h-16 bg-gradient-to-r from-[#5044e5] to-[#4d8cea] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl'>
                  1
                </div>
                <h3 className='text-xl font-semibold mb-2 text-gray-800 dark:text-white'>Discovery</h3>
                <p className='text-gray-600 dark:text-gray-300'>Understanding your vision, goals, and requirements through detailed consultation.</p>
              </div>
              
              <div className='text-center'>
                <div className='w-16 h-16 bg-gradient-to-r from-[#5044e5] to-[#4d8cea] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl'>
                  2
                </div>
                <h3 className='text-xl font-semibold mb-2 text-gray-800 dark:text-white'>Design</h3>
                <p className='text-gray-600 dark:text-gray-300'>Creating intuitive designs and user experiences that align with your brand.</p>
              </div>
              
              <div className='text-center'>
                <div className='w-16 h-16 bg-gradient-to-r from-[#5044e5] to-[#4d8cea] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl'>
                  3
                </div>
                <h3 className='text-xl font-semibold mb-2 text-gray-800 dark:text-white'>Development</h3>
                <p className='text-gray-600 dark:text-gray-300'>Building robust, scalable solutions using cutting-edge technologies.</p>
              </div>
              
              <div className='text-center'>
                <div className='w-16 h-16 bg-gradient-to-r from-[#5044e5] to-[#4d8cea] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl'>
                  4
                </div>
                <h3 className='text-xl font-semibold mb-2 text-gray-800 dark:text-white'>Launch</h3>
                <p className='text-gray-600 dark:text-gray-300'>Deploying your solution and providing ongoing support for continued success.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;