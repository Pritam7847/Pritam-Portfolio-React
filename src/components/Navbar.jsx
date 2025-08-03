import React, { useEffect, useState } from 'react';
import {
  HomeIcon,
  UserIcon,
  Squares2X2Icon,
  DocumentTextIcon,
  BriefcaseIcon,
  SunIcon,
  TrophyIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'; // Ensure all icons are available here
import { Link } from 'react-router-dom';
import { FaRegSmile } from 'react-icons/fa';

function Navbar() {
  const navItems = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/skill">Skills</Link></li>
      <li><Link to="/project">Project</Link></li>
      <li><Link to="/achievement">Achievements</Link></li>
      <li><Link to="/hireme">Hire Me</Link></li>
      <li><Link to="/contact">Contact Me</Link></li>
    </>
  );

  const [currentTime, setCurrentTime] = useState('');

useEffect(() => {
  const updateTime = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    setCurrentTime(timeString);
  };

  updateTime(); // initialize
  const interval = setInterval(updateTime, 1000); // update every second

  return () => clearInterval(interval); // cleanup
}, []);


  return (
    <div className="relative z-50 w-full py-2">
      <div className="navbar flex items-center justify-between px-4">
        {/* Mobile View */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost bg-transparent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 bg-inherit"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#0f172a] text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navItems}
            </ul>
          </div>

          {/* Logo with Script Font */}
          <a className="btn btn-ghost text-xl normal-case flex items-center gap-1">
            <span className="text-gray-400 text-xl">&lt;</span>
            <span className="text-white text-2xl" style={{ fontFamily: 'Great Vibes, cursive' }}>
              Pritam Anand
            </span>
            <span className="text-gray-400 text-xl">/&gt;</span>
          </a>
        </div>
        

        {/* Desktop - Dynamic Island Navbar */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-1.5 bg-[#0f0f0f] text-white px-4 py-1.5 rounded-full shadow-lg border border-gray-700 backdrop-blur-md">

            {/* Home */}
            <Link to="/" className="flex items-center gap-1 bg-gray-800 px-2.5 py-1.5 rounded-full transition-transform duration-200 hover:scale-100 cursor-pointer">
              <HomeIcon className="w-4 h-4" />
            </Link>

            <div className="h-5 w-px bg-gray-600" />

            {/* About */}
            <Link to="/about" className="flex items-center gap-1.5 hover:text-primary cursor-pointer px-2 py-1.5 text-sm">
            <UserIcon className="w-4 h-4" />
              <span>About</span>
            </Link>



            {/* Skills */}
            <Link to= "/skill" className="flex items-center gap-1.5 hover:text-primary cursor-pointer px-2 py-1.5 text-sm">
              <Squares2X2Icon className="w-4 h-4" />
              <span>Skills</span>
            </Link>

            {/* Projects */}
            <Link to="/project" className="flex items-center gap-1.5 hover:text-primary cursor-pointer px-2 py-1.5 text-sm">
              <DocumentTextIcon className="w-4 h-4" />
              <span>Projects</span>
            </Link>

            {/* Achievements */}
            <Link to="/achievement" className="flex items-center gap-1.5 hover:text-primary cursor-pointer px-2 py-1.5 text-sm">
              <TrophyIcon className="w-4 h-4" />
              <span>Achievements</span>
            </Link>

            {/* Hire Me */}
                <Link to="/hireme" className="flex items-center gap-1.5 hover:text-primary cursor-pointer px-2 py-1.5 text-sm">
                  <BriefcaseIcon className="w-4 h-4" />
                  <span>Hire Me</span>
                </Link>

                {/* Contact Me */}
                <Link to="/contact" className="flex items-center gap-1.5 hover:text-primary cursor-pointer px-2 py-1.5 text-sm">
                  <EnvelopeIcon className="w-4 h-4" />
                  <span>Contact Me</span>
                </Link>


            <div className="h-5 w-px bg-gray-600" />

            {/* Smiley Toggle */}
            <div className="flex items-center gap-1 px-2 py-1.5 cursor-pointer hover:scale-105">
              <FaRegSmile className="w-4 h-4" />
            </div>

          </div>
        </div>
        <div className="hidden lg:flex items-center gap-3 absolute right-4 text-sm text-white">
          <span className="px-3 py-1  rounded-full">
    🕒      <b>{currentTime}</b>
          </span>
      </div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default Navbar;
