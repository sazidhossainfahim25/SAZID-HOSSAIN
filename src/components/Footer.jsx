'use client';

import React from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 py-6">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Left Side */}
          <Link href="/">
            <h2 className="text-2xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                SAZID
              </span>
            </h2>
          </Link>

          {/* Right Side */}
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-right">
            © {new Date().getFullYear()} Sazid Hossain. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
