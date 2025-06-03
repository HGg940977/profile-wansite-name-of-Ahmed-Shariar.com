import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10 shadow-lg">
      <div className="container mx-auto flex flex-wrap p-3 sm:p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-3 md:mb-0 w-full md:w-auto flex justify-center md:justify-start">
          <a href="#about" className="text-lg sm:text-xl flex items-center" style={{ color: "yellow" }}>
          <img src="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Flower Logo" className="w-8 h-8 sm:w-10 sm:h-10 mr-2 rounded-full object-cover shadow-md" />
            <span className="truncate max-w-[200px] sm:max-w-none">Ahmed Shariar</span>
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-sm sm:text-base justify-center">
          <a href="#skills" className="mr-3 sm:mr-5 py-1 px-2 hover:text-white hover:bg-gray-700 rounded transition-colors duration-300">
            Education
          </a>
          <a href="#testimonials" className="mr-3 sm:mr-5 py-1 px-2 hover:text-white hover:bg-gray-700 rounded transition-colors duration-300">
            References
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-yellow-500 text-black border-0 py-1 px-3 focus:outline-none hover:bg-yellow-600 rounded text-sm sm:text-base mt-3 md:mt-0 transition-colors duration-300 shadow-md">
          Hire Me
          <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
