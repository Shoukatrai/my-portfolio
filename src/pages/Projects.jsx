import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Footer } from "../components";

const projectsData = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React, Tailwind CSS, and Framer Motion to showcase my work and skills.",
    image: "/projects/portfolio.png",
    live: "https://your-portfolio-link.com",
    github: "https://github.com/your-username/portfolio",
  },
  {
    title: "E-Commerce Store",
    description:
      "Full-featured MERN stack e-commerce app with authentication, cart, and payment integration.",
    image: "/projects/ecommerce.png",
    live: "https://your-ecommerce-link.com",
    github: "https://github.com/your-username/ecommerce",
  },
  {
    title: "Task Manager",
    description:
      "A task management web app with user authentication and CRUD functionality using MongoDB and Node.js.",
    image: "/projects/taskmanager.png",
    live: "https://your-taskmanager-link.com",
    github: "https://github.com/your-username/task-manager",
  },
  {
    title: "Blog Platform",
    description:
      "Multi-user blog platform built with React, Express, and MongoDB. Includes an admin panel and rich text editor.",
    image: "/projects/blog.png",
    live: "https://your-blog-link.com",
    github: "https://github.com/your-username/blog-platform",
  },
];

export default function Projects() {
  return (
    <>
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-gray-800 mb-12"
          >
            My <span className="text-[#6366F1]">Projects</span>
          </motion.h2>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden border border-gray-100 hover:border-[#6366F1]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#6366F1] text-white px-4 py-2 rounded-full text-sm hover:bg-[#4F46E5] transition"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-[#6366F1] text-[#6366F1] px-4 py-2 rounded-full text-sm hover:bg-[#6366F1] hover:text-white transition"
                    >
                      <FaGithub /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
