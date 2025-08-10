import React from "react";
import { FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import { SiFiverr, SiFreelancer, SiUpwork } from "react-icons/si";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#6366F1] via-[#06B6D4] to-[#6366F1] text-white py-10 shadow-inner border-t border-white/20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & Tagline */}
        <div>
          <div className="text-lg font-bold flex items-center gap-1 mb-4">
            <span className="text-[#FACC15]">&lt;</span>
            <span className="text-white">Shoukat</span>
            <span className="text-[#FACC15]">Dev</span>
            <span className="text-[#FACC15]">/&gt;</span>
          </div>
          <p className="text-sm text-gray-200">
            Crafting modern, scalable, and user-friendly web applications.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li className="flex items-center gap-2">
              <MdEmail className="text-[#FACC15]" /> your.email@example.com
            </li>
            <li className="flex items-center gap-2">
              <MdPhone className="text-[#FACC15]" /> +92 300 1234567
            </li>
            <li className="flex items-center gap-2">
              <MdLocationOn className="text-[#FACC15]" /> Karachi, Sindh, Pakistan
            </li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Find Me Online</h3>
          <div className="flex flex-wrap gap-4">
            {/* Social Links */}
            {[
              { href: "https://github.com/yourusername", icon: <FaGithub /> },
              { href: "https://linkedin.com/in/yourusername", icon: <FaLinkedin /> },
              { href: "https://twitter.com/yourusername", icon: <FaTwitter /> },
            ].map(({ href, icon }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#FACC15] transition-transform transform hover:scale-125"
              >
                <span className="text-2xl">{icon}</span>
              </a>
            ))}

            {/* Freelance Platforms */}
            {[
              { href: "https://www.fiverr.com/yourusername", icon: <SiFiverr className="text-2xl"/> },
              { href: "https://www.upwork.com/freelancers/yourusername", icon: <SiUpwork className="text-2xl"/> },
              { href: "https://www.freelancer.com/u/yourusername", icon: <SiFreelancer className="text-2xl"/> },
            ].map(({ href, icon }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#FACC15] transition-transform transform hover:scale-125"
              >
                <span className="text-2xl">{icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-white/20 pt-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} Shoukat Dev. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
