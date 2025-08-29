import React from "react";
import assets from "../../Assets/assets";
import { NavLink } from "react-router-dom";

const Footer = ({ theme }) => {
  return (
    <div className="text-gray-700 dark:text-gray-200 bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-2 pb-2  px-4 sm:px-10 lg:px-24 xl:px-40">
      {/* footer top */}
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10 ">
        <div className="space-y-5 text-sm text-gray-700 dark:text-gray-400">
          <img
            src={assets.logo_dark}
            className="w-32 sm:w-44"
            alt="footer logo"
          />
          <p className="max-w-md">
            We create digital solutions that advance your company from strategy
            to&nbsp;execution.
          </p>

          <ul className="flex flex-col sm:flex-row gap-5 sm:items-center list-none">
            <li>
              <NavLink
                to="/"
                className="sm:hover:border-b hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="sm:hover:border-b hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/our-work"
                className="sm:hover:border-b hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Our Work
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className="sm:hover:border-b hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className=" text-gray-700 dark:text-gray-400">
            <h3 className="font-semibold">Join for our newsletter.</h3>
            <p className="text-sm mt-2 mb-6">Every week, the most recent articles, resources, and news are delivered to your email.</p>
            <div className="flex gap-2 text-sm">
                <input type="email" placeholder="Enter your email" className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500"/>
                <button className="bg-blue-600 text-white rounded px-6">Subscribe</button>
            </div>
        </div>
      </div>
      {/* footer bottom */}
      <div className="pb-6 text-sm text-gray-600 flex justify-center sm:justify-between gap-4 flex-wrap border-t-2 border-b-gray-600 mt-4 py-4">
        <p>Copyright 2025 © agency.ai - All Right Reserved.</p>
        <div className="flex items-center justify-between gap-4">
            <img src={assets.facebook_icon} alt="facebook"/>
            <img src={assets.twitter_icon} alt="twitter"/>
            <img src={assets.instagram_icon} alt="instagram"/>
            <img src={assets.linkedin_icon} alt="linkedin"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
