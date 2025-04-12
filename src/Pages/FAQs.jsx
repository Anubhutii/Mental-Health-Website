import { useState } from "react";
import { useTheme } from "../Context/ThemeProvider";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const FAQs = () => {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
          question: "Why should I check my mental health score?",
          answer:
        "Regularly checking your mental health score helps you stay aware of your emotional and psychological state. It acts as an early detection tool, allowing you to recognize symptoms of stress, anxiety, or depression before they become severe. Our test offers a safe, private space to reflect on your well-being and take proactive steps toward healing.",
    },
        {
          question: "Can I immediately get in touch with a mental health professional?",
          answer:
        "Yes! After taking the test, if your score indicates a concern, we provide instant access to resources where you can book a session or talk to a licensed therapist. Our platform is connected to trusted mental health partners, so you can get support when you need it the most.",
    },
        {
          question: "How accurate is this online test?",
          answer:
        "Our mental health test is designed with the guidance of psychologists and is based on validated screening tools. While it provides a good indication of your mental state, it is not a clinical diagnosis. The goal is to raise awareness and guide you to seek further support if needed. For a complete diagnosis, always consult a certified professional.",
    },
        {
          question:
            "Will the mental health professionals be able to address my mental health issues?",
            answer:
            "Absolutely. The professionals we connect you with are trained and certified in handling a wide range of mental health challenges — from everyday stress and anxiety to depression and emotional trauma. Whether you need therapy, counseling, or just someone to talk to, they are here to guide and support you throughout your journey.",
        },
        {
          question:
            "Where can I get more information related to Mental Health?",
          answer:
        "We’ve built a rich resource center where you can read blogs, view expert videos, and explore helpful guides related to mental wellness, coping strategies, mindfulness, and more. We also link to reputed global organizations like WHO, Mental Health America, and Mind UK for deeper insights and trusted data.",
    },
      ];
    
      const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };
  
    return (
      <div className={`py-16 px-6 md:px-20 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
      <h2 className={`text-3xl md:text-4xl font-bold text-center mb-8 ${
        theme === "dark" ? "text-[#3c79b0]" : "text-[#137ca4]"
      }`}>
        FREQUENTLY ASKED QUESTIONS
      </h2>
    
      <div className="grid md:grid-cols-2 gap-6 items-start">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-md transition duration-300 ${
              theme === "dark" ? "bg-[#876bae] text-white" : "bg-[#009BB3] text-white"
            }`}
          >
            <button
              className="w-full flex justify-between items-center p-4 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-left font-medium text-base">
                {index + 1}. {faq.question}
              </span>
              {activeIndex === index ? (
                <FaChevronDown className="text-white" />
              ) : (
                <FaChevronRight className="text-white" />
              )}
            </button>
            {activeIndex === index && (
              <div className={`px-4 pb-4 overflow-hidden transition-all duration-300 ease-in-out ${
                theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}>
                <p className="text-sm">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

    );
  };  

export default FAQs;