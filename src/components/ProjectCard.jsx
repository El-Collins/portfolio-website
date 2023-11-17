import React from "react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";

const ProjectCard = ({ image, title, description, code, view }) => {
  // const proImage =
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      {/* project containers */}
      <div className="container mt-20">
        <div className="rounded-[1.7rem] bg-[#75757533] flex gap-x-[2rem] flex-col w-full h-[800px] justify-center p-5 shadow-md shadow-[#40404058] lg:flex-row lg:h-[25rem] lg:w-full">
          {/* image container */}
          <div className="w-full lg:w-[150rem] rounded-[1.7rem] overflow-hidden shadow-md shadow-[#9a9a9a70] lg:flex-1 ">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img
                className={`w-full h-auto ${
                  isHovered ? "hovered" : "unhovered"
                }`}
                src={image}
                alt=""
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </a>
          </div>

          {/* text container */}
          <div class="text-center font-primary pt-5 lg:flex-1">
            <h3 className="font-bold mb-2">{title}</h3>
            <p> {description} </p>
            <div class="flex justify-around mt-8 text-slate-400">
              <a
                className="flex gap-2 font-medium items-center hover:text-white cursor-pointer"
                href={code}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code <FaGithub />
              </a>
              <a
                className="flex gap-2 font-medium items-center hover:text-white cursor-pointer"
                href={view}
                target="_blank"
                rel="noopener noreferrer"
              >
                View <FaAngleDoubleRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
