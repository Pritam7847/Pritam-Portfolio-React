import React, { useEffect, useRef } from 'react';
import TechStack from './TechStack';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

function Skill() {
  const barsRef = useRef([]);

  useEffect(() => {
    barsRef.current.forEach((bar) => {
      if (!bar) return; // prevent null errors
      gsap.fromTo(
        bar,
        { width: '0%' },
        {
          width: bar.dataset.percent,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 85%',
          },
        }
      );
    });
  }, []);

  const frontendSkills = [
    { name: 'React', percent: '95%', color: 'from-pink-500 to-cyan-400' },
    { name: 'Tailwind CSS/BootStrap', percent: '90%', color: 'from-pink-500 to-cyan-400' },
    { name: 'JavaScript', percent: '98%', color: 'from-pink-500 to-cyan-400' },
    { name: 'HTML/CSS', percent: '99%', color: 'from-pink-500 to-cyan-400' },
  ];

  const backendSkills = [
    { name: 'Node.js', percent: '92%', color: 'from-cyan-400 to-yellow-400' },
    { name: 'Express', percent: '90%', color: 'from-cyan-400 to-yellow-400' },
  ];

  const databaseSkills = [
    { name: 'MongoDB', percent: '88%', color: 'from-green-400 to-blue-400' },
  ];

  const renderSkillCard = (title, icon, skills) => (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      {skills.map((skill, i) => (
        <div key={i} className="mb-6">
          <div className="flex justify-between text-sm mb-1">
            <span>{skill.name}</span>
            <span>{skill.percent}</span>
          </div>
          <div className="w-full bg-gray-700/40 rounded-full h-2">
            <div
              ref={(el) => (barsRef.current[i + title.length * 10] = el)}
              data-percent={skill.percent}
              className={`bg-gradient-to-r ${skill.color} h-2 rounded-full`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );

  // reset refs before rendering to avoid duplicates
  barsRef.current = [];

  return (
    <>
      <TechStack />

      <div className="text-center justify-center items-center">
        <h1 className="text-5xl">Technical Skills</h1>
        <br />
        <p className="text-xl">Technologies I work With</p>
      </div>
      <section className="py-16 px-6 text-white" id="skills">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {renderSkillCard('Frontend', <FaCode className="text-pink-400 text-2xl" />, frontendSkills)}
          {renderSkillCard('Backend', <FaServer className="text-cyan-400 text-2xl" />, backendSkills)}
          {renderSkillCard('Database', <FaDatabase className="text-green-400 text-2xl" />, databaseSkills)}
        </div>
      </section>
    </>
  );
}

export default Skill;
