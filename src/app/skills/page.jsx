'use client';

import React from 'react';
import { motion } from 'framer-motion';

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
      {
        name: 'HTML',
        category: 'Frontend',
        icon: <FaHtml5 className="text-[#E34F26]" />,
      },
      {
        name: 'CSS',
        category: 'Frontend',
        icon: <FaCss3Alt className="text-[#1572B6]" />,
      },
      {
        name: 'JavaScript',
        category: 'Frontend',
        icon: <FaJs className="text-[#F7DF1E]" />,
      },
      {
        name: 'React JS',
        category: 'Frontend',
        icon: <FaReact className="text-[#61DAFB]" />,
      },
      {
        name: 'Next.js',
        category: 'Frontend',
        icon: <SiNextdotjs className="dark:text-white text-black" />,
      },
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
      {
        name: 'Node JS',
        category: 'Backend',
        icon: <FaNodeJs className="text-[#339933]" />,
      },
      {
        name: 'Laravel',
        category: 'Backend',
        icon: <FaLaravel className="text-[#FF2D20]" />,
      },
      {
        name: 'MongoDB',
        category: 'Database',
        icon: <SiMongodb className="text-[#47A248]" />,
      },
      {
        name: 'MySQL',
        category: 'Database',
        icon: <SiMysql className="text-[#4479A1]" />,
      },
    ],
  },

  {
    title: 'Tools & Professional',
    skills: [
      {
        name: 'GitHub',
        category: 'Tools',
        icon: <FaGithub className="dark:text-white text-black" />,
      },
      {
        name: 'Figma',
        category: 'Design',
        icon: <FaFigma className="text-[#F24E1E]" />,
      },
      {
        name: 'Postman',
        category: 'Testing',
        icon: <SiPostman className="text-[#FF6C37]" />,
      },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const SkillsPage = () => {
  return (
    <section id="skills" className="relative py-14 overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-400/10 blur-[120px] rounded-full"></div>

      <div className="relative container mx-auto px-4 max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            Technical <span className="text-blue-500">Skills</span>
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>

          <p className="mt-5 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable and high-performance web
            applications.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-14">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{
                staggerChildren: 0.1,
              }}
            >
              {/* Category Title */}
              <motion.h3
                variants={fadeUp}
                className="text-xl font-bold mb-8 flex items-center gap-3 text-blue-600 dark:text-blue-400 uppercase tracking-wider"
              >
                <span className="w-8 h-[3px] bg-blue-500 rounded-full"></span>

                {cat.title}
              </motion.h3>

              {/* Skill Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    whileHover={{
                      y: -8,
                      scale: 1.03,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="group relative overflow-hidden rounded-3xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-6 shadow-lg hover:shadow-2xl"
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-blue-500/10 to-cyan-400/10"></div>

                    <div className="relative flex items-center gap-5">
                      {/* Icon */}
                      <div className="text-4xl shrink-0 transition-transform duration-300 group-hover:scale-125">
                        {skill.icon}
                      </div>

                      {/* Text */}
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                          {skill.name}
                        </h4>

                        <span className="text-xs font-semibold text-blue-500 uppercase tracking-widest">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Border */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-500"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
