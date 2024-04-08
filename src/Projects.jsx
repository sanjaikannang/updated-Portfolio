import React from "react";
import youtubeImage from "./assets/stack overflow/youtube1.png";
import stackoverflow from "./assets/stack overflow/stack1.png";
import goldengate from "./assets/stack overflow/golden1.png";
import notes from "./assets/stack overflow/note1.png";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <br />
      <br />
      <div id="project" className="text-center">
        <h2 className="text-4xl font-bold px-4 md:px-0 text-center text-blue-600 animate__animated animate__fadeIn">Personal Projects</h2>
      </div>
      <p className="text-center text-2xl text-gray-800 mt-4">
        Check out some of the projects I worked on in my spare time.
        <br /> Each project showcases my skills and passion for development.
      </p>

      {/* project 1 */}
      <div className="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center ">
        <br />
        <br />
        <div data-theme="teal" className="mx-auto max-w-6xl">
          <section className="font-sans text-black">
          <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ] shadow-2xl hover:shadow-2xl transform hover:scale-105">
              <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                <div className="h-full">
                  <article className="h-full">
                    <div className="h-full">
                      <img
                        className="h-full object-contain"
                        src={youtubeImage}
                        width="733"
                        height="312"
                        alt='""'
                        typeof="foaf:Image"
                      />
                    </div>
                  </article>
                </div>
              </div>
              <div className="p-3 bg-gray-100">
                <div className="leading-relaxed">
                  <h2 className="leading-tight text-3xl font-bold">
                    YouTube Clone Using MERN
                  </h2>
                  <p className="mt-4">
                    The YouTube Clone is to replicate the core functionalities of the
                    YouTube.
                  </p>
          <p className="mt-4">
            Developed full-stack application for users to view, upload, and
            interact with videos, using React.js, Node.js, Express.js, MongoDB
            for Database Management & Cloudinary for image, Video Storage.
          </p>
          <p className="mt-4">
            Learned building scalable web applications and understand how to
            handle media content in a web environment.
          </p>
          <p className="mt-4">
            Technologies Used : <br />
            Frontend : JavaScript | React.js | Tailwind CSS <br />
            Backend : Node.js | Express.js | MongoDB | JWT <br />
            Additional : Cloudinary for video storage
          </p>
          <div className="flex justify-between mt-1">
          <a
                      className="mt-2 button button--secondary text-gray-700 flex items-center px-4 py-2 transform transition duration-300 hover:scale-105"
                      href="https://github.com/sanjaikannang/youtube-clone-FrontEnd.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://www.svgrepo.com/show/361181/github.svg"
                        alt="Frontend"
                        className="w-6 h-6 mr-2 "
                      />
                      Frontend
                    </a>
                    <a
                      className="mt-2 button button--secondary text-gray-700 flex items-center px-4 py-2 transform transition duration-300 hover:scale-105"
                      href="https://github.com/sanjaikannang/YouTube-Clone-BackEnd.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png?20180806170715 "
                        alt="Backend"
                        className="w-6 h-6 mr-2"
                      />
                      Backend
                    </a>
                    <a
                      className="mt-2 button button--secondary text-gray-700 flex items-center px-4 py-2 transform transition duration-300 hover:scale-105"
                      href="https://beautiful-gumdrop-645ef4.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://www.svgrepo.com/show/457005/arrow-up-from-square.svg"
                        alt="View Project"
                        className="w-6 h-6 mr-2"
                      />
                      LiveSite
                    </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* project 2 */}
        <div data-theme="teal" className="mx-auto max-w-6xl">
          <section className="font-sans text-black">
          <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ] shadow-2xl hover:shadow-2xl transform hover:scale-105">
              <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                <div className="h-full">
                  <article className="h-full">
                    <div className="h-full">
                      <img
                        className="h-full object-contain"
                        src={stackoverflow}
                        width="733"
                        height="312"
                        alt='""'
                        typeof="foaf:Image"
                      />
                    </div>
                  </article>
                </div>
              </div>
              <div className="p-3 bg-gray-100">
                <div className="leading-relaxed">
                  <h2 className="leading-tight text-3xl font-bold">
                    Stack Over Flow Clone using MERN
                  </h2>
                  <p className="mt-4">
                    The Stack Overflow Clone provide robust platform for
                    programming-related discussions and knowledge sharing.
                  </p>
                  <p className="mt-4">
                    Built a full-stack application enabling users to ask
                    questions, provide answers Using React.js, Node.js,
                    Express.js & MongoDB.
                  </p>
                  <p className="mt-4">
                    Mastered building complex web applications and Learned
                    implementing user authentication.
                  </p>
                  <p className="mt-4">
                    Technologies Used: <br />
                    Frontend: JavaScript | React. js | Tailwind CSS <br />
                    Backend: Node.js | Express.js | MongoDB | JWT
                  </p>
                  <p>
                    <div className="flex justify-between mt-1">
                      <a
                        className="mt-2 button button--secondary text-gray-700 flex items-center px-4 py-2 transform transition duration-300 hover:scale-105"
                        href="https://github.com/sanjaikannang/StackOverFlow-FrontEnd.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://www.svgrepo.com/show/361181/github.svg"
                          alt="Frontend"
                          className="w-6 h-6 mr-2 "
                        />
                        Frontend
                      </a>
                      <a
                        className="mt-2 button button--secondary text-gray-700 flex items-center px-4 py-2 transform transition duration-300 hover:scale-105"
                        href="https://github.com/sanjaikannang/StackOverFlow-Clone-BackEnd.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png?20180806170715 "
                          alt="Backend"
                          className="w-6 h-6 mr-2"
                        />
                        Backend
                      </a>
                      <a
                        className="mt-2 button button--secondary text-gray-700 flex items-center px-4 py-2 transform transition duration-300 hover:scale-105"
                        href="https://tangerine-smakager-a47add.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://www.svgrepo.com/show/457005/arrow-up-from-square.svg"
                          alt="View Project"
                          className="w-6 h-6 mr-2"
                        />
                        LiveSite
                      </a>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* project 3 */}
        <div data-theme="teal" className="mx-auto max-w-6xl">
          <section className="font-sans text-black">
          <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ] shadow-2xl hover:shadow-2xl transform hover:scale-105">
              <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                <div className="h-full">
                  <article className="h-full">
                    <div className="h-full">
                      <img
                        className="h-full object-contain"
                        src={goldengate}
                        width="733"
                        height="312"
                        alt='""'
                        typeof="foaf:Image"
                      />
                    </div>
                  </article>
                </div>
              </div>
              <div className="p-3 bg-gray-100">
                <div className="leading-relaxed">
                  <h2 className="leading-tight text-3xl font-bold">
                    Golden Gate - Real Estate Application
                  </h2>
                  <p className="mt-4">
                    The Golden Gate Real Estate fulfills the need for a platform
                    enabling property exploration, buying, and selling.
                  </p>
                  <p className="mt-4">
                    Developed a web application for effortless property
                    exploration, purchase, and listing in the real estate
                    market.
                  </p>
                  <p className="mt-4">
                    Gained practical experience in building complex applications
                    and integrating third-party services like Cloudinary.
                  </p>
                  <p className="mt-4">
                    Technologies Used : <br />
                    Frontend : JavaScript | React.js | Tailwind CSS <br />
                    Backend : Node.js | Express.js | MongoDB | JWT <br />
                    Additional : Cloudinary for image storage
                  </p>
                  <p>
                    <div className="flex justify-between mt-1">
                      <a
                        className="mt-2 button button--secondary text-gray-700 flex items-center px-4 py-2 transform transition duration-300 hover:scale-105"
                        href="https://github.com/sanjaikannang/Golden-Gate-FrontEnd.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://www.svgrepo.com/show/361181/github.svg"
                          alt="Frontend"
                          className="w-6 h-6 mr-2 "
                        />
                        Frontend
                      </a>
                      <a
                        className="mt-2 button button--secondary text-gray-700 flex items-center px-4 py-2 transform transition duration-300 hover:scale-105"
                        href="https://github.com/sanjaikannang/Golden-Gate-BackEnd.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png?20180806170715 "
                          alt="Backend"
                          className="w-6 h-6 mr-2"
                        />
                        Backend
                      </a>
                      <a
                        className="mt-2 button button--secondary text-gray-700 flex items-center px-4 py-2 transform transition duration-300 hover:scale-105"
                        href="https://dapper-tartufo-1bfe71.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://www.svgrepo.com/show/457005/arrow-up-from-square.svg"
                          alt="View Project"
                          className="w-6 h-6 mr-2"
                        />
                        LiveSite
                      </a>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* project 4 */}
        <div data-theme="teal" className="mx-auto max-w-6xl">
          <section className="font-sans text-black">
          <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ] shadow-2xl hover:shadow-2xl transform hover:scale-105">
              <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                <div className="h-full">
                  <article className="h-full">
                    <div className="h-full">
                      <img
                        className="h-full object-contain"
                        src={notes}
                        width="733"
                        height="312"
                        alt='""'
                        typeof="foaf:Image"
                      />
                    </div>
                  </article>
                </div>
              </div>
              <div className="p-3 bg-gray-100">
                <div className="leading-relaxed">
                  <h2 className="leading-tight text-3xl font-bold">
                    NoteWind - Note-Making Application
                  </h2>
                  <p className="mt-4">
                    I have Created Note Wind to offer users an intuitive
                    platform for efficient note creation, organization, and
                    management.
                  </p>
                  <p className="mt-4">
                    Developed Note Wind, a note-making application. Seamlessly
                    enables users to create, organize, and manage notes.
                  </p>
                  <p className="mt-4">
                    Proficiency in designing and implementing complex web
                    applications using the MERN stack.
                  </p>
                  <p className="mt-4">
                    Technologies Used: <br />
                    Frontend: JavaScript | React.js | Tailwind CSS <br />
                    Backend: Node.js | Express.js | MongoDB | JWT <br />
                  </p>
                  <p>
                    <div className="flex justify-between mt-1">
                      <a
                        className="mt-2 button button--secondary text-gray-700 flex items-center px-4 py-2 transform transition duration-300 hover:scale-105"
                        href="https://github.com/sanjaikannang/NoteWind-Frontend.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://www.svgrepo.com/show/361181/github.svg"
                          alt="Frontend"
                          className="w-6 h-6 mr-2 "
                        />
                        Frontend
                      </a>
                      <a
                        className="mt-2 button button--secondary text-gray-700 flex items-center px-4 py-2 transform transition duration-300 hover:scale-105"
                        href="https://github.com/sanjaikannang/backend.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png?20180806170715 "
                          alt="Backend"
                          className="w-6 h-6 mr-2"
                        />
                        Backend
                      </a>
                      <a
                        className="mt-2 button button--secondary text-gray-700 flex items-center px-4 py-2 transform transition duration-300 hover:scale-105"
                        href="https://shimmering-cobbler-b07423.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://www.svgrepo.com/show/457005/arrow-up-from-square.svg"
                          alt="View Project"
                          className="w-6 h-6 mr-2"
                        />
                        LiveSite
                      </a>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <br />  
        <br /> 
        <br />  
        <br /> 
        <h2 className="text-xl font-bold px-0 text-center text-blue-600 ">
          - Student Management System -
          <br /> - Note App with Email Remainder -
          <br /> - Cross Platform Application Launcher -
          <br />
          <br /> And Many More..
        </h2>
        <br />  
        <br />  
      </div>
    </>
  );
};

export default Projects;
