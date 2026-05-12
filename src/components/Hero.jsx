'use client';

import Image from 'next/image';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { IoMailOutline } from 'react-icons/io5';

const Hero = () => {
  return (
    <section className="bg-(--background) text-(--foreground) pt-20 pb-5">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 items-center  border-black/10 dark:border-amber-100/10 rounded-2xl  border p-4  relative">
        {/* LEFT SIDE */}
        <div className="relative z-10 col-span-2">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-8 bg-white dark:bg-blue-900 text-blue-800 dark:text-white px-5 py-2 rounded-full w-fit shadow-md">
            <GoDotFill className="text-green-500 animate-pulse" />
            <span className="text-sm font-medium">Available for new opportunities</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            I'm{' '}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              SAZID HOSSAIN
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg leading-relaxed opacity-80 max-w-xl mb-10">
            Hi, I’m Sazid Hossain. I craft premium frontend experiences with modern UI, smooth
            animations, and high-performance web technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5">
            <button className="px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105">
              Hire Me
            </button>

            <button className="px-7 py-3 rounded-xl border border-blue-600 text-blue-600 dark:text-white hover:bg-blue-600 hover:text-white transition-all duration-300">
              Download CV
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE AREA */}
        <div className=" mx-auto col-span-1 p-2">
          <div className=" w-100  text-center rounded-2xl bg-white/70  dark:bg-blue-950 text-black dark:text-white space-y-5 p-2">
            <div className="w-[150px] h-[150px] rounded-full overflow-hidden border-2 dark:border-gray-500 border-blue-100 mx-auto  ">
              <Image
                src="/man-2.png"
                height={100}
                width={100}
                alt="heroimg"
                priority
                className="w-full h-full object-cover text-center "
              />
            </div>
            <h2 className="text-2xl font-bold">SAZID HOSSAIN</h2>
            <h2 className="text-[18px] text-blue-500 dark:text-blue-500">
              Full Stack Developer <br /> (Frontend Focused)
            </h2>
            <p className="text-gray-400">sazidhossain25@gmail.con</p>
            <div>
              <span className="flex items-center justify-center gap-3">
                <FaLinkedinIn className="w-11 h-11 text-black dark:text-amber-50  bg-blue-100 dark:bg-gray-800 p-3 rounded-2xl" />
                <AiFillGithub className="w-11 h-11 text-black dark:text-amber-50  bg-blue-100 dark:bg-gray-800 p-3 rounded-2xl" />
                <IoMailOutline className="w-11 h-11 text-black dark:text-amber-50  bg-blue-100 dark:bg-gray-800 p-3 rounded-2xl" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
