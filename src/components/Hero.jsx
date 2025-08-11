import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/Profile picture (2).png";
import resumePDF from "../assets/Shoukat_Rai_Full_Stack_Developer_Resume.pdf";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 py-10 md:px-16 overflow-hidden rounded-lg">


      <div className=" absolute inset-0 bg-gradient-to-r from-[#6366F1] via-[#06B6D4] to-[#6366F1] animate-gradient-slow opacity-10"></div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 text-center md:text-left z-10"
      >
        <h1 className="text-4xl  md:mt-10 md:text-6xl font-bold text-[#111827] leading-tight">
          Hi, I'm{" "}
          <span className="text-[#6366F1] relative">
            Shoukat Rai
            <span className="absolute left-0 bottom-0 w-full h-1 bg-[#FACC15] rounded-full"></span>
          </span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-lg">
          Full-Stack Developer | MERN Stack Specialist | Building Scalable, Performant Web Applications
        </p>
        <p className="mt-4 text-sm md:text-sm text-gray-500 max-w-lg">
          Crafting modern, responsive, and secure web solutions with MongoDB, Express.js, React.js, and Node.js.
        </p>

        
        <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05 }}
            className="bg-[#6366F1] text-white px-6 py-3 rounded-full hover:bg-[#4F46E5] transition shadow-[5px_5px_0px_rgba(109,40,217)]"
          >
            View Projects
          </motion.a>
          <motion.a
            href={resumePDF}
            download
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 border-2 border-[#6366F1] text-[#6366F1] rounded-full hover:bg-[#6366F1] hover:text-white transition shadow-[5px_5px_0px_rgba(109,40,217)]"
          >
            Download CV
          </motion.a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center md:justify-end w-full md:w-1/2 relative"
      >
        <div className="absolute w-72 h-72 rounded-full bg-[#6366F1] blur-3xl opacity-20 animate-pulse"></div>
        <img
          src={profilePic}
          alt="Profile"
          className="mt-10 relative w-60 h-60 md:w-72 md:h-72 rounded-full border-4 border-[#6366F1] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] z-10"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
