'use client';

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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
