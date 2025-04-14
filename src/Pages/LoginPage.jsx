import React, { useState, useRef } from "react";
import "../index.css";
import Lottie from "lottie-react";
import loginAnimation from "../assets/Login.json";
import bgAnimation from "../assets/loginBg1.json";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Login Form Component
const LoginForm = ({ onSubmit, onSwitchToRegister, formData, setFormData }) => {
  return (
    <div className="p-6 sm:p-10 md:p-14 flex flex-col justify-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
        Hello Again 💫
      </h2>
      <p className="text-gray-600 mb-6">
        Let's take care of your beautiful mind
      </p>

      <form className="space-y-4 sm:space-y-5" onSubmit={onSubmit}>
        <div>
          <label className="text-sm text-gray-700">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="you@example.com"
            className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>

        <div>
          <label className="text-sm text-gray-700">Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="••••••••"
            className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>

        <div className="flex justify-between text-sm">
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

// Register Form Component
const RegisterForm = ({ onSubmit, onSwitchToLogin, formData, setFormData }) => {
  return (
    <div className="p-6 sm:p-10 md:p-14 flex flex-col justify-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
        Welcome 🌟
      </h2>
      <p className="text-gray-600 mb-6">Let's create your account</p>

      <form
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
        onSubmit={onSubmit}
      >
        <div>
          <label className="text-sm text-gray-700">Username</label>
          <input
            type="text"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            placeholder="Enter your name"
            className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="text-sm text-gray-700">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="you@example.com"
            className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="text-sm text-gray-700">Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="••••••••"
            className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="text-sm text-gray-700">Confirm Password</label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            placeholder="••••••••"
            className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div className="flex col-span-1 sm:col-span-2 justify-center text-sm w-full">
          <a
            href="#"
            className="text-blue-800 hover:underline flex items-center gap-2"
          >
            Sign Up with Google <FcGoogle />
          </a>
        </div>

        <div className="col-span-1 sm:col-span-2">
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

// LoginPage Component
const LoginPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const formsContainerRef = useRef(null);
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      const { user, token, message } = res.data;

      if (user) {
        alert(`Login successful! Welcome ${user.username}`);
        navigate("/");
      } else {
        alert(message || "Login failed!");
      }
    } catch (error) {
      alert(
        "Login failed: " + (error.response?.data?.message || error.message)
      );
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      alert("Registration successful!");
      switchToLogin();
    } catch (error) {
      alert(
        "Registration failed: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  const switchToRegister = () => {
    if (formsContainerRef.current) {
      formsContainerRef.current.classList.add("slide-up");
      setTimeout(() => {
        setIsRegister(true);
        formsContainerRef.current.classList.remove("slide-up");
      }, 500);
    }
  };

  const switchToLogin = () => {
    if (formsContainerRef.current) {
      formsContainerRef.current.classList.add("slide-down");
      setTimeout(() => {
        setIsRegister(false);
        formsContainerRef.current.classList.remove("slide-down");
      }, 500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-pink-100 via-blue-100 to-purple-100 relative overflow-hidden px-4">
      <Lottie
        animationData={bgAnimation}
        loop
        autoplay
        className="absolute top-0 w-full h-auto object-cover z-0 opacity-40 pointer-events-none"
      />
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-pink-300 opacity-30 mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-20 right-[-100px] w-[300px] h-[300px] rounded-full bg-purple-300 opacity-30 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-100px] left-1/3 w-[300px] h-[300px] rounded-full bg-blue-300 opacity-30 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

      <div className="z-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
        {/* Left side animation for desktop only */}
        <div className="hidden md:flex items-center justify-center p-8 bg-white/20">
          <Lottie
            animationData={loginAnimation}
            loop
            className="w-full max-w-[350px]"
          />
        </div>

        {/* Right side form */}
        <div ref={formsContainerRef} className="transition-all duration-500">
          {isRegister ? (
            <RegisterForm
              onSubmit={handleRegisterSubmit}
              onSwitchToLogin={switchToLogin}
              formData={formData}
              setFormData={setFormData}
            />
          ) : (
            <LoginForm
              onSubmit={handleLoginSubmit}
              onSwitchToRegister={switchToRegister}
              formData={formData}
              setFormData={setFormData}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
