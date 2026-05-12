import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: '1',
    name: 'E-Commerce Platform',
    image: '/project1.png', // Replace with your project screenshot
    tags: ['Next.js', 'Tailwind', 'MongoDB'],
    description: 'A full-stack e-commerce solution with payment integration.',
  },
  {
    id: '2',
    name: 'Real Estate App',
    image: '/project2.png',
    tags: ['React', 'Firebase', 'Tailwind'],
    description: 'Property listing platform with real-time search and filtering.',
  },
  {
    id: '3',
    name: 'Social Media Dashboard',
    image: '/project3.png',
    tags: ['React', 'Chart.js', 'Node.js'],
    description: 'Advanced analytics dashboard for social media tracking.',
  },
];

const ProjectsPage = () => {
  return (
    <section id="projects" className="py-24 bg-[#05051a] text-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#0a0a2e] border border-blue-900/30 rounded-3xl overflow-hidden hover:border-blue-500 transition-all duration-500 shadow-xl"
            >
              {/* Project Image Area */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  fill
                  alt={project.name}
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors"></div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] bg-blue-900/50 text-blue-400 px-3 py-1 rounded-full border border-blue-800/50 uppercase font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>

                <p className="text-gray-400 text-sm mb-6 line-clamp-2">{project.description}</p>

                {/* Requirements: View More Button */}
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center justify-center w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
