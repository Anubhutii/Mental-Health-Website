import React, { useState } from "react";
import logo from "../assets/Logo.png";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";
import { FaHome, FaUserAlt, FaVial, FaEnvelope } from "react-icons/fa";
import { useTheme } from "../Context/ThemeProvider";
import { useNavigate } from "react-router-dom";
import ProfileCard from "./profileCard";
import { MdDashboard } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileCardVisible, setIsProfileCardVisible] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const { theme } = useTheme();
  const navigate = useNavigate();

  const user = sessionStorage.getItem("user");
  const isUserLoggedIn = user !== null;

  const navLinks = [
    { name: "home", icon: <FaHome /> },
    { name: "about", icon: <FaUserAlt /> },
    { name: "tests", icon: <FaVial /> },
    { name: "Feedback", icon: <FaEnvelope /> },
  ];

  const userName = user ? JSON.parse(user).username : null;
  console.log(userName);

  return (
    <div
      className={`fixed top-0 left-0 w-full ${
        theme === "dark" ? "bg-[#0b1120]" : "bg-[#ffffff]"
      } shadow-md transition-all duration-300 z-1`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex gap-4 items-center">
          <img src={logo} alt="Logo" className="h-12 w-12" />
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-[#006187]">ChintaMukt</h3>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={`#${item.name}`}
              className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </a>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center md:gap-6 gap-3 ">
          {/* Theme Toggle */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>

          {/* Login Button or Profile Initial Circle */}
          {isUserLoggedIn ? (
            <div className="flex items-center gap-4">
              <div onClick={() => navigate("/dashboard")}>
                <MdDashboard size={30} />
                
              </div>

              <div
                className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#43C6F1] to-[#1D94D0] text-white text-lg font-semibold cursor-pointer"
                onClick={() => setIsProfileCardVisible(!isProfileCardVisible)}
              >
                {userName?.charAt(0).toUpperCase()}
              </div>
              {isProfileCardVisible && (
                <div
                  className="absolute top-14 right-0 z-10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ProfileCard />
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="relative h-8 px-2 md:px-4 rounded-lg bg-gradient-to-r from-[#43C6F1] via-[#34a9bd] to-[#1D94D0] text-white font-semibold shadow-md transform hover:scale-105 transition-all duration-300 group"
            >
              <span className="relative z-10 ">Log in</span>
              <span className="absolute inset-0 m-1 rounded-md border-2 border-white opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></span>
            </button>
          )}

          <button
            onClick={toggleMenu}
            className=" md:hidden flex text-gray-700"
          >
            {isMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Overlay to close profile card when clicked outside */}
      {isProfileCardVisible && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setIsProfileCardVisible(false)}
        ></div>
      )}

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-sm shadow-2xl rounded-b-2xl px-4 pb-4 pt-2 animate-fade-down border-t border-gray-200">
          <div className="flex flex-col gap-2 text-gray-800 font-medium">
            {navLinks.map(({ name, icon }) => (
              <a
                key={name}
                href={`#${name}`}
                className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-[#e0f7ff] hover:to-[#ccf1ff] hover:text-[#1D94D0] transition-all duration-300 hover:scale-[1.02]"
              >
                <span className="text-lg">{icon}</span>
                <span className="text-base font-semibold capitalize">
                  {name}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
