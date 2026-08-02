import React from "react";
import { TypeAnimation } from "react-type-animation";
import SocialLinks from "./SocialLinks";
import TechStack from "./TechStack";
import PRITAMANAND from "../assets/PRITAMANAND.pdf";

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
          style={{
            textShadow: "0 0 8px #facc15",
            fontFamily: '"Merienda", cursive',
          }}
        >
          <span>Pritam Anand</span>
        </h1>

        {/* <br className="hidden sm:block" /> */}

        {/* Current Role */}
        <div className="ml-8 mt-4 sm:ml-20 md:ml-40 lg:ml-44">
  <div className="group relative inline-flex items-center">
    {/* Subtle backdrop blur glow */}
    <div className="absolute -inset-px rounded-full bg-gradient-to-r from-emerald-500/20 via-sky-500/20 to-indigo-500/20 blur-sm transition-all duration-500 group-hover:blur-md" />
    
    {/* Main Badge */}
    <div className="relative inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 text-xs sm:text-sm font-medium text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-white/20">
      {/* Animated Ping Dot */}
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
      </span>

      <span>Web Development Intern</span>
      <span className="text-slate-400">@</span>
      <span className="font-semibold text-white tracking-wide">Myra's Global Tech</span>
    </div>
  </div>
</div>

        <div className="text-base mt-1 ml-8 sm:text-xl sm:ml-20 md:text-3xl md:ml-40 lg:ml-44 font-semibold h-12 flex items-center"></div>

        <div className="text-base ml-8 sm:text-xl sm:ml-20 md:text-3xl md:ml-40 lg:ml-44 font-semibold h-12 flex items-center">
          I’m a&nbsp;
          <TypeAnimation
            sequence={["Aspiring", 3000, "", "Software Developer", 3000, ""]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            speed={30}
          />
        </div>

        <br className="hidden sm:block" />

        <p className="text-base sm:text-lg ml-8 mr-4 md:text-xl sm:ml-20 md:ml-40 lg:ml-44 sm:mr-8">
          A B.Tech Graduate with a passion for Full Stack Web Development 🚀.
          Experienced in building dynamic web applications using JavaScript,
          React.js, Node.js, MongoDB, and other modern libraries and frameworks.
        </p>
      </div>

      <div className="w-full text-left ml-4 lg:ml-44">
        <a
          href={PRITAMANAND}
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
