// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiTailwindcss, SiExpress , SiFirebase, 
  SiSupabase } from "react-icons/si";

const skillsData = [
  { name: "React", icon: <FaReact />, level: 100 },
  { name: "JavaScript (ES6+)", icon: <SiJavascript />, level: 95 },
  { name: "Node.js", icon: <FaNodeJs />, level: 90 },
  { name: "Express.js", icon: <SiExpress />, level: 84 },
  { name: "MongoDB", icon: <SiMongodb />, level: 88 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 86 },
  { name: "Git & GitHub", icon: <FaGitAlt />, level: 90 },
  { name: "Firebase", icon: <SiFirebase />, level: 90 },
  { name: "Supabase", icon: <SiSupabase />, level: 90 },
];

export default function Skills() {
  return (
    <section className="py-16 px-6 md:px-16 bg-white" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-semibold text-center text-gray-800 mb-10"
      >
        Skills & Technologies
      </motion.h2>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skillsData.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.12, duration: 0.45 }}
              whileHover={{ scale: 1.03 }}
              className="bg-[#E0E7FF] rounded-xl p-5 text-center shadow-sm hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="text-4xl text-[#6366F1]">{skill.icon}</div>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">{skill.name}</h3>

              {/* Progress bar */}
              <div className="w-full bg-white/60 rounded-full h-3 overflow-hidden border border-white/30">
                <div
                  className="h-3 bg-[#6366F1] rounded-full"
                  style={{ width: `${skill.level}%`, transition: "width 0.8s ease" }}
                />
              </div>

              <div className="mt-2 text-sm text-gray-700">{skill.level}%</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

