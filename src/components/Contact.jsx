import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-[#EEF2FF] to-[#E0F7FA] flex flex-col items-center px-6 py-20"
    >

      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        Contact <span className="text-[#6366F1]">Me</span>
      </h1>


      <form
        action="#"
        method="POST"
        className="relative bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-8 w-full max-w-lg border border-transparent hover:border-[#6366F1] transition"
      >
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#6366F1] outline-none transition-all"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#6366F1] outline-none transition-all"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#6366F1] outline-none transition-all"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#6366F1] text-white py-3 rounded-lg font-medium hover:bg-[#4F46E5] transition-all shadow-md hover:shadow-lg"
        >
          Send Message
        </button>
      </form>


      <div className="flex gap-6 mt-12">
        {[
          {
            href: "https://github.com/Shoukatrai",
            icon: <FaGithub />,
            color: "text-gray-700 hover:text-black",
          },
          {
            href: "https://www.linkedin.com/in/shoukat-rai-750507245/",
            icon: <FaLinkedin />,
            color: "text-blue-600 hover:text-blue-800",
          },
          {
            href: "https://twitter.com/yourusername",
            icon: <FaTwitter />,
            color: "text-sky-500 hover:text-sky-700",
          },
          {
            href: "raishoukat033@gmail.com",
            icon: <FaEnvelope />,
            color: "text-red-500 hover:text-red-700",
          },
        ].map(({ href, icon, color }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noreferrer"
            className={`text-2xl ${color} transition-transform transform hover:scale-110`}
          >
            {icon}
          </a>
        ))}
      </div>
    </section>
  );
}
