const mongoose = require("mongoose");

// Define how your question data will look
const questionSchema = new mongoose.Schema({
  question: String,
  options: [
    {
      label: String,
      value: String,
    },
  ],
  // answer: String,
});

// Create the model based on the schema
const question = mongoose.model("Question", questionSchema);

module.exports = question; // Make sure to export the model so it can be used elsewhere
