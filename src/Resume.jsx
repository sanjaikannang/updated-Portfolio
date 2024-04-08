import React from "react";
import sanjai from "./assets/stack overflow/Sanjai Kannan G.jpg";

const Portfolio = () => {
  return (
    <>
      <br />
      <br />
      <h2 className="text-4xl font-bold px-4 md:px-0 text-center text-blue-600 animate__animated animate__fadeIn">
        Resume
      </h2>
      <div id="resume" className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <section className="border border-blue-500 rounded p-6 max-w-5xl mx-auto ring-1 ring-blue-500 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="col-span-1 lg:col-span-1 mt-5 order-lg-0 order-1 text-center">
                <img
                  className="h-40 w-32 object-cover mx-auto border-2 rounded-lg shadow-lg"
                  src={sanjai}
                  alt="profile-img"
                />
                <br />
                <div className="bg-gray-50 p-4 rounded mb-4">
                  <h2 className="text-blue-500 text-center text-2xl font-semibold">
                    SANJAI KANNAN G
                  </h2>
                  <ul className="text-center ">
                    <li>
                      <i className="fas fa-envelope me-2"></i>
                      sanjaikannang@gmail.com
                    </li>
                    <li>
                      <i className="fas fa-phone me-2"></i>(+91) 93457 25595
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt me-2"></i>Chennai,
                      TamilNadu
                    </li>
                  </ul>
                </div>

                {/* Skills */}
                <div className="text-left">
                  <h3 className="text-blue-500 text-2xl">Skills</h3>
                  <div className="bg-gray-50 p-4 rounded mb-4">
                    <dt>
                      <strong> Front-End Technologies :</strong>
                    </dt>
                    <dd>
                      HTML5 & CSS3 | Bootstrap | Material UI | Tailwind CSS |
                      JavaScript | React.js | Redux Toolkit | RWD |
                    </dd>
                  </div>
                  <div className="bg-gray-50 p-4 rounded mb-4">
                    <dt>
                      {" "}
                      <strong> Back-End Technologies & Database : </strong>
                    </dt>
                    <dd>
                      Node.js | Express.js | JWT - JSON Web Token | MongoDB |
                      MySQL |
                    </dd>
                  </div>
                  <div className="bg-gray-50 p-4 rounded mb-4">
                    <dt>
                      <strong> Version Control & Deployment : </strong>
                    </dt>
                    <dd>Git | GitHub | Netlify | Render | AWS |</dd>
                  </div>
                </div>

                {/* Achievements */}
                <div className="text-left">
                  <h3 className="text-blue-500 text-2xl">Achievements</h3>
                  <div className="bg-gray-50 p-4 rounded mb-4">
                    <dt>
                      <strong> GUVI Coding platform CODEKATA </strong>
                    </dt>
                    <dd>
                      Problem Solved around 150+ basic to <br /> intermediate
                      level in JavaScript language.
                    </dd>
                  </div>
                  <div className="bg-gray-50 p-4 rounded mb-4">
                    <dt>
                      <strong>Completed the FSD 101 </strong>
                    </dt>
                    <dd>
                      Successfully completed the comprehensive Full Stack
                      Developer 101 in MERN Stack program.
                    </dd>
                  </div>
                </div>

                {/* Strength */}
                <div className="text-left">
                  <h3 className="text-blue-500 text-2xl">Strength</h3>
                  <ul className="flex flex-wrap">
                    <li className="bg-gray-50 p-2 rounded mb-2 mr-2">
                      Technical skills
                    </li>
                    <li className="bg-gray-50 p-2 rounded mb-2 mr-2">
                      Problem-solving skills
                    </li>
                    <li className="bg-gray-50 p-2 rounded mb-2 mr-2">
                      Analytical skills
                    </li>
                    <li className="bg-gray-50 p-2 rounded mb-2 mr-2">
                      Adaptability
                    </li>
                    <li className="bg-gray-50 p-2 rounded mb-2 mr-2">
                      Teamwork
                    </li>
                    <li className="bg-gray-50 p-2 rounded mb-2 mr-2">
                      Creativity
                    </li>
                    <li className="bg-gray-50 p-2 rounded mb-2 mr-2">
                      Quick Learner
                    </li>
                  </ul>
                </div>
                <br />
                {/* language */}
                <div className="text-left">
                  <h3 className="text-blue-500 text-2xl">Language</h3>
                  <div className="bg-gray-50 p-4 rounded mb-4">
                    <dd>English - Professional proficiency</dd>
                    <dd>Tamil - Native proficiency</dd>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-span-1 lg:col-span-2 order-lg-1 order-0 mt-5 text-start px-1">
                <h3 className="text-blue-500 text-2xl">Summary</h3>
                <div className="bg-gray-50 p-4 rounded mb-4">
                  <p>
                    Recent Information Technology graduate with expertise in
                    both front-end and back-end development. Skilled in
                    HTML5/CSS3, JavaScript, React.js, Node.js, Express.js, MySQL
                    and MongoDB. Dedicated to delivering top-notch solutions
                    while continuously enhancing skills.
                  </p>
                </div>

                {/* Education */}
                <h3 className="text-blue-500 text-2xl">Education</h3>
                <div className="bg-gray-50 p-4 rounded mb-4">
                  <dl>
                    <dt>Bachelor’s Degree in Information Technology</dt>
                    <dd>
                      PSG College of Arts and Science, Bharathiar University
                    </dd>
                    <dd>2020 - 2023 | CGPA : 7.4 / 10</dd>
                  </dl>
                </div>

                {/* Certification */}
                <h3 className="text-blue-500 text-2xl">Certification</h3>
                <div className="bg-gray-50 p-4 rounded mb-4">
                  <dl>
                    <dt>Zen Class Full Stack Developer in MERN Program</dt>
                    <dd>GUVI Geek Network, IITM Research Park - Chennai.</dd>
                    <dd>Jun 2023 – Aug 2023</dd>
                  </dl>
                </div>

                {/* Personal projects */}
                <h3 className="text-blue-500 text-2xl">Personal projects</h3>

                {/* Project 1 */}
                <div className="bg-gray-50 p-4 rounded mb-4">
                  <dt className="text-lg">
                    {" "}
                    <strong> YouTube Clone Using MERN </strong>
                  </dt>
                  <ul className="list-disc ml-6">
                    <li>
                      The YouTube Clone is to replicate the core functionalities
                      of the YouTube.
                    </li>
                    <li>
                      Developed full-stack application for users to view,
                      upload, and interact with videos, using React.js, Node.js,
                      Express.js, MongoDB for Database Management & Cloudinary
                      for image, Video Storage.
                    </li>
                    <li>
                      Learned building scalable web applications and understand
                      how to handle media content in a web environment.
                    </li>
                  </ul>
                  <a
                    href="https://github.com/sanjaikannang/youtube-clone-FrontEnd.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline mr-2"
                  >
                    Front-End Link
                  </a>
                  <a
                    href="https://github.com/sanjaikannang/YouTube-Clone-BackEnd.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline mr-2"
                  >
                    Back-End Link
                  </a>
                  <a
                    href="https://beautiful-gumdrop-645ef4.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    LiveSite Link
                  </a>
                </div>

                {/* Project 2 */}
                <div className="bg-gray-50 p-4 rounded mb-4">
                  <dt className="text-lg">
                    {" "}
                    <strong> Stack Over Flow Clone using MERN </strong>{" "}
                  </dt>
                  <ul className="list-disc ml-6">
                    <li>
                      The Stack Overflow Clone provides a robust platform for
                      programming-related discussions and knowledge sharing.
                    </li>
                    <li>
                      Built a full-stack application enabling users to ask
                      questions, provide answers using React.js, Node.js,
                      Express.js & MongoDB.
                    </li>
                    <li>
                      Mastered building complex web applications and learned
                      implementing user authentication.
                    </li>
                  </ul>
                  <a
                    href="https://github.com/sanjaikannang/StackOverFlow-FrontEnd.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline mr-2"
                  >
                    Front-End Link
                  </a>
                  <a
                    href="https://github.com/sanjaikannang/StackOverFlow-Clone-BackEnd.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline mr-2"
                  >
                    Back-End Link
                  </a>
                  <a
                    href="https://tangerine-smakager-a47add.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    LiveSite Link
                  </a>
                </div>

                {/* Project 3 */}
                <div className="bg-gray-50 p-4 rounded mb-4">
                  <dt className="text-lg">
                    {" "}
                    <strong> Golden Gate - Real Estate Application </strong>
                  </dt>
                  <ul className="list-disc ml-6">
                    <li>
                      The Golden Gate Real Estate fulfills the need for a
                      platform enabling property exploration, buying, and
                      selling.
                    </li>
                    <li>
                      Developed a web application for effortless property
                      exploration, purchase, and listing in the real estate
                      market.
                    </li>
                    <li>
                      Gained practical experience in building complex
                      applications and integrating third-party services like
                      Cloudinary.
                    </li>
                  </ul>
                  <a
                    href="https://github.com/sanjaikannang/Golden-Gate-FrontEnd.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline mr-2"
                  >
                    Front-End Link
                  </a>
                  <a
                    href="https://github.com/sanjaikannang/Golden-Gate-BackEnd.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline mr-2"
                  >
                    Back-End Link
                  </a>
                  <a
                    href="https://dapper-tartufo-1bfe71.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    LiveSite Link
                  </a>
                </div>

                {/* Project 4 */}
                <div className="bg-gray-50 p-4 rounded mb-4">
                  <dt className="text-lg">
                    {" "}
                    <strong> NoteWind - Note-Making Application </strong>
                  </dt>
                  <ul className="list-disc ml-6">
                    <li>
                      I have Created Note Wind to offer users an intuitive
                      platform for efficient note creation, organization, and
                      management.
                    </li>
                    <li>
                      Developed Note Wind, a note-making application. Seamlessly
                      enables users to create, organize, and manage notes.
                    </li>
                    <li>
                      Proficiency in designing and implementing complex web
                      applications using the MERN stack.
                    </li>
                  </ul>
                  <a
                    href="https://github.com/sanjaikannang/NoteWind-Frontend.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline mr-2"
                  >
                    Front-End Link
                  </a>
                  <a
                    href="https://github.com/sanjaikannang/backend.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline mr-2"
                  >
                    Back-End Link
                  </a>
                  <a
                    href="https://shimmering-cobbler-b07423.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    LiveSite Link
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    <br />
    <br />
    </>
  );
};

export default Portfolio;
