import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://portfolio-new-back-end.onrender.com/email/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Reset form fields if successful
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setSuccessMessage("Email sent successfully!");
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccessMessage("Failed to send email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="bg-gradient-to-t from-blue-300 to-white bg-repeat bg-cover bg-center padding-box border-box sh"
      >
        <br />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-600 text-center mb-8">
            Contact Me
          </h2>
          <p className="text-center text-gray-600 text-lg">
            You can reach me via phone at <br />
            <a href="tel:+919345725595" className="text-blue-600">
              +91 93457 25595
            </a>{" "}
            or through email at{" "}
            <a href="mailto:sanjaikannang@gmail.com" className="text-blue-600">
              sanjaikannang@gmail.com
            </a>
            .
          </p>
          <br />
          <br />
          <div className="bg-white shadow-md rounded-lg p-8 transform transition duration-300 hover:scale-105">
            {successMessage && (
              <div className="mb-4 text-green-600">{successMessage}</div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Enter Your Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="relative w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-blue-600"
                disabled={loading}
              >
                {loading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin h-5 w-5 border-t-2 border-b-2 border-white rounded-full"></div>
                  </div>
                )}
                {!loading ? "Send" : <span className="opacity-0">Send</span>}
              </button>
              {successMessage && (
                <div className="mt-2 text-green-600 text-center">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>
        <br />
        <br />

        <div className="container w-full p-4 flex justify-center">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sanjai-kannan-g/"
            target="_blank"
            className="social-icon mx-2 rounded-full bg-blue-600 transform transition duration-300 hover:scale-105"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white m-2 transform transition duration-300 hover:scale-105"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/sanjaikannang"
            target="_blank"
            className="social-icon mx-2 rounded-full bg-blue-600 transform transition duration-300 hover:scale-105"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white m-2 transform transition duration-300 hover:scale-105"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />{" "}
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:sanjaikannang@gmail.com"
            className="social-icon mx-2 rounded-full bg-blue-600 transform transition duration-300 hover:scale-105"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white m-2 transform transition duration-300 hover:scale-105"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </a>

          {/* Phone */}
          <a
            href="tel:+919345725595"
            className="social-icon mx-2 rounded-full bg-blue-600 transform transition duration-300 hover:scale-105"
            aria-label="Phone"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white m-2 transform transition duration-300 hover:scale-105"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {/* Copyright section */}
        <div className="w-full p-4 text-center">
          © 2024 Copyright : Sanjai Kannan G
        </div>
        <br />
      </section>
    </>
  );
};

export default Contact;
