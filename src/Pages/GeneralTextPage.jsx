import React, { useState } from "react";
import { useTheme } from "../Context/ThemeProvider";
import img from "../assets/testImg.png";
import { motion, AnimatePresence } from "framer-motion";
import bg from "../assets/quizPageLight.jpg";

const GeneralTextPage = () => {
  const { theme } = useTheme();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      question: "How often do you feel stressed?",
      options: ["Never", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you feel anxious most days?",
      options: ["Never", "Rarely", "Sometimes", "Always"],
    },
    {
      question: "Are you sleeping well?",
      options: ["Yes", "No, sometimes", "No, rarely", "Not at all"],
    },
    {
      question: "Do you often feel overwhelmed?",
      options: ["Never", "Rarely", "Sometimes", "Often"],
    },
    {
      question: "Do you experience mood swings?",
      options: ["Never", "Rarely", "Sometimes", "Often"],
    },
    {
      question: "Have you been feeling sad or low for a while?",
      options: ["No", "Yes, sometimes", "Yes, often", "Yes, always"],
    },
    {
      question: "Do you feel like you can't cope with your responsibilities?",
      options: ["Never", "Rarely", "Sometimes", "Often"],
    },
    {
      question: "Do you find it hard to relax or unwind?",
      options: ["No", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you have trouble concentrating?",
      options: ["No", "Sometimes", "Often", "Always"],
    },
  ];

  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer);
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = answer;
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      setSelectedAnswer(null);
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setSubmitted(false);
  };

  const progressPercentage =
    ((currentQuestion + (selectedAnswer ? 1 : 0)) / questions.length) * 100;

  return (
    <div
      className={`min-h-screen w-full px-6 py-10 flex justify-center items-center relative transition-all duration-300`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-opacity-10 z-0" />

      {/* Main content */}
      <div className="relative max-w-6xl w-full mt-20 flex flex-col md:flex-row gap-10 items-center justify-between bg-white/30 dark:bg-white/10 backdrop-blur-md shadow-xl rounded-2xl p-8">
        {/* Left: Image */}
        <div className="w-full md:w-[60%] flex justify-center items-center mb-6 md:mb-0">
          <img
            src={img}
            alt="Mental Health"
            className="max-h-[500px] object-contain"
          />
        </div>

        {/* Right: Quiz */}
        <div className="w-full md:w-[55%]">
          <h1 className="text-3xl font-bold mb-4 text-[#1D94D0] text-center md:text-left">
            Mental Health Assessment
          </h1>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="p-6"
              >
                <p className="text-lg font-medium mb-4 text-[#082e8c]">
                  {questions[currentQuestion].question}
                </p>
                <div className="flex flex-col gap-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerChange(option)}
                      className={`px-4 py-2 rounded-lg border text-gray-800 text-left ${
                        selectedAnswer === option
                          ? "bg-gray-100 text-blue-900 font-semibold"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {/* Progress Bar */}
                <div
                  className="h-2 w-[60%] mt-10 bg-gray-300 rounded-full  ml-24
           overflow-hidden"
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#43C6F1] to-[#1D94D0]"
                    style={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                <div className="mt-6 flex justify-between">
                  {currentQuestion < questions.length - 1 ? (
                    <button
                      onClick={handleNext}
                      disabled={selectedAnswer === null}
                      className="px-4 py-2 bg-gradient-to-r from-[#43C6F1] to-[#1D94D0] text-white font-semibold rounded-lg disabled:opacity-50"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className="px-6 py-2 bg-gradient-to-r from-[#43C6F1] to-[#1D94D0] text-white font-semibold rounded-lg"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="thankyou"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-6 text-center bg-green-50 dark:bg-green-900 rounded-xl shadow-md"
              >
                <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-4">
                  Thank you for completing the test!
                </h2>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Your responses will help us suggest better routines for you.
                </p>
                <button
                  onClick={handleRestart}
                  className="px-4 py-2 bg-gradient-to-r from-[#1D94D0] to-[#43C6F1] text-white font-semibold rounded-lg"
                >
                  Start Over
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default GeneralTextPage;
