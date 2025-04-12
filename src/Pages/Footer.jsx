import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../Context/ThemeProvider";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`w-full py-8 px-6 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-purple-100 text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
        {/* Brand Section */}
        <div>
          <h1 className="text-2xl font-extrabold text-[#137CA4]">ChintaMukt</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Because You Deserve Peace & Happy Heart.
          </p>
        </div>

        {/* Navigation/Links Section (optional, feel free to remove or update) */}
        <div>
          <ul className="flex justify-center gap-6 text-sm font-medium">
            <li className="hover:text-purple-600 transition cursor-pointer">Home</li>
            <li className="hover:text-purple-600 transition cursor-pointer">About</li>
            <li className="hover:text-purple-600 transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end gap-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl hover:text-pink-500 transition duration-200" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-gray-600 transition duration-200" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-blue-500 transition duration-200" />
          </a>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="mt-6 border-t pt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
        © {new Date().getFullYear()} ChintaMukt. Made with 💜 by Anubhuti
      </div>
    </footer>
  );
};

export default Footer;
