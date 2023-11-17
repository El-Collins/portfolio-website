import { Link } from "react-router-dom";
import React from "react";

// images
// import Image from "../assets/profile-pic.jpg";
//icons
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
import { FaArrowRight } from "react-icons/fa6";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  return (
    <section className=" flex items-center h-[110vh]" id="home">
      {/* <Header/> */}

      <div className="container mx-auto font-primary">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-10 ">
          {/* text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h3
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="uppercase text-[30px]"
            >
              HELLO, I’m
            </motion.h3>
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-accent leading-[1.2] font-extrabold uppercase text-[35px] lg:text-[45px] block "
            >
              collins charles
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 mt-2 font-bold text-[30px] lg:text-[35px] leading-[1]"
            >
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer",
                  2000,
                  "Front-end Developer",
                  2000,
                  "Back-end Developer",
                  2000,
                ]}
                speed={50}
                className=""
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              🚀 Full Stack Developer | Crafting Digital Experiences <br />
              🌐 Turning ideas into reality through code and designs. Passionate
              about front-end and back-end development and designs.
            </motion.p>
            <button
              to="/About"
              class="btn cursor-pointer w-[260px] relative text-left py-[16px] px-[35px]"
            >
            <Link to="/About">

              <span className="text-white">More About Me</span>{" "}
              <span className="absolute z-10 rounded-full bg-[#dddddd21] w-[64px] h-[64px] right-[0px] top-0 flex justify-center items-center">
                {" "}
                <FaArrowRight />
              </span>
            </Link>

            </button>

            {/* social media */}
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 my-10">
              <a
                href="https://github.com/el-collins"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/collins-charles-52078a138/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className="hidden flex-1 lg:flex lg:flex-1 max-w-[420px] lg:max-w-482px mx-auto hero-img"
          >
            {/* <img src={Image} alt="" /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// max-w-[620px] lg:max-w-482px
export default Banner;
