import React from "react";
import { FaGithub, FaLinkedin, FaGlobeAsia } from "react-icons/fa";
import me from "../assets/me.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-6 py-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Side */}
        <div className="flex flex-col items-center">
          <img
            src={me}
            alt="Pritam Anand"
            className="w-48 h-48 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
          />

          <div className="flex items-center gap-2 mt-4 text-gray-300">
            <FaGlobeAsia />
            <span>Patna, Bihar</span>
          </div>

          <div className="flex gap-3 mt-4">
            <button className="px-4 py-1 rounded-full border border-gray-500 hover:border-indigo-500 transition">
              English
            </button>

            <button className="px-4 py-1 rounded-full border border-gray-500 hover:border-indigo-500 transition">
              Hindi
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold">Pritam Anand</h1>

          <h2 className="text-lg text-gray-400 mt-2">
            Full Stack Developer
          </h2>

          {/* Social Links */}
          <div className="flex gap-5 text-2xl mt-5">
            <a
              href="https://github.com/Pritam7847"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/pritam-anand-"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Bio */}
          <p className="mt-6 text-gray-300 leading-8">
            I'm a passionate developer with a knack for building
            responsive and user-friendly web applications using the MERN Stack.
            I enjoy transforming ideas into scalable and impactful digital
            products while continuously learning modern technologies.
          </p>

          {/* Education */}
          <div className="mt-16">
            <u><h3 className="text-2xl font-bold mb-6">Education</h3></u>

            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:justify-between gap-2">
                <div>
                  <h4 className="font-semibold">
                    DAV Public School, Anishabad, Patna
                  </h4>
                  <p className="text-indigo-400">Nursery – Grade 7</p>
                </div>

                <span className="text-gray-400">—</span>
              </div>

              <div className="flex flex-col md:flex-row md:justify-between gap-2">
                <div>
                  <h4 className="font-semibold">
                    DAV Public School, WALMI Complex, Patna
                  </h4>
                  <p className="text-indigo-400">
                    Grade 8 – Grade 10 | CBSE Board
                  </p>
                </div>

                <span className="text-gray-400">
                  Completed in 2020
                </span>
              </div>

              <div className="flex flex-col md:flex-row md:justify-between gap-2">
                <div>
                  <h4 className="font-semibold">
                    Park Mount Public School, Patna
                  </h4>
                  <p className="text-indigo-400">
                    Grade 11 – Grade 12 | CBSE Board
                  </p>
                </div>

                <span className="text-gray-400">
                  Completed in 2022
                </span>
              </div>

              <div className="flex flex-col md:flex-row md:justify-between gap-2">
                <div>
                  <h4 className="font-semibold">
                    Trident Academy of Technology, Bhubaneswar
                  </h4>
                  <p className="text-indigo-400">
                    B.Tech in Computer Science & Engineering
                  </p>
                </div>

                <span className="text-gray-400">
                  2022 – 2026
                </span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mt-16">
            <u><h3 className="text-2xl font-bold mb-6">Experience</h3></u>

            <div className="flex flex-col md:flex-row md:justify-between gap-2">
              <div>
                <h4 className="font-semibold">
                  CodeTech IT Solutions
                </h4>

                <p className="text-indigo-400">
                  Web Developer Intern
                </p>
              </div>

              <span className="text-gray-400">
                June 2024 – July 2024
              </span>
            </div>
            <br />
            <div className="flex flex-col md:flex-row md:justify-between gap-2">
              <div>
                <h4 className="font-semibold">
                  Myra's Global Tech
                </h4>

                <p className="text-indigo-400">
                  Web Developer Intern
                </p>
              </div>

              <span className="text-gray-400">
                July 2026 – Present
              </span>
            </div>

          </div>

          {/* Skills
          <div className="mt-16">
            <u><h3 className="text-2xl font-bold mb-6">Skills</h3></u>

            <div className="flex flex-wrap gap-3">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Tailwind CSS",
                "Git",
                "GitHub",
                "Python",
                "FastAPI"
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-indigo-600/20 border border-indigo-500 text-indigo-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;