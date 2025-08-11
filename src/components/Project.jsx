import React from "react";

const basicProjects = [
  { title: "TO-DO List", tech: "JavaScript", link: "https://github.com/Pritam7847/CODTECH-Task1" },
  { title: "E-Commerce Website", tech: "HTML, CSS, JS", link: "https://github.com/Pritam7847/CODTECH-Task2" },
  { title: "Stone-Paper-Scissor Game", tech: "JavaScript", link: "https://github.com/Pritam7847/Stone-Paper-Scoissor-Game" },
  { title: "Login Page", tech: "HTML/CSS", link: "https://github.com/Pritam7847/LoginPage" },
  { title: "Year Calculator", tech: "JavaScript", link: "https://pritam7847.github.io/Year-Calculator/" },
  { title: "BG Changer React", tech: "React", link: "https://bg-changer-react-peach.vercel.app/" },
  { title: "Weather App", tech: "API + HTML, CSS, JS", link: "https://pritam7847.github.io/WeatherAPP/" },
  { title: "Attendance Calculator", tech: "JavaScript", link: "https://github.com/Pritam7847/Attendance-Calculator" },
  { title: "Portfolio Website", tech: "HTML, CSS, JS", link: "https://pritam7847.github.io/portfolio-websiteHTMLbased/" },
];

const advancedProjects = [
  { 
    title: "Password Game (React)", 
    tech: "React + API", 
    description: "A fun password challenge game inspired by the popular online version, with custom rules and live validation.", 
    link: "https://password-game-self-ten.vercel.app/" 
  },
  { 
    title: "Chapters&Co (BookStore)", 
    tech: "React, Tailwind CSS, Express, Mongo DB", 
    description: "An online bookstore platform where users can browse, search, and manage books seamlessly.", 
    link: "https://github.com/Pritam7847" 
  },
  { 
    title: "Portfolio Website", 
    tech: "React + Tailwind CSS", 
    description: "A personal portfolio showcasing my skills, projects, and experience with smooth animations.", 
    link: "https://github.com/Pritam7847" 
  },
  { 
    title: "ideaVault", 
    tech: "React + Tailwind CSS, Express, Mongo DB", 
    description: "A collaborative idea management tool allowing users to store, share, and refine ideas.", 
    link: "https://github.com/Pritam7847" 
  },
];

function ProjectCard({ title, tech, description, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:shadow-xl transition-all duration-300 bg-white/10 backdrop-blur-lg border border-white/20 text-white p-6 rounded-2xl shadow-lg hover:scale-105 block"
    >
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <p className="text-sm text-gray-200 mb-2">{tech}</p>
      <p className="text-xs text-gray-400">{description}</p>
    </a>
  );
}


export default function Project() {
  return (
    <section id="projects" className="py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">📁 Basic Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {basicProjects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

        <h1 className="text-3xl font-bold mb-6">🚀 Advanced Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {advancedProjects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
