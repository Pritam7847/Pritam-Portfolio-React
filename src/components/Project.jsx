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
  { title: "Password Game (React)", tech: "React + API", link: "https://password-game-self-ten.vercel.app/" },
  { title: "Chapters&Co (BookStore)", tech: "React, Tailwind CSS, Express, Mongo DB", link: "https://github.com/Pritam7847" },
  { title: "Portfolio Website", tech: "React + Tailwind CSS", link: "https://github.com/Pritam7847" },
];

function ProjectCard({ title, tech, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="shadow-md p-5 rounded-xl hover:shadow-xl transition-all duration-300 bg-white text-black hover:scale-105 block"
    >
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <p className="text-sm text-gray-500">{tech}</p>
    </a>
  );
}

export default function Project() {
  return (
    <section id="projects" className="py-16 px-4">
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
