import React from "react";
import ProjectCard from "./ProjectCard";
import saylaniPapaImage from "../assets/saylani papa.png"
import quizApp from "../assets/quiz app.png"
import ecommerce from "../assets/ecommerce.png"

const projectsData = [
  {
    title: "Food Delievery App",
    description:
      "Built a scalable food delivery platform using React.js and Node.js, enabling smooth user experiences with real-time order tracking. Leveraged Material-UI for a polished UI, MongoDB for data persistence, and Cloudinary for efficient media management.",
    image: saylaniPapaImage,
    link: "https://saylani-papa.netlify.app/",
    tech: ["React js", "Node js", "MongoDb", "Cloudinary"],
  },
  {
    title: "Quiz App With Firebase",
    description:
      "Built an interactive quiz application using vanilla JavaScript, HTML, and CSS. Implemented Firebase Authentication for secure user login, Firebase Realtime Database for storing quiz data and scores, and Supabase Storage for managing media assets. Designed with a responsive layout to provide a seamless experience across devices.",
    image: quizApp,
    link: '/projects',
    tech: ["Javascript", "HTML", "CSS", "Firebase"],
  },
  {
    title: "Ecommerce Plant Shopping",
    description:
      "Developed a responsive e-commerce web app for plant shopping using React.js and CSS. Features include dynamic product listings, category filtering, and a modern, mobile-friendly interface designed to enhance the online shopping experience.",
    image: ecommerce,
    link: "https://shoukatrai.github.io/e-plantShopping/",
    tech: ["React js", "CSS"],
  },];



export default function Projects() {
  return (
    <section className="min-h-screen  px-6 py-12">

      <h1 className="text-3xl font-bold text-[#6366F1] text-center mb-10">
        Projects
      </h1>


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
