import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaGithub,
  FaFigma,
} from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiMysql, SiTailwindcss, SiPostman } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML', category: 'Frontend', icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: 'CSS', category: 'Frontend', icon: <FaCss3Alt className="text-[#1572B6]" /> },
      { name: 'JavaScript', category: 'Frontend', icon: <FaJs className="text-[#F7DF1E]" /> },
      { name: 'React JS', category: 'Frontend', icon: <FaReact className="text-[#61DAFB]" /> },
      { name: 'Next.js', category: 'Frontend', icon: <SiNextdotjs className="text-white" /> },
      {
        name: 'Tailwind CSS',
        category: 'Frontend',
        icon: <SiTailwindcss className="text-[#38BDF8]" />,
      },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Node JS', category: 'Backend', icon: <FaNodeJs className="text-[#339933]" /> },
      { name: 'Laravel', category: 'Backend', icon: <FaLaravel className="text-[#FF2D20]" /> },
      { name: 'MongoDB', category: 'Database', icon: <SiMongodb className="text-[#47A248]" /> },
      { name: 'MySQL', category: 'Database', icon: <SiMysql className="text-[#4479A1]" /> },
    ],
  },
  {
    title: 'Tools & Professional',
    skills: [
      { name: 'GitHub', category: 'Tools', icon: <FaGithub className="text-white" /> },
      { name: 'Figma', category: 'Design', icon: <FaFigma className="text-[#F24E1E]" /> },
      { name: 'Postman', category: 'Testing', icon: <SiPostman className="text-[#FF6C37]" /> },
    ],
  },
];

const SkillsPage = () => {
  return (
    <section className="  text-white py-4">
      <div className="container mx-auto px-4 max-w-4xl">
        {' '}
        {/* কন্টেইনার সাইজ কিছুটা কমানো হয়েছে ৩ কলামের জন্য */}
        {/* Main Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 tracking-tight text-blue-800 dark:text-white">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        {/* Categories Loop */}
        <div className="space-y-12">
          {skillCategories.map((cat, index) => (
            <div key={index}>
              {/* Category Sub-heading */}
              <h3 className="text-base font-bold mb-6 flex items-center gap-2 tracking-tight text-blue-800 dark:text-white uppercase ">
                <span></span> {cat.title}
              </h3>

              {/* 3 Column Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {cat.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="dark:bg-[#0a0a2e] bg-[#ffffff] border border-blue-900/10 rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:shadow-2xl  group"
                  >
                    {/* Icon - Left side for compact look */}
                    <div className="text-3xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>

                    {/* Content - Right side */}
                    <div className="flex flex-col">
                      <h4 className="text-sm font-bold tracking-tight text-blue-800 dark:text-white">
                        {skill.name}
                      </h4>
                      <span className="text-[9px] font-bold text-blue-500/80 uppercase tracking-tighter mt-1">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
