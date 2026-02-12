import React, { useEffect, useRef, useState } from "react";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.webp";
import p6 from "../assets/p6.jpg";
import p8 from "../assets/p8.jpg";
import iit from "../assets/iit.jpg";
import iiit from "../assets/iiit.jpg";
import hack from "../assets/hack.jpg";

const achievements = [
  {
    title: "IDE BOOTCAMP Edition1 Phase1 2024",
    details: [
      "Got Selected in IDE BOOTCAMP 2024.",
      "Represented my team & college at IIM Sambalpur.",
      "🏆 Won the #1 Social-Media Influencing Award.",
    ],
    glimpses: [p2, p6],
  },
  {
    title: "IDE BOOTCAMP Edition2 Phase2 2025",
    details: [
      "Got Selected in IDE BOOTCAMP 2025.",
      "Represented my team & college at Amity University Jharkhand.",
    ],
    glimpses: [p3, p8],
  },
  {
    title: "SIH 2024",
    details: ["Got selected in the Internal Hackathon."],
  },
  {
    title: "College-Level Events",
    details: ['🥉 Secured 3rd place in the "Truss-O-Bridge" event.'],
  },
  {
    title: "TechFest Visits & Participation",
    details: [
      "Visited IIT Bhubaneswar for TechFest events.",
      "Participated in E-Summit organized by IIIT Bhubaneswar.",
    ],
    glimpses: [iit, iiit],
  },
  {
    title: "Srusti TechHack 2.0, 2026",
    details: [
      "Participated in Srusti TechHack 2.0 at Srusti Academy of Management & Technology.",
      "🏆 Secured 1st Runner-Up position in the hackathon.",
    ],
    glimpses: [hack],
  },
];

const hobbies = [
  "💻 Coding",
  "🏍️ Riding",
  "🎥 Content Creation",
  "💡 Innovations",
  "✂️ Video Editing",
  "📖 Reading Books",
  "🌍 Traveling",
];

export default function Achievement() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 text-white"
      id="achievement"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          🎖️ Experience & Achievements
        </h1>

        <div className="space-y-10">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <h2 className="text-2xl font-semibold mb-3 text-purple-700">
                {item.title}
              </h2>

              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                {item.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {visible && item.glimpses && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    📸 Glimpses
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {item.glimpses.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`glimpse-${idx}-${i}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto rounded-lg shadow-sm"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h1 className="text-3xl font-bold mb-6 text-center">🎯 Hobbies</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-lg text-gray-800">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-300"
              >
                {hobby}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
