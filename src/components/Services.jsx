import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaCloud, FaPlug } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Full-Stack Web Development",
    description:
      "I build robust, scalable, and high-performance web applications using the MERN stack and modern web technologies.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    description:
      "Ensuring seamless performance and visuals across all devices — from desktop to mobile — with pixel-perfect UI.",
  },
  {
    icon: <FaPlug />,
    title: "API Development & Integration",
    description:
      "Creating custom REST APIs and integrating third-party services to enhance functionality and connectivity.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud & Backend Services",
    description:
      "Integrating cloud platforms like Firebase, Supabase, and AWS to power modern, data-driven applications.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          My <span className="text-[#6366F1]">Services</span>
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 text-center border border-gray-100 hover:border-[#6366F1] transition-all"
            >
              <div className="text-4xl text-[#6366F1] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
