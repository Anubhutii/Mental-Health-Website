import React, { useState, useRef } from "react";
import "../index.css";
import Lottie from "lottie-react";
import loginAnimation from "../assets/Login.json";
import bgAnimation from "../assets/loginBg1.json";
import { FcGoogle } from "react-icons/fc";

// Login form component
const LoginForm = ({ onSubmit, onSwitchToRegister }) => {
  return (
    <div className="p-10 md:p-14 flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Hello Again 💫</h2>
      <p className="text-gray-600 mb-6">
        Let's take care of your beautiful mind
      </p>

      <form className="space-y-5" onSubmit={onSubmit}>
        <div>
          <label className="text-sm text-gray-700">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>

        <div>
          <label className="text-sm text-gray-700">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>

        <div className="flex justify-between text-sm">
          {/* <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label> */}
          <a href="#" className="text-blue-800 hover:underline">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-800 hover:bg-blue-600 text-white py-3 rounded-xl transition-all"
        >
          Login
        </button>
      </form>

      <p className="text-sm text-center text-gray-600 mt-6">
        Don't have an account?{" "}
        <button
          className="text-blue-700 hover:underline"
          onClick={onSwitchToRegister}
        >
          Sign up
        </button>
      </p>
    </div>
  );
};

// Register form component
const RegisterForm = ({ onSubmit, onSwitchToLogin }) => {
  return (
    <div className="p-10 md:p-14 flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome 🌟</h2>
      <p className="text-gray-600 mb-6">Let's create your account</p>

      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
        onSubmit={onSubmit}
      >
        <div>
          <label className="text-sm text-gray-700">Username</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="text-sm text-gray-700">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="text-sm text-gray-700">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="text-sm text-gray-700">Confirm Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div className="flex col-span-2 justify-center text-sm w-full">
          <a
            href="#"
            className="text-blue-800 hover:underline flex items-center gap-2"
          >
            Sign Up with Google <FcGoogle />
          </a>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-800 hover:bg-blue-600 text-white py-3 rounded-xl transition-all"
          >
            Register
          </button>
        </div>
      </form>

      <p className="text-sm text-center text-gray-600 mt-6">
        Already have an account?{" "}
        <button
          className="text-blue-700 hover:underline"
          onClick={onSwitchToLogin}
        >
          Login
        </button>
      </p>
    </div>
  );
};

const LoginPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const formsContainerRef = useRef(null);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert("Login form submitted!");
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    alert("Register form submitted!");
  };

  const switchToRegister = () => {
    // Add animation class
    if (formsContainerRef.current) {
      formsContainerRef.current.classList.add("slide-up");
      // Wait for animation to complete before changing state
      setTimeout(() => {
        setIsRegister(true);
        formsContainerRef.current.classList.remove("slide-up");
      }, 500);
    }
  };

  const switchToLogin = () => {
    // Add animation class
    if (formsContainerRef.current) {
      formsContainerRef.current.classList.add("slide-down");
      // Wait for animation to complete before changing state
      setTimeout(() => {
        setIsRegister(false);
        formsContainerRef.current.classList.remove("slide-down");
      }, 500);
    }
  };

  return (
    <>
      {/* Required CSS for animations - add this to your CSS file */}

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-pink-100 via-blue-100 to-purple-100 relative overflow-hidden">
        {/* Background animation */}
        <Lottie
          animationData={bgAnimation}
          loop
          autoplay
          className="absolute bg-amber-200 top-0 w-full h-auto object-cover z-0 opacity-40 pointer-events-none"
        />

        {/* Blobs */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-pink-300 opacity-30 mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-20 right-[-100px] w-[300px] h-[300px] rounded-full bg-purple-300 opacity-30 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-100px] left-1/3 w-[300px] h-[300px] rounded-full bg-blue-300 opacity-30 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

        {/* Box */}
        <div className="z-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
          {/* Left Animation */}
          <div className="hidden md:flex items-center justify-center p-8 bg-white/20">
            <Lottie
              animationData={loginAnimation}
              loop={true}
              className="w-full max-w-[350px]"
            />
          </div>

          {/* Right Form - with animation container */}
          <div ref={formsContainerRef} className="transition-all duration-500">
            {isRegister ? (
              <RegisterForm
                onSubmit={handleRegisterSubmit}
                onSwitchToLogin={switchToLogin}
              />
            ) : (
              <LoginForm
                onSubmit={handleLoginSubmit}
                onSwitchToRegister={switchToRegister}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
