import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/Profile picture (3)[1].png";

export default function About() {
  return (
    <section
      className="relative py-20 bg-white overflow-hidden"
      id="about"
    >

      <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] via-[#06B6D4] to-[#6366F1] opacity-5 animate-gradient-slow"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 relative z-10">


        {/* <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-shrink-0 relative"
        >
          <div className="hidden md:block absolute w-72 h-72 rounded-full bg-[#6366F1] blur-3xl opacity-20 animate-pulse"></div>
          <img
            src={profile}
            alt="Shoukat Dev"
            className="relative w-60 h-60 object-cover rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] border-4 border-[#6366F1] z-10"
          />
        </motion.div> */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-shrink-0 relative hidden md:block" // 👈 hides on small devices
        >
          <div className="absolute w-72 h-72 rounded-full bg-[#6366F1] blur-3xl opacity-20 animate-pulse"></div>
          <img
            src={profile}
            alt="Shoukat Dev"
            className="relative w-60 h-60 object-cover rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] border-4 border-[#6366F1] z-10"
          />
        </motion.div>



        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            About <span className="text-[#6366F1] relative">
              Me
              <span className="absolute left-0 bottom-0 w-full h-1 bg-[#FACC15] rounded-full"></span>
            </span>
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Hello! I’m <span className="font-semibold">Shoukat</span>, a passionate MERN Stack Developer with a love for crafting modern, scalable, and user-friendly web applications.
            I specialize in <span className="text-[#6366F1]">MongoDB, Express.js, React, and Node.js</span>.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Currently, I’m an undergraduate in my 3rd year pursuing a Bachelor of Science in Information Technology, which strengthens my foundation in both theory and practical application of modern technologies.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            I build scalable, maintainable, and high-performance web applications that deliver seamless user experiences and robust backend architecture. With a strong command of frontend and backend technologies, I transform complex requirements into elegant, efficient solutions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            When I’m not coding, I explore new tech, contribute to open-source, and share my knowledge.
          </p>


        </motion.div>
      </div>
    </section>
  );
}
