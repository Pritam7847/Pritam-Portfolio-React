import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiMongodb } from "react-icons/si";
import code from "../assets/code.png";

gsap.registerPlugin(ScrollTrigger);

export default function TechStack() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // use gsap.context for proper scoping + auto cleanup (helps with React StrictMode)
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          // markers: true, // <-- enable while debugging to see trigger positions
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        immediateRender: false, // important so element isn't hidden immediately
      });
    }, sectionRef);

    return () => ctx.revert(); // cleanup animations & ScrollTrigger
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col md:flex-row items-center justify-center gap-12 py-16 px-6"
    >
      {/* Left side - Illustration or Image */}
      <div className="w-full md:w-1/2">
        <img
          src={code}
          alt="Coding illustration"
          className="w-full max-w-sm mx-auto rounded-xl shadow-lg"
        />
      </div>

      {/* Right side - Tech Stack */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold mb-4">What I do</h2>
        <p className="text-lg text-gray-400 mb-6">
          MERN STACK DEVELOPER WHO LOVES TO BUILD AND EXPLORE MODERN TECH STACKS
        </p>

        <div className="flex flex-wrap gap-6 text-4xl text-white-300">
          <FaHtml5
            title="HTML5"
            className="hover:text-orange-500 transition duration-300"
          />
          <FaCss3Alt
            title="CSS3"
            className="hover:text-blue-600 transition duration-300"
          />
          <FaJs
            title="JavaScript"
            className="hover:text-yellow-500 transition duration-300"
          />
          <FaReact
            title="React.js"
            className="hover:text-cyan-400 transition duration-300"
          />
          <FaNodeJs
            title="Node.js"
            className="hover:text-green-600 transition duration-300"
          />
          <SiExpress
            title="Express.js"
            className="hover:text-red-500 transition duration-300"
          />
          <SiTailwindcss
            title="Tailwind CSS"
            className="hover:text-sky-400 transition duration-300"
          />
          <FaBootstrap
            title="Bootstrap"
            className="hover:text-purple-600 transition duration-300"
          />
          <SiMongodb
            title="MongoDB"
            className="hover:text-green-700 transition duration-300"
          />
        </div>

        <ul className="mt-8 space-y-4 text-gray-400 text-base">
          <li>⚡ Build interactive frontends with React & Tailwind</li>
          <li>⚡ Develop APIs with Node.js & Express.js</li>
          <li>⚡ Integrate MongoDB for backend data handling</li>
        </ul>
      </div>
    </div>
  );
}
