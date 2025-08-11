import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import { Footer } from "../components";

const Contact = () => {
  return (
    <>
      <section className="py-20 px-6 md:px-16 bg-[#F8FAFC]">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Contact <span className="text-[#6366F1]">Me</span>
        </h1>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
              <FaEnvelope className="text-[#6366F1] text-2xl" />
              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <p className="text-gray-600">raishoukat033@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
              <FaPhone className="text-[#06B6D4] text-2xl" />
              <div>
                <p className="font-semibold text-gray-800">Phone</p>
                <p className="text-gray-600">+92 347 3127706</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
              <FaMapMarkerAlt className="text-[#FACC15] text-2xl" />
              <div>
                <p className="font-semibold text-gray-800">Address</p>
                <p className="text-gray-600">Karachi, Sindh, Pakistan</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
              <FaGlobe className="text-[#6366F1] text-2xl" />
              <div>
                <p className="font-semibold text-gray-800">Freelance Platforms</p>
                <p className="text-gray-600">Fiverr, Upwork</p>
              </div>
            </div>
          </div>

     
          <form className="bg-white p-6 rounded-lg shadow space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]" />
            <textarea placeholder="Your Message" rows="5" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]"></textarea>
            <button type="submit" className="bg-gradient-to-r from-[#6366F1] to-[#06B6D4] text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
