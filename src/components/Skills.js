import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="bg-black">
      <div className="container px-4 sm:px-5 py-8 sm:py-10 mx-auto">
        <div className="text-center mb-10 sm:mb-20">
          <ChipIcon className="w-8 sm:w-10 inline-block mb-3 sm:mb-4 text-yellow-500" />
          <h1 className="sm:text-4xl text-2xl font-medium title-font text-white mb-3 sm:mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-sm sm:text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto px-2 sm:px-0">
          I have developed proficiency in a wide range of skills and technologies crucial
          for both front-end and back-end software development. My skill set includes expertise
          in HTML, CSS, and JavaScript for creating responsive and visually appealing user interfaces.
          On the back end, I excel in Node.js, Python, and database management, enabling me to build
          robust server-side systems and APIs. Additionally, I am well-versed in various programming
          languages, including Java, Python, PHP, and C#.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 bg-opacity-50 rounded flex p-3 sm:p-4 h-full items-center shadow-md hover:bg-gray-700 hover:bg-opacity-50 transition-colors duration-300">
              <BadgeCheckIcon className="text-yellow-400 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mr-3 sm:mr-4" />
                <span className="title-font font-medium text-white text-sm sm:text-base">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}