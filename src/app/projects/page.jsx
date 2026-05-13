'use client';

<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/projects.json')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="min-h-screen bg-[#0a192f] flex items-center justify-center text-white font-mono">
        Loading Projects...
      </div>
    );

  return (
    <section id="projects" className="relative p-4 mt-20 border-blue-950/20 rounded-2xl  border overflow-hidden">

      <div className=" relative ">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className=" pb-7 text-5xl md:text-6xl font-black dark:text-white tracking-tighter text-black">
              My <span className="text-blue-500">Project</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative flex flex-col bg-[#112240] border border-blue-900/50 rounded-3xl overflow-hidden hover:border-blue-400/30 transition-all duration-500 shadow-2xl"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#112240] via-transparent to-transparent opacity-80"></div>
              </div>

              <div className="p-7 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-4">
                    {/* External Link-er jonno <a> tag best */}
                    <a
                      href={project.links?.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-100/30 hover:text-white transition-colors"
                      onClick={(e) => project.links?.github === '#' && e.preventDefault()}
                    >
                      <FaGithub size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-blue-100/60 text-sm leading-relaxed mb-8 line-clamp-2 font-medium">
                  {project.description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] text-blue-400 font-bold font-mono border border-blue-400/20 px-3 py-1 rounded-full bg-blue-400/5 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* External Link-er jonno <a> tag best */}
                  <a
                    href={project.links?.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-black text-white uppercase tracking-tighter group-hover:text-blue-400 transition-all cursor-pointer"
                    onClick={(e) => project.links?.live === '#' && e.preventDefault()}
                  >
                    Live <FaExternalLinkAlt size={10} />
                  </a>
                </div>
              </div>
=======
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

import { FaExternalLinkAlt, FaGithub, FaArrowRight } from 'react-icons/fa';

const projects = [
  {
    id: '1',
    name: 'E-Commerce Platform',
    image: '/man1.png',
    tags: ['Next.js', 'Tailwind', 'MongoDB'],
    description:
      'A premium full-stack e-commerce solution with payment integration and real-time inventory management.',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/yourusername/project',
  }
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  show: {
    opacity: 1,
    y: 0,
  },
};

const ProjectsPage = () => {
  return (
    <section id="projects" className="relative py-24 overflow-hidden rounded-2xl">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-400/5 blur-[120px] rounded-full"></div>

      <div className="container relative z-10  px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-5">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>

          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A collection of modern web applications and creative frontend experiences built using
            cutting-edge technologies.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-[35px] border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Gradient Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-blue-500/10 to-cyan-400/10"></div>

              {/* Image */}
              <div className="relative h-[260px] overflow-hidden">
                <Image
                  src={project.image}
                  fill
                  alt={project.name}
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Floating Tags */}
              </div>

              {/* Content */}
              <div className="relative p-7">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="backdrop-blur-xl dark:bg-white/10 bg-blue-300/30 border border-white/10 dark:text-white text-blue-700 text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-2 mb-2">
                  {/* GitHub */}
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="group/btn flex items-center justify-center gap-2 py-2 rounded-2xl bg-gray-100 dark:bg-white/10 hover:bg-black dark:hover:bg-white text-gray-800 dark:text-white hover:text-white dark:hover:text-black font-semibold transition-all duration-300"
                  >
                    <FaGithub className="text-lg group-hover/btn:rotate-12 transition-all duration-300" />
                    GitHub
                  </Link>

                  {/* Live Demo */}
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    className="group/btn flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:scale-[1.03] transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="text-sm group-hover/btn:translate-x-1 transition-all duration-300" />
                    Live Demo
                  </Link>
                </div>

                {/* Case Study */}
                <Link href={`/projects/${project.id}`}>
                  <motion.div
                    whileHover={{
                      x: 5,
                    }}
                    className="flex items-center justify-between rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-[#0f172a]/80 px-5 py-4 text-sm font-bold text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    <span>Explore Case Study</span>

                    <FaArrowRight />
                  </motion.div>
                </Link>
              </div>

              {/* Bottom Glow Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-700"></div>
>>>>>>> 1746febf66d487d1539015f97304546c50abba6a
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
