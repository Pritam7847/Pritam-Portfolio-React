import React from "react";
import { TypeAnimation } from "react-type-animation";
import SocialLinks from "./SocialLinks";
import TechStack from "./TechStack";
import Pritam_Resume_ from "../assets/Pritam_Resume_.pdf";
import DecryptedText from "../reactBits/DecryptedText.jsx";

function Hero() {
  return (
    <>
      <div className="mt-10">
        <h2
          className="text-3xl ml-5 sm:ml-32"
          style={{ fontFamily: '"Pacifico", cursive' }}
        >
          Hello{" "}
          <span className="inline-block animate-wave origin-[70%_70%]">👋</span>{" "}
          I'm
        </h2>

        <br />

        <h1
          className="text-4xl ml-8 sm:text-6xl sm:ml-40 md:text-7xl md:ml-56 lg:text-8xl lg:ml-44 text-yellow-300"
          style={{ textShadow: "0 0 8px #facc15" }}
        >
          <DecryptedText
  text="Pritam Anand"
  animateOn="view"
  revealDirection="center"
/>
        </h1>

        <br className="hidden sm:block" />

        <div className="text-base ml-8 sm:text-xl sm:ml-20 md:text-3xl md:ml-40 lg:ml-44 font-semibold h-12 flex items-center">
          I’m a&nbsp;
          <TypeAnimation
            sequence={[
              "Student",
              3000,
              "",
              "Full Stack Web Developer (MERN)",
              3000,
              "",
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            speed={30}
          />
        </div>

        <br className="hidden sm:block" />

        <p className="text-base sm:text-lg ml-8 mr-4 md:text-xl sm:ml-20 md:ml-40 lg:ml-44 sm:mr-8">
          A final-year B.Tech student with a passion for Full Stack Web
          Development (MERN) 🚀. Experienced in building dynamic web
          applications using JavaScript, React.js, Node.js, MongoDB, and other
          modern libraries and frameworks.
        </p>
      </div>

      <div className="w-full text-left ml-4 lg:ml-44">
        <a
          href={Pritam_Resume_}
          download
          className="ml-5 sm:ml-0 mt-4 btn btn-sm sm:btn-md md:btn-lg hover:bg-blue-400 hover:text-black"
        >
          📄 Download Resume
        </a>
      </div>

      <div id="skills">
        <TechStack />
      </div>

      <div>
        <SocialLinks />
      </div>
    </>
  );
}

export default Hero;
