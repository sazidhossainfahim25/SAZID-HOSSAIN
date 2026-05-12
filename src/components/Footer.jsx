'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaArrowUp, FaEnvelope } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative bg-background pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-8">
            <Link
              href="/"
              className="text-3xl font-black tracking-tighter flex items-center gap-2 group"
            >
              SAZID
              <span className="text-brand-blue group-hover:rotate-12 transition-transform duration-300">
                .
              </span>
            </Link>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Let’s create something <br />
              <span className="text-brand-teal">extraordinary</span> together.
            </h2>
            <div className="flex gap-4">
              {[
                { icon: <FaGithub />, link: '#' },
                { icon: <FaLinkedin />, link: '#' },
                { icon: <FaFacebook />, link: '#' },
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.link}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:text-brand-blue hover:border-brand-blue/50 transition-all duration-300 shadow-xl"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm uppercase tracking-[0.2em] font-bold opacity-40 mb-8">
              Navigation
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-lg font-medium opacity-70 hover:opacity-100 transition-all"
                  >
                    <span>{link.name}</span>
                    <FiArrowUpRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-brand-teal ml-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter/Contact Section */}
          <div className="lg:col-span-4">
            <h3 className="text-sm uppercase tracking-[0.2em] font-bold opacity-40 mb-8">
              Get In Touch
            </h3>
            <div className="space-y-6">
              <a
                href="mailto:yourname@email.com"
                className="block p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-blue/30 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                      <FaEnvelope />
                    </div>
                    <span className="font-bold">yourname@email.com</span>
                  </div>
                  <FiArrowUpRight className="text-2xl opacity-30 group-hover:opacity-100 group-hover:text-brand-blue transition-all" />
                </div>
              </a>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -5 }}
                className="w-full py-4 rounded-2xl border border-white/10 flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-xs opacity-60 hover:opacity-100 transition-all"
              >
                Back to top <FaArrowUp className="text-brand-teal" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm opacity-40 font-medium">
            <p>© {currentYear} Sazid Hossain</p>
            <span className="hidden md:block w-1 h-1 bg-white/20 rounded-full" />
            <p>Built with Next.js & Framer Motion</p>
          </div>

          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold opacity-30">
            <Link href="#" className="hover:text-brand-blue hover:opacity-100 transition-all">
              Privacy
            </Link>
            <Link href="#" className="hover:text-brand-blue hover:opacity-100 transition-all">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
