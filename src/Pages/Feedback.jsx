import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import feedbackAnimation from "../assets/feedbackk.json";
import { useTheme } from "../Context/ThemeProvider";

const emojis = [
  { icon: "😡", label: "Angry" },
  { icon: "😕", label: "Sad" },
  { icon: "😐", label: "Neutral" },
  { icon: "🙂", label: "Happy" },
  { icon: "😁", label: "Excited" },
];

const Feedback = () => {
  const { theme } = useTheme();

  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState({ emoji: "", comment: "" });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;
    let emojiError = "";
    let commentError = "";

    if (!selectedEmoji) {
      emojiError = "Please select how you're feeling.";
      hasError = true;
    }

    if (!comment.trim()) {
      commentError = "Please write a comment before submitting.";
      hasError = true;
    }

    if (hasError) {
      setErrors({ emoji: emojiError, comment: commentError });
      return;
    }

    // If no errors
    console.log({ selectedEmoji, comment });
    setSelectedEmoji(null);
    setComment("");
    setErrors({ emoji: "", comment: "" });
    setShowSuccess(true);

    // Hide message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <div id="Feedback"
      className={`min-h-screen flex flex-col md:flex-col items-center justify-center gap-10 transition-colors duration-500 p-6 ${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-purple-50 text-gray-800"
      }`}
    >
      <div className="text-center mb-6">
        <h1 className="text-5xl font-extrabold text-purple-500 relative inline-block">
          Feedback
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          We value your feedback as it helps us enhance your experience on our
          platform. <br /> Share your thoughts and let us know how we can
          improve!
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto">
        {/* Left Animation */}
        <div className="w-full md:w-2/3 flex justify-center items-center">
          <Lottie
            animationData={feedbackAnimation}
            loop={true}
            className="w-[350px] md:w-[650px] h-auto"
          />
        </div>

        {/* Right Feedback Section */}
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`w-full max-w-md rounded-2xl shadow-2xl p-6 md:p-8 transition-all duration-500 ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h2 className="text-2xl font-bold text-center mb-2">
              How are you feeling?
            </h2>
            <p className="text-sm text-center mb-6 text-gray-500 dark:text-gray-400">
              Your input helps us improve your experience. We appreciate it!
            </p>

            {/* Success Message */}
            {showSuccess && (
              <div className="text-green-600 text-center font-semibold bg-green-100 dark:bg-green-900 py-2 px-4 rounded-lg mb-4 shadow">
                💜 Thank you for your feedback!
              </div>
            )}

            {/* Emojis */}
            <div className="flex justify-center items-center gap-4 mb-2">
              {emojis.map((emoji, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedEmoji(emoji);
                    setErrors((prev) => ({ ...prev, emoji: "" }));
                  }}
                  className={`text-3xl relative transition-all p-2 rounded-full ${
                    selectedEmoji?.icon === emoji.icon
                      ? "bg-purple-100 shadow-inner ring-2 ring-purple-400"
                      : theme === "dark"
                      ? "hover:bg-gray-700"
                      : "hover:bg-purple-50"
                  }`}
                >
                  {emoji.icon}
                  {selectedEmoji?.icon === emoji.icon && (
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full shadow">
                      {emoji.label}
                    </span>
                  )}
                </motion.button>
              ))}
            </div>
            {errors.emoji && (
              <p className="text-red-500 text-sm text-center mb-4">
                {errors.emoji}
              </p>
            )}

            {/* Comment Box */}
            <form onSubmit={handleSubmit}>
              <textarea
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                  setErrors((prev) => ({ ...prev, comment: "" }));
                }}
                placeholder="Add a Comment..."
                className={`w-full border rounded-lg p-3 mb-2 resize-none transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                  theme === "dark"
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "border-purple-300"
                }`}
                rows="3"
              />
              {errors.comment && (
                <p className="text-red-500 text-sm mb-4">{errors.comment}</p>
              )}

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold rounded-lg shadow-md transition"
              >
                Submit Now 💌
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
