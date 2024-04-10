import React, { useEffect, useRef, useState } from "react";
import { contactLinks } from "./constants.js";
import programmingGif from "./assets/Programming.gif";
import Navbar from "./Navbar";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

const Home = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // Animation logic to run once when the component mounts
    setAnimateLeft(true);
    setAnimateRight(true);
  }, []);

  const leftAnimationStyle = {
    opacity: animateLeft ? 1 : 0,
    transform: animateLeft ? "translateX(0)" : "translateX(-50px)",
    transition: "opacity 1s, transform 1s",
  };

  const rightAnimationStyle = {
    opacity: animateRight ? 1 : 0,
    transform: animateRight ? "translateX(0)" : "translateX(50px)",
    transition: "opacity 1s, transform 1s",
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setNavbarOpen(false); // Close the navbar after scrolling
    }
  };  

  return (
    <>
      <div
        id="home"
        className="bg-white bg-center min-h-screen flex items-center justify-center"
      >
        <main className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen">
          <div
            className="sm:text-center lg:text-left md:w-1/2"
            style={leftAnimationStyle}
            ref={leftRef}
          >
            <h1 className="text-3xl tracking-tight font-bold text-grey sm:text-4xl md:text-4xl">
              <span style={{ whiteSpace: "nowrap" }}>
                Hi, I am Sanjai Kannan G
              </span>
              <span className="block text-blue-600" id="typing-text">
                Full Stack Developer - MERN
              </span>
            </h1>
            <p className="mt-3 text-base text-grey sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              I am an enthusiastic Full Stack Developer with a strong foundation
              in web development and problem-solving.
            </p>
            <div className="flex mt-5 md:mt-8 md:justify-start">
              {contactLinks.map((el) => (
                <a
                  key={el.name}
                  href={el.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-5 cursor-pointer mt-2 md:mt-0 hover:scale-125"
                >
                  <img
                    alt={el.name}
                    src={el.url}
                    style={{ width: "45px", height: "45px" }}
                  />
                </a>
              ))}
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 cursor-pointer w-full md:w-auto">
              <a
              href="https://drive.google.com/file/d/1PdBo22cdFJ2B3Cqsuz-9jzf_0DjYQxtU/view?usp=sharing"
              target="_blank"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 md:py-4 md:text-lg md:px-10 transform transition duration-300 hover:scale-105"
                >
                  Resume / CV
                </a>
              </div>
            </div>
          </div>
          <img
            src={programmingGif}
            alt="Programming GIF"
            className="w-full md:w-1/2 mt-8 md:mt-0"
            style={rightAnimationStyle}
            ref={rightRef}
          />
        </main>
      </div>
      <About/>
      <Projects/>
      <Contact/>
    </>
  );
};

export default Home;
