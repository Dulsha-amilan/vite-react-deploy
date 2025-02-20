import React from "react";
import stalion from '../assets/stalion.png';
import ICT from '../assets/ICTA.png';

const experiences = [
  {
    role: "Trainee Software Engineer at Stalione Lanka",
    company: "Stalione Lanka Pvt. Ltd.",
    duration: "July 2024 – December 2024",
    description:
      "I am a Full Stack Developer at Stalione Group, where I have worked on Pasofin 2.0, a cloud-based financial accounting system, enhancing its usability and functionality. Additionally, I contributed to the development of HIPPOS, a billing and inventory management system with integrated POS functionality, optimizing business operations for clients.",
    skills: ["ReactJS", "NodeJS", "Express Js", "SQL", "CSS", "Material UI", "JavaScript", "AWS"],
    logo: stalion,
  },
  {
    role: "Software Engineer Intern at ICTA",
    company: "Information and Communication Technology Agency of Sri Lanka",
    duration: "Aug 2023 – Oct 2023",
    description:
      "During my internship at the Information and Communication Technology Agency of Sri Lanka (ICTA) from 2023 to 2024, I contributed to the development of the Sri Lanka e-Participation Portal and the Sri Lanka Lighting Digital Portal. Using technologies such as React JS, Node JS, Laravel, and MySQL, I focused on enhancing user engagement and building admin panels to manage platform functionalities. These experiences allowed me to gain valuable skills in full-stack development and project management.",
    skills: ["ReactJS", "NodeJS", "Express Js", "SQL", "CSS", "Material UI", "JavaScript", "AWS"],
    logo: ICT,
  },
];

const Experience = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 inline-block bg-clip-text text-transparent">Experience</h2>
        <div className="relative border-l-4 border-gray-600">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-10 ml-8 group"
            >
              <div className="absolute w-12 h-12 bg-gray-700 rounded-full -left-6 flex items-center justify-center shadow-md">
                <img src={exp.logo} alt={`${exp.company} logo`} className="w-10 h-10 rounded-full" />
              </div>
              <div
                className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-blue-500"
              >
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-gray-900">
                  {exp.role}
                </h3>
                <p className="text-lg text-gray-400 mb-4 group-hover:text-gray-200">
                  {exp.company} | {exp.duration}
                </p>
                <p className="text-gray-300 group-hover:text-gray-100 mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-sm bg-gray-700 text-gray-300 py-1 px-3 rounded-full group-hover:bg-gray-900 group-hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;