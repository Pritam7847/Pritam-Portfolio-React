import React from 'react';
import Navbar from './Navbar'; // adjust the path if it's in a different folder
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobeAsia } from 'react-icons/fa';
import me from '../assets/me.jpg'; // Adjust path if needed

const About = () => {
  return (
    <>

      <section className="min-h-screen text-white p-8" id="about">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-6xl mx-auto">
          
          {/* Profile Image + Language Switch */}
          <div className="flex flex-col items-center gap-4">
            <img
              src={me}
              alt="Profile"
              className="w-48 h-48 object-cover rounded-full border-4 border-indigo-500 shadow-lg"
            />
            <div className="flex items-center gap-2 text-sm">
              <FaGlobeAsia />
              Patna , Bihar
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-1 border rounded-full text-sm">English</button>
              <button className="px-4 py-1 border rounded-full text-sm">Hindi</button>
            </div>
          </div>

          {/* Info Section */}
          <div className="flex-1 text-center md:text-left space-y-4">

            <h1 className="text-4xl font-bold">Pritam Anand</h1>
            <h2 className="text-lg text-gray-300">MERN Stack Developer</h2>

            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start gap-4 text-xl mt-2">
              <a href="https://github.com/Pritam7847" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://linkedin.com/in/pritam-anand-" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>

            {/* Bio */}
            <p className="text-gray-300">
              I'm a passionate developer from India with a knack for building responsive and user-friendly web apps using the MERN Stack. I love turning ideas into real, usable products.
            </p>

            {/* Education */}
            <div>
            <h3 className="text-2xl font-bold mt-16 mb-2">Education</h3>
            <div className="space-y-4 text-gray-200">

                <div className="flex justify-between">
                <div>
                    <strong>DAV Public School, Anishabad, Patna</strong>
                    <p className="text-indigo-400">Nursery – Grade 7</p>
                </div>
                <div className="text-sm text-gray-400">—</div>
                </div>

                <div className="flex justify-between">
                <div>
                    <strong>DAV Public School, WALMI Complex, Patna</strong>
                    <p className="text-indigo-400">Grade 8 – Grade 10 | CBSE Board</p>
                </div>
                <div className="text-sm text-gray-400">Completed in 2020</div>
                </div>

                <div className="flex justify-between">
                <div>
                    <strong>Park Mount Public School, Patna</strong>
                    <p className="text-indigo-400">Grade 11 – Grade 12 | CBSE Board</p>
                </div>
                <div className="text-sm text-gray-400">Completed in 2022</div>
                </div>

                <div className="flex justify-between">
                <div>
                    <strong>Trident Academy of Technology, Bhubaneswar</strong>
                    <p className="text-indigo-400">B.Tech in Computer Science</p>
                </div>
                <div className="text-sm text-gray-400">2022 – 2026</div>
                </div>

            </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;
