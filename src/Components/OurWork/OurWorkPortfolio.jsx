import React from "react";
import Title from "../../Components/Title/Title";
import assets from "../../Assets/assets";

const OurWorkPortfolio = ({
  workData,
  title = "Our Latest Work",
  description = "We create digital solutions from design to deployment that advance your company.",
  showAll = false,
  maxItems = 3,
  isHomePage = false
}) => {

  const defaultWorkData = [
    {
      title: "Mobile app development",
      description: "We transform audacious concepts into potent digital solutions that engage, connect, empower...",
      image: assets.work_mobile_app,
    },
    {
      title: "Dashboard Management",
      description: "We create user-friendly dashboards that streamline complicated data so that teams can easily monitor, examine, and decide.",
      image: assets.work_dashboard_management,
    },
    {
      title: "Fitness App Promotion",
      description: "We develop and promote fitness applications that inspire people to lead active lives, track their progress, and accomplish their health goals through engaging digital experiences.",
      image: assets.work_fitness_app,
    },
    {
      title: "E-commerce Platform",
      description: "Complete online store solutions with secure payment integration, inventory management, and seamless user experience.",
      image: assets.e_commerce,
    },
    {
      title: "Corporate Website",
      description: "Professional corporate websites that establish strong brand presence and drive business growth.",
      image: assets.corporate_website,
    },
    {
      title: "SaaS Application",
      description: "Scalable software-as-a-service applications built with modern technologies to solve complex business challenges.",
      image: assets.saas_application,
    }
  ];

  // Use provided workData or default
  const dataToRender = workData || defaultWorkData;

  // Limit items if not showing all
  const displayData = showAll ? dataToRender : dataToRender.slice(0, maxItems);

  return (
    <div
      id="our-work"
      className={`flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white ${
        isHomePage ? 'py-8' : 'py-16'
      }`}
    >
      <Title
        title={title}
        description={description}
      />

      <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full ${isHomePage ? 'max-w-5xl' : 'max-w-6xl'}`}>
        {displayData.map((work, index) => (
          <div
            key={index}
            className={`group hover:scale-105 duration-500 transition-all cursor-pointer ${
              isHomePage
                ? 'bg-transparent'
                : 'bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl'
            }`}
          >
            {isHomePage ? (
              // Simple home page design (original style)
              <>
                <img src={work.image} className="w-full rounded-xl" alt={work.title}/>
                <div className="mt-3 px-3 text-left">
                  <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
                  <p className="text-sm opacity-60 w-5/6 mb-6">{work.description}</p>
                </div>
              </>
            ) : (
              // Enhanced design for OurWork page
              <>
                <div className="relative overflow-hidden">
                  <img
                    src={work.image}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                    alt={work.title}
                  />
                  {work.category && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-[#5044e5] to-[#4d8cea] text-white px-3 py-1 rounded-full text-xs font-medium">
                        {work.category}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white group-hover:text-[#5044e5] transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {work.description}
                  </p>
                  <div className="mt-4 flex items-center text-[#5044e5] font-medium text-sm group-hover:translate-x-2 transition-transform">
                    View Project <span className="ml-1">→</span>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWorkPortfolio;