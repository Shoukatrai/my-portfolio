import React from "react";
import ProjectCard from "./ProjectCard";

// Project data array
const projectsData = [
  {
    title: "MERN Task Manager",
    description: "A full-stack task management app with authentication, CRUD features, and a responsive UI.",
    image: "/assets/project1.png",
    link: "/projects/task-manager",
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "E-Commerce Store",
    description: "A modern e-commerce platform with payment integration, admin dashboard, and product search.",
    image: "/assets/project2.png",
    link: "/projects/ecommerce",
    tech: ["React", "Tailwind", "Node.js", "Stripe"],
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React, showcasing my projects and skills.",
    image: "/assets/project3.png",
    link: "/projects/portfolio",
    tech: ["React", "Tailwind CSS", "Netlify"],
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen  px-6 py-12">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-[#6366F1] text-center mb-10">
        Projects
      </h1>

      {/* Responsive Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            tech={project.tech}
          />
        ))}
      </div>
    </section>
  );
}
