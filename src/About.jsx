import React from "react";
import { techStack, contactLinks } from "./constants";
import { FaLaptopCode, FaCode, FaDatabase } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="bg-gradient-to-t from-blue-300 to-white min-h-screen py-12 flex items-center justify-center relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-blue-600 text-center mb-8">
            About Me
          </h2>

          <div className="text-xl text-gray-700 mb-8">
            <h4 className="text-3xl font-semibold text-blue-600 mb-4">
              A bit about me
            </h4>
            <p>
              Recent Information Technology graduate with expertise in both
              front-end and back-end development. Skilled in HTML5/CSS3,
              JavaScript, React.js, Node.js, Express.js, MySQL and MongoDB.
              Dedicated to delivering top-notch solutions while continuously
              enhancing skills through ongoing learning and professional
              development initiatives.
            </p>
          </div>       
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
            <div className="mb-8 md:mr-8">
              <h4 className="text-3xl font-semibold text-blue-600 mb-4">
                Education
              </h4>
              <p className="text-xl text-gray-700">
                Bachelor of Science - Information Technology
              </p>
              <h5 className="text-xl text-gray-800">
                PSG College Of Arts & Science, Bharathiar University
              </h5>
              <p className="text-xl text-gray-700">
                Year : 2020 - 2023 | CGPA: 7.4
              </p>
            </div>

            <div className="mb-8">
              <div className="md:ml-8">
                <h4 className="text-3xl font-semibold text-blue-600 mb-4">
                  Certification
                </h4>
                <p className="text-xl text-gray-700">
                  Zen Class Full Stack Developer Program - MERN
                </p>
                <h5 className="text-xl text-gray-800">
                  GUVI Geek Network, IITM Research Park- Chennai.
                </h5>
                <p className="text-xl text-gray-700">June 2023 – August 2023</p>
              </div>
            </div>
          </div>
    <br />

          <br />
          <div className="mb-8">
            <div>
              <h4 className="text-3xl font-semibold text-black mb-4 flex flex-wrap justify-center">
                Frontend
              </h4>
              <br />
              <div className="flex flex-wrap justify-center">
                {techStack.FrontEnd.map((el, index) => (
                  <div
                    key={index}
                    className="py-2 px-4 bg-gray-50 m-2 rounded-lg flex items-center hover:scale-125 cursor-pointer w-28"
                  >
                    <img alt={el.name} src={el.link} className="w-8" />
                    <h4 className="text-xs ml-2">{el.name}</h4>
                  </div>
                ))}
              </div>
            </div>
            <br />
            <div>
              <h4 className="text-3xl font-semibold text-black mb-4 flex flex-wrap justify-center">
                Backend
              </h4>
              <br />
              <div className="flex flex-wrap justify-center">
                {techStack.BackEnd.map((el, index) => (
                  <div
                    key={index}
                    className="py-2 px-4 bg-gray-50 m-2 rounded-lg flex items-center hover:scale-125 cursor-pointer w-28"
                  >
                    <img alt={el.name} src={el.link} className="w-8" />
                    <h4 className="text-xs ml-2">{el.name}</h4>
                  </div>
                ))}
              </div>
            </div>
            <br />
            <div>
              <h4 className="text-3xl font-semibold text-black mb-4 flex flex-wrap justify-center">
                Database
              </h4>
              <br />
              <div className="flex flex-wrap justify-center">
                {techStack.Database.map((el, index) => (
                  <div
                    key={index}
                    className="py-2 px-4 bg-gray-50 m-2 rounded-lg flex items-center hover:scale-125 cursor-pointer w-28"
                  >
                    <img alt={el.name} src={el.link} className="w-8" />
                    <h4 className="text-xs ml-2">{el.name}</h4>
                  </div>
                ))}
              </div>
            </div>
            <br />
            <div>
              <h4 className="text-3xl font-semibold text-black mb-4 flex flex-wrap justify-center">
                Tools
              </h4>
              <br />
              <div className="flex flex-wrap justify-center">
                {techStack.Tools.map((el, index) => (
                  <div
                    key={index}
                    className="py-2 px-4 bg-gray-50 m-2 rounded-lg flex items-center hover:scale-125 cursor-pointer w-28"
                  >
                    <img alt={el.name} src={el.link} className="w-8" />
                    <h4 className="text-xs ml-2">{el.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
      <div className="custom-shape-divider-top-1709441166">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-current text-blue-300"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default About;
