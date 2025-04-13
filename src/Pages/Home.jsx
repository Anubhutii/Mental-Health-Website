import React, { useState } from "react";
import heroImage from "../assets/Home2.png";
import { useTheme } from "../Context/ThemeProvider";
import About from "./About";
import Feedback from "./Feedback";
import Services from "./Services";
import Footer from "./Footer";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "Student",
    "Employee",
    "Jobless",
    "Homemaker",
    "Female",
    "Relationship issues",
    "Family issues",
  ];

  const { theme } = useTheme(); // this gives us "light" or "dark"

  return (
    <>
      <div
        id="home"
        className={`min-h-screen md:h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-16 
      ${
        theme === "dark" ? "bg-[#0c1426]" : "bg-gray-50"
      } transition-colors duration-500`}
      >
        {/* Text Section */}
        <div className="md:w-1/3  text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-[#137CA4] dark:text-[#1f6c8b] leading-snug mt-20">
            Your Mental Well-being Matters
          </h1>

          <p
            className={`text-md ${
              theme === "dark" ? "text-gray-400" : "text-gray-800"
            } leading-tight transition-colors duration-500`}
          >
            Discover your inner peace and take control of your mental health
            with our personalized assessments.
          </p>
          <p
            className={`text-md ${
              theme === "dark" ? "text-gray-400" : "text-gray-800"
            } leading-tight transition-colors duration-500`}
          >
            Our platform offers a range of mental health assessments designed to
            help you understand your emotional well-being and provide insights
            for improvement.
          </p>
          <p
            className={`text-md ${
              theme === "dark" ? "text-gray-400" : "text-gray-800"
            } leading-tight transition-colors duration-500`}
          >
            Take a quick self-assessement Test to gain valuable insights into
            your mental health and well-being. Our user-friendly platform makes
            it easy to track your progress and access resources tailored to your
            needs.
          </p>

          <div className="flex flex-col items-start space-y-3 relative">
            <button
              className={`px-8 py-3 rounded-md border-2 border-[#0d86b6] 
    ${theme === "dark" ? "text-gray-300" : "text-gray-500"} 
    hover:bg-[#137CA4] hover:text-white font-semibold transition duration-300`}
            >
              Start General Test
            </button>

            {/* Hover-triggered Category Dropdown */}
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative ml-2"
            >
              <a
                href="#"
                className="text-teal-900 dark:text-blue-600 hover:underline font-medium"
              >
                Explore Tests
              </a>

              {isHovered && (
                <div
                  className={`absolute bottom-1 ml-24 w-60 border rounded-md shadow-md z-10 ${
                    theme === "dark"
                      ? "bg-[#1b2432] text-gray-200 border-gray-600"
                      : "bg-white text-gray-800"
                  }`}
                >
                  <div className="text-center font-semibold py-2 text-gray-700 dark:text-gray-600">
                    Select Category
                  </div>
                  <ul className="max-h-64 overflow-y-auto">
                    {categories.map((category) => (
                      <li
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsHovered(false);
                          console.log("Selected:", category);
                        }}
                        className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-200 cursor-pointer text-sm text-gray-700 dark:text-gray-700 font-semibold"
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {selectedCategory && (
              <p
                className={`text-sm ml-2 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-500"
                }`}
              >
                Selected: {selectedCategory}
              </p>
            )}
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-2/3 mt-2 md:mt-0 ">
          <img
            src={heroImage}
            alt="Mental wellness"
            className=" w-full max-w-5xl mx-auto mt-6 bottom-0 right-0 "
          />
        </div>
      </div>
      <About />
      <Services />
      <Feedback />
      <Footer />  
    </>
  );
};

export default Home;
