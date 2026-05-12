'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiNextdotjs, SiReact, SiLaravel, SiJavascript } from 'react-icons/si';

const ProfileCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-80 bg-[#050a24] rounded-[3rem] p-8 flex flex-col items-center shadow-2xl border border-white/5"
      >
        {/* Profile Image with Floating Icons */}
        <div className="relative w-40 h-40 mb-8">
          {/* Main Profile Image */}
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#1a2238] shadow-lg">
            <Image
              src="/man1.png" // আপনার ইমেজ পাথ এখানে দিন
              alt="Rayhan Rimon"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating Tech Icons */}
          <TechIcon
            icon={<SiNextdotjs />}
            position="-top-2 left-1/2 -translate-x-1/2"
            color="bg-black"
          />
          <TechIcon
            icon={<SiReact />}
            position="top-2 -right-2"
            color="bg-[#0a192f] text-blue-400"
          />
          <TechIcon
            icon={<SiJavascript />}
            position="bottom-12 -left-4"
            color="bg-yellow-400 text-black"
          />
          <TechIcon
            icon={<SiLaravel />}
            position="bottom-2 -right-0"
            color="bg-[#1a2238] text-red-500"
          />
        </div>

        {/* Text Content */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-white tracking-tight">Rayhan Rimon</h2>
          <div className="space-y-1">
            <p className="text-blue-500 font-medium text-lg">Full Stack Developer</p>
            <p className="text-blue-500/80 text-sm font-medium">(Frontend Focused)</p>
          </div>
          <p className="text-gray-400 pt-4 text-sm font-light">dev.rrimon@gmail.com</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-10">
          <SocialBtn icon={<FaLinkedinIn />} color="bg-blue-900/30 text-blue-400" />
          <SocialBtn icon={<FaGithub />} color="bg-gray-800/50 text-white" />
          <SocialBtn icon={<FaEnvelope />} color="bg-red-900/20 text-red-500" />
        </div>
      </motion.div>
    </div>
  );
};

// Reusable Tech Icon Component
const TechIcon = ({ icon, position, color }) => (
  <motion.div
    animate={{ y: [0, -5, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    className={`absolute ${position} ${color} w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-xl z-20 border border-white/10`}
  >
    {icon}
  </motion.div>
);

// Reusable Social Button Component
const SocialBtn = ({ icon, color }) => (
  <motion.button
    whileHover={{ y: -5, scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className={`${color} w-14 h-14 rounded-2xl flex items-center justify-center text-xl backdrop-blur-md transition-all shadow-lg border border-white/5`}
  >
    {icon}
  </motion.button>
);

export default ProfileCard;
