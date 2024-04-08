import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Projects from "./Projects";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Resume from "./Resume";

const App = () => {
  // Get the current location using the useLocation hook
  const location = useLocation();

  // Check if the current location is the Resume page
  const isResumePage = location.pathname === "/resume";

  return (
    <>
      {/* Conditionally render the Navbar based on the current route */}
      {!isResumePage && <Navbar />}
      <Routes>
        <Route path="/resume" element={<Resume />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
