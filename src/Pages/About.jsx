import React from "react";
import { useTheme } from "../Context/ThemeProvider";
import {
  FaBrain,
  FaHeart,
  FaHandsHelping,
  FaSmile,
  FaLock,
  FaClock,
  FaUserCheck,
  FaMobileAlt,
  FaChartLine,
} from "react-icons/fa";

const About = () => {
  const { theme } = useTheme();

  const cardStyle = `w-full max-w-sm h-60 p-6 rounded-xl border 
  ${
    theme === "dark"
      ? "bg-[#1a1a2e] text-gray-300 border-gray-700"
      : "bg-white text-gray-700 border-gray-200"
  } 
  shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1`;

  const textStyle = `${theme === "dark" ? "text-gray-400" : "text-gray-600"}`;
  const iconStyle = `${theme === "dark" ? "text-[#52b6d2]" : "text-[#137CA4]"}`;

  const sectionStyle = `mt-12 p-10 shadow-md ${
    theme === "dark" ? "bg-[#121e2c]" : "bg-[#f0faff]"
  }`;

  const headingStyle = `text-3xl font-bold text-center mb-6 ${
    theme === "dark" ? "text-[#876bae]" : "text-[#bd5889]"
  }`;

  const paragraphStyle = `text-md leading-relaxed max-w-4xl mx-auto text-center ${
    theme === "dark" ? "text-gray-300" : "text-gray-700"
  }`;

  const highlightStyle = `${
    theme === "dark" ? "text-[#bd5889]" : "text-[#0d86b6]"
  }`;

  const buttonStyle = `px-8 py-3 ${
    theme === "dark"
      ? "bg-[#6373b4] hover:bg-[#876bae]"
      : "bg-[#137CA4] hover:bg-[#0d86b6]"
  } text-white rounded-xl font-semibold transition`;

  const cardBg = theme === "dark" ? "bg-[#1a1f2e]" : "bg-[#f0faff]";
  const cardText = theme === "dark" ? "text-gray-300" : "text-gray-600";
  const iconColor = theme === "dark" ? "text-[#6dd3f9]" : "text-[#137CA4]";

  return (
    <div id="about" className="py-16 px-6 md:px-20">
      <div className="text-center mt-10 mb-10">
        <h2 className="text-4xl font-bold text-[#3c79b0] ">
          About US (ChintaMukt)
        </h2>
        <h2 className="text-lg font-bold text-[#6373b4]">
          Welcome to ChintaMukt — because you deserve peace.
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto font-semibold px-10">
          At ChintaMukt, we believe that mental health is just as important as
          physical health. In today’s fast-paced world, stress, anxiety, and
          emotional struggles have become increasingly common — and yet, many
          suffer in silence. Our platform is built with empathy, care, and
          science to help you explore your inner world through guided
          self-assessment tests and curated resources. Whether you're a student,
          a working professional, a homemaker, or simply someone trying to find
          clarity — we're here for you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-16 mt-12 text-center justify-items-center">
          {/* Card 1 */}
          <div className={cardStyle}>
            <FaBrain className={`text-4xl mx-auto mb-4 ${iconStyle}`} />
            <h3 className="text-xl font-bold mb-2 tracking-wide">
              Personalized Assessments
            </h3>
            <p className={`text-sm ${textStyle}`}>
              We provide tailored mental health tests designed for students,
              employees, and more.
            </p>
          </div>

          {/* Card 2 */}
          <div className={cardStyle}>
            <FaHeart className={`text-4xl mx-auto mb-4 ${iconStyle}`} />
            <h3 className="text-xl font-bold mb-2 tracking-wide">
              Emotional Insights
            </h3>
            <p className={`text-sm ${textStyle}`}>
              Our results are insightful yet simple, guiding you to understand
              your stress, anxiety, or depression levels.
            </p>
          </div>

          {/* Card 3 */}
          <div className={cardStyle}>
            <FaHandsHelping className={`text-4xl mx-auto mb-4 ${iconStyle}`} />
            <h3 className="text-xl font-bold mb-2 tracking-wide">
              Supportive Resources
            </h3>
            <p className={`text-sm ${textStyle}`}>
              We offer tips, routine planners, and improvement tracking to help
              you heal and grow.
            </p>
          </div>
        </div>
      </div>

      {/* Meet Our Mission Section */}
      <div className={sectionStyle}>
        <h2 className={headingStyle}>Meet Our Mission</h2>

        <p className={paragraphStyle}>
          At{" "}
          <span className={`font-semibold ${highlightStyle}`}>ChintaMukt</span>,
          we believe that mental wellness is not a luxury — it’s a necessity. In
          today’s fast-paced world, where stress, anxiety, and emotional burnout
          have become common companions, our mission is simple:
          <span className={`font-semibold ${highlightStyle}`}>
            {" "}
            to bring calm, clarity, and care back into people’s lives.
          </span>
        </p>

        <p className={`${paragraphStyle} mt-4`}>
          We want to empower every student, employee, homemaker, and individual
          to understand their emotional state better. Our assessments are
          crafted with care — not to label you, but to guide you. Mental health
          is not a one-size-fits-all approach, and that's why our platform
          provides personalized pathways to healing.
        </p>

        <p className={`${paragraphStyle} mt-4`}>
          Whether you're taking your first step toward healing, or simply
          checking in on your peace, we're here to walk that journey with you.
          We’re not just an app; we are a companion, a safe space, and a gentle
          nudge reminding you:
          <span className={`italic font-medium ${highlightStyle}`}>
            {" "}
            "Your mind deserves the same care as your body."
          </span>
        </p>

        <div className="mt-8 flex justify-center">
          <button className={buttonStyle}>Start Your Healing Journey 💙</button>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div
        className={`${
          theme === "dark" ? "bg-[#0b1623]" : "bg-white"
        } py-16 px-6 md:px-20`}
      >
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-4 ${
            theme === "dark" ? "text-[#3c79b0]" : "text-[#bd5889]"
          }`}
        >
          Why Choose Us
        </h2>

        <p
          className={`text-center max-w-3xl mx-auto mb-12 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          At ChintaMukt, we go beyond just mental health assessments — we
          provide trust, innovation, and care designed to support every
          individual’s healing journey.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Repeatable Card */}
          {[
            {
              icon: <FaSmile />,
              title: "User-Friendly Experience",
              text: "Designed for ease and simplicity, even if you're not tech-savvy.",
            },
            {
              icon: <FaLock />,
              title: "Privacy First",
              text: "Your data stays safe with us — fully secure, fully confidential.",
            },
            {
              icon: <FaClock />,
              title: "Quick Assessments",
              text: "Get meaningful insights in just a few minutes.",
            },
            {
              icon: <FaUserCheck />,
              title: "Personalized Results",
              text: "Every result is tailored to match your emotional and mental profile.",
            },
            {
              icon: <FaMobileAlt />,
              title: "Mobile-Friendly",
              text: "Access your wellness tools anytime, anywhere, on any device.",
            },
            {
              icon: <FaChartLine />,
              title: "Track Your Progress",
              text: "Monitor your mental health growth and improvement over time.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className={`${cardBg} p-6 rounded-xl shadow-md hover:shadow-lg transition`}
            >
              <div className={`text-4xl mb-4 mx-auto ${iconColor}`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {card.title}
              </h3>
              <p className={`text-center text-sm ${cardText}`}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Quote */}
      <div
        className={`${
          theme === "dark" ? "bg-[#6373b4]" : "bg-[#137CA4]"
        } text-white text-center p-6 shadow`}
      >
        <h2 className="text-xl italic">
          "Healing takes time, and asking for help is a courageous step."
        </h2>
      </div>
    </div>
  );
};

export default About;
