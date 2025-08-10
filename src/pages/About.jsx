import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaBriefcase, FaUserGraduate, FaGlobe, FaEnvelope, FaPhone } from "react-icons/fa";
import profile from "../assets/Profile picture (2).png";
import { Footer } from "../components";

const About = () => {
  const personalDetails = [
    { icon: <FaGlobe className="text-[#6366F1]" />, label: "Location", value: "Karachi, Sindh, Pakistan" },
    { icon: <FaEnvelope className="text-[#06B6D4]" />, label: "Email", value: "raishoukat033@gmail.com" },
    { icon: <FaPhone className="text-[#FACC15]" />, label: "Phone", value: "+92 347 3127706" },
    { icon: "🗣️", label: "Languages", value: "English, Urdu, Sindhi" },
    { icon: "💼", label: "Freelance Platforms", value: "Fiverr, Upwork" },
  ];

  const timeline = [
    { year: "2019", title: "Started Web Development", description: "Began learning HTML, CSS, JS.", icon: <FaUserGraduate className="text-[#6366F1]" /> },
    { year: "2020", title: "First Freelance Project", description: "Built responsive e-commerce site.", icon: <FaBriefcase className="text-[#06B6D4]" /> },
    { year: "2022", title: "Full-Stack Developer", description: "Worked on SaaS apps using MERN stack.", icon: <FaBriefcase className="text-[#FACC15]" /> },
    { year: "2025", title: "Scaling SaaS Solutions", description: "Specializing in performance optimization.", icon: <FaTrophy className="text-[#6366F1]" /> },
  ];

  const achievements = [
  { icon: "🏆", title: "3+ Web Applications" },
  { icon: "📜", title: "Certified MERN Developer" },
  { icon: "💼", title: "Certified Freelancer" },
  { icon: "🎯", title: "Cleared SMIT Hackathon" },
];


  const education = [
    {
      year: "2023 - Present",
      degree: "Bachelor of Science in Information Technology (3rd Year)",
      institution: "Sindh Madressatul Islam University, Karachi",
      description: "Focused on software development, database management, and system design.",
      icon: <FaUserGraduate className="text-[#6366F1]" />,
    },
    {
      year: "2024 - 2025",
      degree: "Diploma in Web and App Development",
      institution: "Saylani Mass IT Training",
      description: "Intensive practical training in full-stack web and mobile app development using modern technologies.",
      icon: <FaUserGraduate className="text-[#6366F1]" />,
    }

  ];

  return (
    <>
      <section className="relative py-16 px-6 md:px-16 bg-white">

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12"
        >
          About <span className="text-[#6366F1]">Me</span>
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
          {/* Responsive image size - width 40 on md+, 32 on small */}
          <img
            src={profile}
            alt="Shoukat"
            className="w-40 h-40 md:w-60 md:h-60 rounded-full border-4 border-[#6366F1] shadow-lg object-cover"
          />

          <p className="text-base md:text-lg text-gray-700 max-w-xl text-center md:text-left">
            I’m Shoukat, a passionate <span className="text-[#6366F1] font-semibold">MERN Stack Developer</span> focused on building modern, scalable, and user-friendly applications.
          </p>
        </div>

        {/* Personal Info & Education in a responsive grid */}
        <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-[#6366F1] mb-6">Personal Info</h2>
            <div className="grid gap-4">
              {personalDetails.map((detail, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-[#E0E7FF] p-4 rounded-lg shadow"
                >
                  <span className="text-2xl sm:text-3xl">{detail.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-800">{detail.label}</p>
                    <p className="text-gray-600">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#6366F1] mb-6">Education</h2>
            <div className="relative border-l-4 border-[#6366F1] pl-6 space-y-10">
              {education.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-8 bg-white p-2 rounded-full shadow border">{item.icon}</div>
                  <h3 className="text-xl font-bold text-[#6366F1]">
                    {item.year} - {item.degree}
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-800">{item.institution}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="mt-16 max-w-6xl mx-auto px-4 items-center">
          <h2 className="text-3xl font-semibold text-center mb-10">Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achieve, i) => (
              <div
                key={i}
                className="bg-[#E0E7FF] p-6 rounded-lg text-center items-center shadow hover:shadow-lg transition"
              >
                <div className="text-3xl mb-2">{achieve.icon}</div>
                <p className="font-medium">{achieve.title}</p>
              </div>
            ))}
          </div>
        </div>

      </section>
      <Footer />
    </>
  );
};

export default About;
