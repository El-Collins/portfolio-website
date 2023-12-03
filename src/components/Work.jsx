import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from '../assets/projectdata'


const Work = () => {
  return (
    <section className="h-[4000px]" id="work">
      <div className="container mx-auto ">

       {/* heading */}
        <div className="relative mt-20 lg:text-center">
          <h1 className="uppercase font-black font-primary text-[28px] lg:text-[60px] max-sm:bg-[#8b8b8b21] max-md:bg-none max-lg:bg-none py-4 px-4 mb-5">
            My <span className="text-accent">Portfolio</span>
          </h1>
          <div className="font-primary absolute text-[80px] lg:text-[100px] lg:top-[15px] lg:left-[190px] text-[#ffffff14] uppercase font-black">
          <span className="hidden lg:tracking-widest lg:block">Work </span>
            </div>
        </div>



        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            icon={ProjectCard.icon}
            code={project.code}
            code={project.view}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
