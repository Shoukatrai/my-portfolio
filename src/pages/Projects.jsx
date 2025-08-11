import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Footer } from "../components";
import saylaniPapaImage from "../assets/saylani papa.png";
import quizapp from "../assets/saylani papa.png";
import ecommerce from "../assets/ecommerce.png";
const projectsData = [
  {
    title: "Food Delievery App",
    description:
      "Built a scalable food delivery platform using React.js and Node.js, enabling smooth user experiences with real-time order tracking. Leveraged Material-UI for a polished UI, MongoDB for data persistence, and Cloudinary for efficient media management.",
    image: saylaniPapaImage,
    live: "https://saylani-papa.netlify.app/",
    github: "https://github.com/Shoukatrai/saylani-papa-frontend",
  },
  {
    title: "Quiz App With Firebase",
    description:
      "Developed an interactive quiz application using JavaScript, HTML, and CSS, with Firebase powering real-time database storage and user authentication.",
    image: quizapp,
    live: "https://quiz-quest-brown.vercel.app/",
    github: "https://github.com/Shoukatrai/quiz-app-with-firebase",
  },
  {
    title: "Ecommerce Plant Shopping",
    description:
      "Developed a responsive e-commerce web app for plant shopping using React.js and CSS. Features include dynamic product listings, category filtering, and a modern, mobile-friendly interface designed to enhance the online shopping experience.",
    image: ecommerce,
    live: "https://shoukatrai.github.io/e-plantShopping/",
    github: "https://github.com/Shoukatrai/e-plantShopping",
  },

];

export default function Projects() {
  return (
    <>
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-gray-800 mb-12"
          >
            My <span className="text-[#6366F1]">Projects</span>
          </motion.h2>

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
