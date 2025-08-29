import React from "react";
import assets from "../../../Assets/assets";
import Title from "../../Title/Title";
import Faq from "../FAQ/Faq";
import { NavLink } from "react-router-dom";

const ContactInfo = () => {
  const contactInfo = [
    {
      title: "Office Address",
      details: [
        "123 Business District",
        "Tech Hub, Floor 5",
        "New Delhi, 110001",
      ],
      icon: "📍",
      iconBg: "bg-red-100 dark:bg-red-900",
      iconColor: "text-red-600 dark:text-red-300",
    },
    {
      title: "Phone Numbers",
      details: ["+91 98765 43210", "+91 11 4567 8900", "Mon-Fri: 9AM-6PM"],
      icon: "📞",
      iconBg: "bg-blue-100 dark:bg-blue-900",
      iconColor: "text-blue-600 dark:text-blue-300",
    },
    {
      title: "Email Addresses",
      details: [
        "hello@company.com",
        "support@company.com",
        "careers@company.com",
      ],
      icon: "✉️",
      iconBg: "bg-green-100 dark:bg-green-900",
      iconColor: "text-green-600 dark:text-green-300",
    },
    {
      title: "Social Media",
      details: ["@company", "linkedin.com/company", "Follow us for updates"],
      icon: "🌐",
      iconBg: "bg-purple-100 dark:bg-purple-900",
      iconColor: "text-purple-600 dark:text-purple-300",
    },
  ];
  return (
    <>
      <div className="py-16">
        <div className="px-4 sm:px-12 lg:px-24 xl:px-40">
          <div className="text-center mb-12">
            <Title
              title="Get In Touch"
              description="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
            />
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div
                  className={`w-16 h-16 ${info.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <span className="text-2xl">{info.icon}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p
                      key={idx}
                      className="text-sm text-gray-600 dark:text-gray-300"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
                Send us a Message
              </h2>

              <form className="grid gap-4" action="">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-left text-gray-700 dark:text-gray-300">
                      Your name
                    </label>
                    <div className="flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
                      <img
                        src={assets.person_icon}
                        alt="person icon"
                        className="w-4 h-4 mr-2"
                      />
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full p-3 text-sm outline-none bg-transparent text-gray-700 dark:text-white"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-left text-gray-700 dark:text-gray-300">
                      Email address
                    </label>
                    <div className="flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
                      <img
                        src={assets.email_icon}
                        alt="email icon"
                        className="w-4 h-4 mr-2"
                      />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-3 text-sm outline-none bg-transparent text-gray-700 dark:text-white"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-left text-gray-700 dark:text-gray-300">
                    Phone number
                  </label>
                  <div className="flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
                    <span className="text-gray-500 dark:text-gray-400 mr-2">
                      📱
                    </span>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full p-3 text-sm outline-none bg-transparent text-gray-700 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-left text-gray-700 dark:text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="What is this about?"
                    className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-left text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-white resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#5044e5] to-[#4d8cea] text-white text-sm px-8 py-4 rounded-full cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
                >
                  Send Message{" "}
                  <img
                    src={assets.arrow_icon}
                    alt="submit-arrow"
                    className="w-4"
                  />
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Our Office Location
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Visit us at our headquarters
                  </p>
                </div>
                <div className="relative h-64 bg-gray-200 dark:bg-gray-700">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6174896533804!2d77.2090212!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2dad2b7234b%3A0x7b28bf15bb3baf43!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1672834567890!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  ></iframe>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#5044e5] to-[#4d8cea] p-6 rounded-2xl text-white">
                <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">📞</span>
                    <span className="text-sm">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg">✉️</span>
                    <span className="text-sm">hello@company.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg">🕒</span>
                    <span className="text-sm">Mon-Fri: 9AM-6PM</span>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border-l-4 border-orange-500">
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
                  Emergency Support
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  For urgent technical issues:
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-orange-500">🚨</span>
                  <span className="text-sm font-medium text-gray-800 dark:text-white">
                    +91 90000 12345
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  Available 24/7 for critical issues
                </p>
              </div>
            </div>
          </div>
        </div>
        <Faq />
        <div className="mt-16 py-12 bg-white dark:bg-gray-800">
          <div className="px-4 sm:px-12 lg:px-24 xl:px-40 text-center">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your ideas into successful
              digital solutions that drive growth and engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+911234567890"
                className="text-sm max-sm:hidden flex items-center gap-2 from-[#5044e5] to-[#4d8cea] dark:bg-blue-600 dark:hover:bg-blue-500 text-white px-8 py-3 rounded-full cursor-pointer hover:scale-105 transition-all duration-200"
              >
                Schedule a Call{" "}
                <img src={assets.arrow_icon} width={14} alt="" />
              </a>
              <NavLink
                to="/our-work"
                className="text-sm max-sm:hidden flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white px-8 py-3 rounded-full cursor-pointer hover:scale-105 transition-all duration-200"
              >
                View Our Work
                <img src={assets.arrow_icon} width={14} alt="" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
