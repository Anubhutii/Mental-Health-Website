import React, { useState, useEffect } from "react";
import bg from "../assets/quizPageLight.jpg";
import testImg from "../assets/quiz.json";
import GaugeChart from "../Components/GuardChart";
import questionsData from "../data/mental_health_questions.json"; // Adjust the path as needed
import { IoCloseCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";

const GeneralTextPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userResponses, setUserResponses] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [loading, setLoading] = useState(false); // Loading state
  const [questions, setQuestions] = useState([]);

  // const questions = questionsData;
  const navigate = useNavigate();

  const answerScores = {
    "Not at all": 0,
    "Several days": 1,
    "More than half days": 2,
    "Nearly every day": 3,
  };

  const handleAnswerChange = (answerValue) => {
    const score = parseInt(answerValue, 10);
    const newResponses = [...userResponses];
    newResponses[currentQuestion] = score;
    setUserResponses(newResponses);
  };

  const handleNext = () => {
    if (userResponses[currentQuestion] !== undefined) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmit = () => {
    setLoading(true); // Show loader when submit is clicked

    setTimeout(() => {
      const total = userResponses.reduce((acc, score) => acc + score, 0);
      setFinalScore(total);
      setSubmitted(true);
      setLoading(false); // Hide loader after 3 seconds
    }, 3000); // 3-second delay before showing the score
  };

  const getMentalHealthStatus = (score) => {
    if (score >= 0 && score <= 14) return "Mentally Stable 😊";
    if (score >= 15 && score <= 24) return "Mild Stress or Early Symptoms 😐";
    if (score >= 25 && score <= 34) return "Possible Anxiety or Depression 😟";
    if (score >= 35 && score <= 45)
      return "High Risk: Get Professional Help 😞";
    return "";
  };

  const progressPercentage =
    currentQuestion === 0
      ? 0
      : currentQuestion === questions.length - 1
      ? 98
      : (currentQuestion / (questions.length - 1)) * 100;

  const fetchingQuestions = async () => {
    try {
      setLoading(true); // Set loading to true when fetching questions
      const response = await fetch("http://localhost:5000/api/questions");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      // console.log("Fetched questions:", data);
      setQuestions(data); // Set the fetched questions data
      // Set loading to false once questions are fetched
    } catch (error) {
      console.error("Error fetching questions:", error);
    } finally {
      setLoading(false); // Set loading to false once questions are fetched
    }
  };

  useEffect(() => {
    console.log("Fetching questions...");

    fetchingQuestions();
    console.log("questionsData", questions);
  }, []);

  return (
    <div
      className="min-h-screen w-full flex justify-center items-center relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Loader: Full screen and centered */}
      {/* Main content: Hidden while loading */}(
      <div className="relative max-w-6xl mb-4 w-full flex flex-col md:flex-row gap-10 items-center justify-between bg-white/30 dark:bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl p-8">
        {/* Left animation */}
        <div className="w-full md:w-[60%] flex justify-center items-center mb-6 md:mb-0">
          <Lottie
            animationData={testImg}
            className="max-h-[500px] w-full object-contain"
          />
        </div>

        {/* Right quiz */}
        <div className="w-full md:w-[55%] relative">
          {!loading && (
            <div className="relative ">
              <IoCloseCircle
                onClick={() => navigate("/")}
                size={30}
                className="absolute right-0 top-1 text-gray-500 hover:text-blue-700 transition-colors duration-300 cursor-pointer"
              />
              <h1 className="text-3xl font-bold mb-4 text-[#1D94D0] text-center">
                Mental Health Assessment
              </h1>
            </div>
          )}

          {/* Loader Overlay only on the quiz area */}
          {loading && (
            <div className="absolute inset-0 top-[-200px] h-[50vh]  z-10 flex justify-center items-center rounded-2xl">
              <div className="flex-col gap-4 top-[200px] w-[50%] flex items-center justify-center">
                <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                  <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
                </div>
              </div>
            </div>
          )}

          {questions.length > 0 && !submitted && !loading && (
            <div className="p-6">
              <p className="text-lg font-medium mb-4 text-[#082e8c]">
                {questions[currentQuestion].question}
              </p>
              <div className="flex flex-col gap-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerChange(option.value)}
                    className={`px-4 py-2 rounded-lg border text-gray-800 text-left ${
                      userResponses[currentQuestion] === parseInt(option.value)
                        ? "bg-gray-100 text-blue-900 font-semibold"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              <div className="mt-6 flex justify-between items-center">
                {currentQuestion < questions.length - 1 ? (
                  <button
                    onClick={handleNext}
                    disabled={userResponses[currentQuestion] === undefined}
                    className="px-4 py-2 bg-gradient-to-r from-[#43C6F1] to-[#1D94D0] text-white font-semibold rounded-lg disabled:opacity-50"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={userResponses[currentQuestion] === undefined}
                    className="px-6 py-2 bg-gradient-to-r from-[#43C6F1] to-[#1D94D0] text-white font-semibold rounded-lg disabled:opacity-50"
                  >
                    Submit
                  </button>
                )}

                <div className="h-2 w-[60%] mr-16 bg-gray-50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#43C6F1] to-[#1D94D0] transition-all duration-500 ease-in-out"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Show result after loading */}
          {submitted && !loading && (
            <div className="p-8 text-center backdrop-blur-lg bg-white/10 dark:bg-white/10 rounded-2xl shadow-lg border border-teal-100/20 dark:border-teal-100/20">
              <h2 className="text-2xl font-semibold dark:text-blue-800 mb-4">
                Your Score is:
              </h2>

              <div className="flex justify-center items-center">
                <GaugeChart score={finalScore} />
              </div>

              <p className="text-lg mt-4">
                <span className="text-3xl font-bold text-[#082e8c]">
                  {finalScore}/45
                </span>
              </p>
              <p className="text-lg font-medium mt-4 text-[#082e8c]">
                {getMentalHealthStatus(finalScore)}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeneralTextPage;
