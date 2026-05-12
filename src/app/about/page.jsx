import Image from 'next/image';
import React from 'react';

import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

const AboutPage = () => {
  return (
    <section id="about" className=" py-4">
      <div className=" shadow shadow-black/20 dark:shadow-white/20 rounded-2xl p-4">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-2 items-center p-3 ">
          {/* Left Side: Illustration or Decorative Image */}
                  <div className=" mx-auto col-span-1 p-2">
                    <div className=" px-15 py-8  text-center rounded-2xl bg-white/70  dark:bg-blue-950 text-black dark:text-white space-y-5 ">
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

          {/* Right Side: Content */}
          <div className="space-y-2 p-2  ">
            <h3 className="text-xl font-bold text-blue-600">
              Helping you build modern, high-performance web experiences.
            </h3>

            <p className="text-[14px] text-gray-600 dark:text-gray-300 leading-relaxed">
              Hello! I'm{' '}
              <span className="font-semibold text-black dark:text-white">Sazid Hossain</span>. My
              journey into the world of programming started with a simple "Hello World" and a deep
              curiosity for how things work on the internet. Over the years, this curiosity turned
              into a passion for crafting clean, scalable, and user-centric frontend solutions.
            </p>

            <p className="text-[14px] text-gray-600 dark:text-gray-300 leading-relaxed">
              I truly enjoy the process of turning a complex problem into a simple, beautiful
              interface. Using tools like <span className="text-blue-500 font-medium">Next.js</span>
              ,<span className="text-blue-500 font-medium"> Tailwind CSS</span>, and
              <span className="text-blue-500 font-medium"> Framer Motion</span>, I focus on creating
              smooth user experiences that feel intuitive and fast.
            </p>

            {/* Hobbies / Personal Interests */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-xl border-l-4 border-blue-600">
              <h4 className="font-bold mb-1">Outside of Coding</h4>
              <p className="text-gray-700 dark:text-gray-300 text-[10px">
                When I'm not staring at a code editor, you can find me playing cricket, exploring
                new tech gadgets, or traveling to find the best street food. I believe a healthy
                balance between logic and creativity is what makes a great developer.
              </p>
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="text-sm text-gray-500">Based in</p>
                <p className="font-semibold">Dhaka, Bangladesh</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold">sazidhossain25@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
