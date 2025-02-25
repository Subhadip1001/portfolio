import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <div>
        <a
          href="mailto:subhadipmandal98833@gmail.com"
          className="fixed right-3 bottom-5 bg-red-400 p-3 rounded-full shadow-lg md:flex md:h-20 md:w-20 md:items-center md:justify-center"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
            alt="Gmail"
            className="w-8 h-8 md:h-10 md:w-10 2xl:h-12 2xl:w-12"
          />
        </a>
      </div>
      {/* Resume */}
      <div>
        <a
          href="https://drive.google.com/file/d/1FG5DyOCj4sJo15OCENtGq55JiT7E8zLQ/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed right-3 bottom-20 md:bottom-32 bg-blue-400 p-3 rounded-full shadow-lg md:flex md:h-20 md:w-20 md:items-center md:justify-center"
        >
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/general-icon-library/resume-7.png"
            alt="Resume"
            className="w-8 h-8 md:h-10 md:w-10 2xl:h-12 2xl:w-12"
          />
        </a>
      </div>
    </>
  );
};

export default Footer;
