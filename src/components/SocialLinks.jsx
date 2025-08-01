import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaGlobe,
} from 'react-icons/fa';
import me from '../assets/me.jpg';
import { HiOutlineMail } from 'react-icons/hi';

const socialLinks = [
  {
    icon: <FaGithub size={20} />,
    url: 'https://github.com/Pritam7847',
    label: 'GitHub',
  },
  {
    icon: <FaLinkedin size={20} />,
    url: 'https://www.linkedin.com/in/pritam-anand-',
    label: 'LinkedIn',
  },
  {
    icon: <FaInstagram size={20} />,
    url: 'https://instagram.com/_himanshu._.singh_',
    label: 'Instagram',
  },
  {
    icon: <FaFacebook size={20} />,
    url: 'https://www.facebook.com/profile.php?id=61560921667141&mibextid=ZbWKwL',
    label: 'Facebook',
  },
];

function SocialLinks() {
  return (
    <section id="contact" className=" text-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 px-10 py-16 max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h1 className="text-4xl font-bold">Reach Out to me!</h1>
          <p className="text-gray-400 text-lg">
            DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
          </p>

          <p className="text-gray-300">
            Open for opportunities: <span className="font-semibold text-red-500">Yes</span>
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 flex-wrap mt-4 justify-center md:justify-start">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                title={link.label}
                className="p-3 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
              >
                {link.icon}
              </a>
              
            ))}
            <p className='font-semibold'>Email Id: <span className='font-bold text-red-600'>himanshusingh7847@gmail.com</span></p>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 justify-center hidden md:flex">
          <img
            src={me}
            alt="Profile"
            className="w-64 h-64 object-cover rounded-full border-4 border-indigo-500 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default SocialLinks;
