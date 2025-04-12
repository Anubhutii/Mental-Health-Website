// src/components/Services.jsx
import React from "react";
import { useTheme } from "../Context/ThemeProvider";
import { motion } from "framer-motion";
import { FaBrain, FaClipboardCheck, FaUsers, FaSmileBeam, FaComments } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";
// import Lottie from "lottie-react";
// import service from "../assets/service.json";



const services = [
    {
      title: "Mental Health Tests",
      icon: <FaBrain size={28} />,
      desc: "Scientifically designed tests to assess your mental well-being.",
      color: "from-[#137CA4] to-[#009BB3]",  // Blue to Teal
      iconBgColor: "bg-[#137CA4]",
    },
    {
      title: "Personalized Routine",
      icon: <FaClipboardCheck size={28} />,
      desc: "Custom plans based on your mental health condition.",
      color: "from-[#009BB3] to-[#00B9B0]",  // Teal to Aqua
      iconBgColor: "bg-[#009BB3]",
    },
    {
      title: "Mindful Exercises",
      icon: <GiMeditation size={28} />,
      desc: "Practice calming exercises to reduce stress and anxiety.",
      color: "from-[#00B9B0] to-[#4DD49C]",  // Aqua to Mint
      iconBgColor: "bg-[#00B9B0]",
    },
    {
      title: "Motivational Community",
      icon: <FaUsers size={28} />,
      desc: "A like-minded community for healing & motivation.",
      color: "from-[#4DD49C] to-[#A3EA82]",  // Mint to Green
      iconBgColor: "bg-[#4DD49C]",
    },
    {
      title: "Mood Tracker",
      icon: <FaSmileBeam size={28} />,
      desc: "Track your mood daily & monitor your growth.",
      color: "from-[#A3EA82] to-[#F9F871]",  // Green to Yellow
      iconBgColor: "bg-[#A3EA82]",
    },
    {
      title: "Chatbot Support",
      icon: <FaComments size={28} />,
      desc: "Talk to our AI-based bot to get help anytime.",
      color: "from-[#F9F871] to-[#FFD580]",  // Yellow to Light Orange
      iconBgColor: "bg-[#F9F871]",
    },
  ];
  

  

const ServiceCard = ({ title, icon, desc, color, iconBgColor }) => (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`group relative cursor-pointer overflow-hidden rounded-3xl bg-[#DCDFE4] dark:bg-[#4f6576] p-4 w-40 h-56 hover:w-72 hover:bg-gradient-to-br ${color} duration-300 font-sans text-white flex flex-col items-center justify-center`}
  >
    {/* Title + Icon wrapper that slides up on hover */}
    <div className="transition-all duration-300 group-hover:-translate-y-8 flex flex-col items-center">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${iconBgColor}`}>
        {React.cloneElement(icon, { className: "text-white text-2xl" })}
      </div>

      <h3 className="text-sm text-center font-semibold text-black dark:text-white mt-2">
        {title.split(" ")[0]} <br /> {title.split(" ").slice(1).join(" ")}
      </h3>
    </div>

    {/* Description sliding in on hover */}
    <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:translate-y-1 group-hover:opacity-100 transition-all duration-300">
      <p className="text-base font-bold text-black dark:text-white">{title}</p>
      <p className={"text-sm text-black dark:text-gray-800"}>{desc}</p>
    </div>
  </motion.div>
);

const Services = () => {
   const { theme } = useTheme();
  return (

    
    <div className="px-4 py-12">
  <h1
        className={`text-4xl font-extrabold text-center mb-12 underline underline-offset-8 decoration-teal-400 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        Our Services
      </h1>

      <div className="text-center mb-10 px-4">
  <h2 className="text-3xl md:text-4xl font-bold text-[#137CA4]">
    What We Offer for Your Mental Wellness
  </h2>
  <p className="mt-2 text-gray-500 max-w-2xl mx-auto">
    Explore our personalized services crafted to help you feel better, think clearly, and live fully.
  </p>
</div>


  <div className="flex flex-wrap justify-center gap-5">
    {services.map((service, index) => (
      <ServiceCard key={index} {...service} />
    ))}
  </div>

  {/* 👇 Add GIF below the cards */}
{/* 👇 Add Lottie Animation below the cards */}
{/* 👇 Add Lottie animation below the cards */}
{/* <div className="mt-10 flex justify-center">
  <div className="w-full max-w-md mr-[850px] ">
    <Lottie 
      animationData={service}
      loop={true}
      autoplay={true}
      className="shadow-lg"
    />
  </div>
</div> */}

</div>

  );
};

export default Services;
