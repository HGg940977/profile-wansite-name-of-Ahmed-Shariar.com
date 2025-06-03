import React, { useEffect } from "react";
import { FaJava, FaPython, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiFlutter, SiCsharp } from "react-icons/si";
// Fallback in case any icons are not available
import { DiJava, DiPython, DiReact, DiNodejs, DiMongodb } from "react-icons/di";

export default function About() {
  // Replace 'your-youtube-channel-link' with your actual YouTube channel link
  const youtubeChannelLink = "https://www.youtube.com/@AshTasnim";

  // Animation effect for tech icons
  useEffect(() => {
    const techIcons = document.querySelectorAll('.tech-icon');
    techIcons.forEach((icon, index) => {
      setTimeout(() => {
        icon.classList.add('animate-bounce');
        setTimeout(() => {
          icon.classList.remove('animate-bounce');
        }, 1000);
      }, index * 200);
    });
  }, []);

  return (
    <section id="about" className="bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"> 
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-yellow-500 opacity-10"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              animation: 'float infinite ease-in-out'
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>
      <div className="container mx-auto flex px-5 sm:px-10 py-10 sm:py-20 md:flex-row flex-col items-center relative z-10">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-20 h-20 bg-yellow-500 opacity-20 rounded-full blur-xl hidden sm:block"></div>
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-bold text-white relative">
              Hi, I'm <a href={youtubeChannelLink} className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 break-words">Ahmed Shariar</a>
              <span className="absolute -right-10 top-0 text-yellow-500 animate-pulse hidden sm:inline-block">👋</span>
            </h1>
            <h2 className="sm:text-3xl text-xl mb-6 sm:mb-8 font-medium text-gray-300">
              Full-Stack Software Development
              <span className="ml-2 inline-block w-2 sm:w-3 h-6 sm:h-8 bg-yellow-500 animate-blink"></span>
            </h2>
          </div>
          
          <p className="mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg text-gray-300 bg-gray-800 bg-opacity-50 p-4 sm:p-6 rounded-lg shadow-xl border-l-4 border-yellow-500">
            Experienced with all stages of the development cycle for dynamic Java projects.
            Well-versed in numerous programming languages including Java, Python, PHP,
            JavaScript, My-SQL, Flutter, C#, React.js, Express.js, Node.js, MongoDB. Strong
            background in project management and customer relations.
          </p>
          
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center md:justify-start">
            <FaJava className="tech-icon text-3xl sm:text-4xl text-blue-500 hover:text-blue-400 transition-all hover:scale-125" title="Java" />
            <FaPython className="tech-icon text-3xl sm:text-4xl text-green-500 hover:text-green-400 transition-all hover:scale-125" title="Python" />
            <FaReact className="tech-icon text-3xl sm:text-4xl text-blue-400 hover:text-blue-300 transition-all hover:scale-125" title="React" />
            <FaNodeJs className="tech-icon text-3xl sm:text-4xl text-green-600 hover:text-green-500 transition-all hover:scale-125" title="Node.js" />
            <SiMongodb className="tech-icon text-3xl sm:text-4xl text-green-500 hover:text-green-400 transition-all hover:scale-125" title="MongoDB" />
            <SiExpress className="tech-icon text-3xl sm:text-4xl text-gray-400 hover:text-white transition-all hover:scale-125" title="Express" />
            <SiFlutter className="tech-icon text-3xl sm:text-4xl text-blue-400 hover:text-blue-300 transition-all hover:scale-125" title="Flutter" />
            <DiReact className="tech-icon text-3xl sm:text-4xl text-purple-500 hover:text-purple-400 transition-all hover:scale-125" title="C#" />
          </div>
          
          <style jsx>{`
            @keyframes blink {
              0%, 100% { opacity: 0; }
              50% { opacity: 1; }
            }
            .animate-blink {
              animation: blink 1s infinite;
            }
          `}</style>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center text-black bg-gradient-to-r from-yellow-400 to-yellow-600 border-0 py-2 sm:py-3 px-4 sm:px-8 focus:outline-none hover:from-yellow-500 hover:to-yellow-700 rounded-lg text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span className="mr-1 sm:mr-2">Work With Me</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href={youtubeChannelLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white bg-gradient-to-r from-red-500 to-red-700 border-0 py-2 sm:py-3 px-4 sm:px-8 focus:outline-none hover:from-red-600 hover:to-red-800 rounded-lg text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span className="mr-1 sm:mr-2">Subscribe</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full sm:w-5/6 relative mt-8 md:mt-0">
          {/* Decorative elements - hidden on small screens */}
          <div className="absolute -top-10 -right-10 w-20 sm:w-40 h-20 sm:h-40 bg-yellow-500 opacity-20 rounded-full blur-xl animate-pulse hidden sm:block"></div>
          <div className="absolute -bottom-10 -left-10 w-20 sm:w-40 h-20 sm:h-40 bg-blue-500 opacity-20 rounded-full blur-xl animate-pulse hidden sm:block"></div>
          
          {/* Code snippets decoration - hidden on mobile */}
          <div className="absolute -top-5 -left-5 bg-gray-800 bg-opacity-80 p-2 rounded-md shadow-lg transform -rotate-6 hidden md:block">
            <pre className="text-xs text-green-400">const dev = new Developer();</pre>
          </div>
          <div className="absolute -bottom-5 -right-5 bg-gray-800 bg-opacity-80 p-2 rounded-md shadow-lg transform rotate-6 hidden md:block">
            <pre className="text-xs text-blue-400">dev.code(passion);</pre>
          </div>
          
          {/* Main image with enhanced styling */}
          <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-full border-2 sm:border-4 border-yellow-500 rounded-lg shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-1">
            <img
              className="object-cover object-center w-full h-full"
              alt="Ahmed Shariar Hossain Tasnim"
              src="./about.gif"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"></div>
          </div>
          
          {/* Tech stack label - smaller on mobile */}
          <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black bg-opacity-70 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm text-yellow-500 font-medium shadow-lg transform rotate-3">
            Full-Stack Developer
          </div>
        </div>
      </div>
    </section>
  );
}
