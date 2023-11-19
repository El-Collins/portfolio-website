import { HiMail } from "react-icons/hi";
import { FaPhoneSquare, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaInstagram, FaFacebook  } from "react-icons/fa6";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="h-[1440px]" id="contact">
      
      <div className="container lg:mx-auto max-sm:px-6">

        {/* heading */}
        <div className="relative mt-20 lg:text-center">
          <h1 className="uppercase font-black font-primary text-[28px] lg:text-[60px] max-sm:bg-[#8b8b8b21] max-md:bg-none max-lg:bg-none py-4 px-4 mb-5">
            Get in <span className="text-accent">touch</span>
          </h1>
          <div className="font-primary absolute text-[80px] lg:text-[100px] lg:top-[15px] lg:left-[190px] text-[#ffffff14] uppercase font-black">
          <span className="hidden lg:tracking-widest lg:block">Contact </span>
            </div>
        </div>
        
        {/* content container */}
        <div className="font-primary flex-col lg:flex lg:flex-row gap-x-5">
          {/* text */}
          <div className="lg:w-[60%]">
            <h2 className="uppercase font-bold my-3 text-[20px]">
              Don't be shy!
            </h2>
            <p className="text-[18px]">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
            <div className="flex gap-x-5 mt-5">
             <div> <HiMail className="text-[45px] text-accent" /> </div>
              <div>
                <span className="block">MAIL ME</span>
                <a
                  className="font-bold text-[18px]"
                  href="mailto:elcollinz@gmail.com"
                >
                  elcollinz@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-x-5 mt-5">
              <div><FaPhoneSquare className="text-[41px] text-accent" /> </div>
              <div>
                <span className="block">CALL ME</span>
                <a className=" font-normal text-[16px] lg:text-[18px]" href="tel:+2348108719984">
                  +234 810 871 9984
                </a>
              </div>
            </div>
            <div className="flex text-[20px] gap-x-6 my-5">
              <a
                href="https://github.com/el-collins"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/collins-kelechi-52078a138/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://twitter.com/el_collins1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
               <a
                href="https://www.instagram.com/elcollinscharles/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://m.facebook.com/elcollinscharles"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
          {/* form */}
{/*           <div className="max-sm:mt-20">
          <ContactForm />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
