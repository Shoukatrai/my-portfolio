import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, description, image, link, tech }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">

          
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
            />

            
            <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-4">{description}</p>

                
                <div className="flex flex-wrap gap-2 mb-4">
                    {tech?.map((item, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-[#E0E7FF] text-[#3730A3] rounded-full text-xs font-medium"
                        >
                            {item}
                        </span>
                    ))}
                </div>

              
                <Link
                    to={link}
                    className="inline-block px-4 py-2 bg-[#6366F1] text-white text-sm rounded-lg shadow hover:bg-[#4F46E5]"
                >
                    View Details →
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
