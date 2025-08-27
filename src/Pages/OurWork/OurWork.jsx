import React from "react";
import Title from "../../Components/Title/Title";
import assets from "../../Assets/assets";

const OurWork = () => {
  const workData = [
    {
      title: "Mobile app development",
      description:
        "We transform audacious concepts into potent digital solutions that engage, connect, empower...",
      image: assets.work_mobile_app,
    },
    {
      title: "Dashboard Management",
      description:
        "We create user-friendly dashboards that streamline complicated data so that teams can easily monitor, examine, and decide.",
      image: assets.work_dashboard_management,
    },
    {
      title: "Fitness App Promotion",
      description:
        "We develop and promote fitness applications that inspire people to lead active lives, track their progress, and accomplish their health goals through engaging digital experiences.",
      image: assets.work_fitness_app,
    },
  ];

  return (
    <div
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white"
    >
      <Title
        title="Our latest work"
        description="We create digital solutions from design to deployment that advance your company."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {
          workData.map((work, index)=>(
            <div key={index} className="hover:scale-105 duration-500 transition-all cursor-pointer">
            <img src={work.image} className="w-full rounded-xl" alt={work.title}/>
            <div className="mt-3 px-3 text-left">
            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6 mb-6">{work.description}</p>
            </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default OurWork;
