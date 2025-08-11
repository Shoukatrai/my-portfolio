// src/components/Skills.jsx
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
const skillsData = [
  {
    category: "Frontend",
    icon: <FaReact className="text-[#61DBFB]" />,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: <FaNodeJs className="text-green-500" />,
    skills: ["Node.js", "Express.js", "REST API"],
  },
  {
    category: "Databases",
    icon: <FaDatabase className="text-yellow-500" />,
    skills: ["MongoDB", "Firebase", "Supabase"],
  },
  {
    category: "Tools",
    icon: <FaTools className="text-gray-700" />,
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

export default function Skills() {
  return (


    <section className="py-10 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          My <span className="text-[#6366F1]">Skills</span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {skillsData.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#E0E7FF] rounded-xl p-6 text-center shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3 flex justify-center">{group.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {group.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white text-[#3730A3] rounded-full text-sm font-medium shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

