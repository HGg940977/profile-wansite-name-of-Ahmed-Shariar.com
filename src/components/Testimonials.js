import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-black">
      <div className="container px-4 sm:px-5 py-8 sm:py-10 mx-auto text-center">
        <UsersIcon className="w-8 sm:w-10 inline-block mb-3 sm:mb-4 text-yellow-500" />
        <h1 className="sm:text-4xl text-2xl font-medium title-font text-white mb-6 sm:mb-12">
          References
        </h1>
        
        <p className="text-sm sm:text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto px-2 sm:px-0">
        The "References" section provides an opportunity to showcase the recommendations and
        endorsements of individuals who have worked closely with you in a professional capacity.
        These testimonials serve as a validation of your skills, work ethic, and character.
        They offer potential employers or collaborators insights into your past achievements and
        the value you bring to a team or project.
        </p>

        <div className="flex flex-wrap m-2 sm:m-4">
          {testimonials.map((testimonial) => (
            <div className="p-3 sm:p-4 md:w-1/2 w-full" key={testimonial.name}>
              <div className="h-full bg-gray-800 bg-opacity-40 p-4 sm:p-8 rounded shadow-md hover:bg-gray-700 hover:bg-opacity-40 transition-colors duration-300">
              <TerminalIcon className="block w-6 sm:w-8 text-yellow-400 mb-3 sm:mb-4" />
                <p className="leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-10 sm:w-12 h-10 sm:h-12 rounded-full flex-shrink-0 object-cover object-center shadow-md"
                  />
                  <span className="flex-grow flex flex-col pl-3 sm:pl-4">
                    <span className="title-font font-medium text-white text-sm sm:text-base">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-xs sm:text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}