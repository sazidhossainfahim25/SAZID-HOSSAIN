'use client';

import React from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaPaperPlane,
} from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: 'Email Me',
    value: 'sazidhossain25@gmail.com',
    color: 'from-blue-500 to-cyan-400',
  },

  {
    icon: <FaMapMarkerAlt />,
    title: 'Location',
    value: 'Dhaka, Bangladesh',
    color: 'from-cyan-400 to-blue-500',
  },
];

const socials = [
  {
    icon: <FaGithub />,
    link: 'https://github.com/sazidhossainfahim25',
    hover: 'hover:bg-black hover:text-white',
  },

  {
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/sazid-hossain25/',
    hover: 'hover:bg-blue-600 hover:text-white',
  },

  {
    icon: <FaTwitter />,
    link: 'https://twitter.com',
    hover: 'hover:bg-sky-500 hover:text-white',
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,
  },
};

const ContactPage = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden rounded-2xl mb-4">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-400/5 blur-[120px] rounded-full"></div>

      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-5 tracking-tight">
            Get In{' '}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>

          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have a project idea or want to collaborate? Feel free to reach out and let's create
            something amazing together.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-5">
          {/* LEFT SIDE */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{
              staggerChildren: 0.15,
            }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-[32px] border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-blue-500/10 to-cyan-400/10"></div>

                <div className="relative flex items-center gap-5">
                  {/* Icon */}
                  <div
                    className={` p-3 rounded-2xl bg-blue-900/90 flex items-center justify-center text-white text-2xl shadow-lg`}
                  >
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <p className="text-xs uppercase tracking-[3px] text-gray-500 dark:text-gray-400 font-bold mb-1">
                      {item.title}
                    </p>

                    <h3 className="font-semibold text-gray-800 dark:text-white break-all">
                      {item.value}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Card */}
            <motion.div
              variants={fadeUp}
              whileHover={{
                y: -6,
              }}
              className="relative overflow-hidden rounded-[32px] border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-blue-500/10 to-cyan-400/10"></div>

              <div className="relative">
                <h3 className="text-xl font-bold mb-6">Follow My Work</h3>

                <div className="flex gap-4">
                  {socials.map((social, i) => (
                    <motion.div
                      key={i}
                      whileHover={{
                        y: -5,
                        scale: 1.1,
                      }}
                    >
                      <Link
                        href={social.link}
                        target="_blank"
                        className={`w-14 h-14 rounded-2xl bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-xl text-gray-700 dark:text-white transition-all duration-300 ${social.hover}`}
                      >
                        {social.icon}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative overflow-hidden rounded-[40px] border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-2xl p-4 md:p-10 shadow-2xl">
              {/* Glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

              {/* Form */}
              <form className="relative">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {/* Name */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400 ml-2">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full rounded-2xl border border-black/5 dark:border-white/10 bg-gray-50 dark:bg-[#0f172a]/80 px-4 py-4 text-gray-800 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400 ml-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your Email"
                      className="w-full rounded-2xl border border-black/5 dark:border-white/10 bg-gray-50 dark:bg-[#0f172a]/80 px-6 py-4 text-gray-800 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-3 mb-6">
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400 ml-2">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Text"
                    className="w-full rounded-2xl border border-black/5 dark:border-white/10 bg-gray-50 dark:bg-[#0f172a]/80 px-4 py-4 text-gray-800 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div className="space-y-3 mb-8">
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400 ml-2">
                    Your Message
                  </label>

                  <textarea
                    rows="6"
                    placeholder="Tell me about your project"
                    className="w-full resize-none rounded-2xl border border-black/5 dark:border-white/10 bg-gray-50 dark:bg-[#0f172a]/80 px-6 py-4 text-gray-800 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all duration-300"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  type="submit"
                  className="group w-full rounded-2xl bg-blue-700 py-5 font-bold text-white shadow-2xl shadow-blue-500/20 transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-3 text-lg">
                    Send Message
                    <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
