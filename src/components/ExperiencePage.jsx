import React from "react";
import { BsBriefcaseFill } from "react-icons/bs";
import { BiSolidGraduation } from "react-icons/bi";

const ExperiencePage = () => {
  return (
    <div className="mx-auto mt-20">
      <h1 className="font-secondary text-accent uppercase font-bold text-[35px] mb-0 text-center">
        Experience & Education
      </h1>

      <div className="flex flex-col lg:flex-row px-10">
        {/* Experience */}
        <div class="lg:px-10 flex-1">
          <div class="divide-x divide-current relative mt-20">
            <div className="absolute top-[-6px] left-[-20px] rounded-full w-10 h-10 bg-accent z-10 flex justify-center items-center ">
              <div className="z-20 font-extrabold">
                <BsBriefcaseFill />
              </div>
            </div>
            <div className="pl-10 w-full">
              <h4 className="bg-[#dddddd21] rounded-[20px] inline-block px-[10px] mb-[12px]">
                2020 - Present
              </h4>
              <h3 className="font-bold">Web Developer/Designer - Freelance</h3>
              <p>Creating and maintaining responsive websites and apps.</p>
            </div>
          </div>

          <div class="divide-x divide-current relative mt-20">
            <div className="absolute top-[-6px] left-[-20px] rounded-full w-10 h-10 bg-accent z-10 flex justify-center items-center ">
              <div className="z-20 font-extrabold">
                <BsBriefcaseFill />
              </div>
            </div>
            <div className="pl-10 w-full">
              <h4 className="bg-[#dddddd21] rounded-[20px] inline-block px-[10px] mb-[12px]">
                2020 - Present
              </h4>
              <h3 className="font-bold">Coding Instructor</h3>
              <p>
                Teaching kids and teens how to code in scratch and python.
                Instroducing them to the technology world.
              </p>
            </div>
          </div>

          <div class="divide-x divide-current relative mt-20">
            <div className="absolute top-[-6px] left-[-20px] rounded-full w-10 h-10 bg-accent z-10 flex justify-center items-center ">
              <div className="z-20 font-extrabold">
                <BsBriefcaseFill />
              </div>
            </div>
            <div className="pl-10 w-full">
              <h4 className="bg-[#dddddd21] rounded-[20px] inline-block px-[10px] mb-[12px]">
                2019 - Present
              </h4>
              <h3 className="font-bold">Graphic Designer - Freelance</h3>
              <p>
                Creating graphics like logos, mockups for print and digital.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div class="lg:px-10 flex-1">
          <div class="divide-x divide-current relative mt-20">
            <div className="absolute top-[-6px] left-[-20px] rounded-full w-10 h-10 bg-accent z-10 flex justify-center items-center ">
              <div className="z-20 font-extrabold">
                <BiSolidGraduation />
              </div>
            </div>
            <div className="pl-10 w-full">
              <h4 className="bg-[#dddddd21] rounded-[20px] inline-block px-[10px] mb-[12px]">
                2018 - Present
              </h4>
              <h3 className="font-bold">Online Resources </h3>
              <p>
                Leveraging on Online Resources like Udemy, Coursera and Youtube.
              </p>
            </div>
          </div>

          <div class="divide-x divide-current relative mt-20">
            <div className="absolute top-[-6px] left-[-20px] rounded-full w-10 h-10 bg-accent z-10 flex justify-center items-center ">
              <div className="z-20 font-extrabold">
                <BiSolidGraduation />
              </div>
            </div>
            <div className="pl-10 w-full">
              <h4 className="bg-[#dddddd21] rounded-[20px] inline-block px-[10px] mb-[12px]">
                2018 - 2023
              </h4>
              <h3 className="font-bold">Bachelor Degree - Computer Science</h3>
              <p>
                Bachelor of Science in Computer Science at the National Open
                University of University, Nigeria.
              </p>
            </div>
          </div>

          <div class="divide-x divide-current relative mt-20">
            <div className="absolute top-[-6px] left-[-20px] rounded-full w-10 h-10 bg-accent z-10 flex justify-center items-center ">
              <div className="z-20 font-extrabold">
                <BiSolidGraduation />
              </div>
            </div>
            <div className="pl-10 w-full">
              <h4 className="bg-[#dddddd21] rounded-[20px] inline-block px-[10px] mb-[12px]">
                2009 - 2015
              </h4>
              <h3 className="font-bold">High School Certificate</h3>
              <p>Adikpo Comprehensive College, Benue State, Nigeria.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;

// eslint-disable-next-line no-lone-blocks
{
  /* <div class="elementor-widget-container">
			
      <div class="resume-box">
        <ul>
            <li>
              <div class="icon"><i class="fas fa-briefcase"></i></div>
              <span class="time open-sans-font text-uppercase">2018 - Present </span>
              <h5 class="poppins-font text-uppercase"> Web Developer <span class="place open-sans-font">Envato </span></h5>
              <p class="open-sans-font">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore</p>
            </li>
        </ul>
      </div>		</div> */
}
