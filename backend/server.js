const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
require("dotenv").config();
const Question = require("./models/question");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// MongoDB Connect
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Define the question schema

// Read the questions from the JSON file and insert them into MongoDB
fs.readFile("mental_health_questions.json", "utf8", async (err, data) => {
  if (err) {
    console.error("Error reading the JSON file:", err);
    return;
  }

  const questions = JSON.parse(data); // Parse the JSON data

  try {
    // Insert each question into the MongoDB collection
    for (const questionData of questions) {
      const question = new Question(questionData);
      await question.save(); // Save each question document to MongoDB
    }
    console.log("Questions inserted successfully!");
  } catch (err) {
    console.error("Error inserting data:", err);
  }
});

// API route to fetch questions from MongoDB
app.get("/api/questions", async (req, res) => {
  try {
    const questions = await Question.find(); // Fetch all questions from MongoDB
    res.json(questions); // Send the questions as JSON response
    // res.status(200).json(questions);
  } catch (err) {
    res.status(500).json({ message: "Error fetching questions" });
  }
});

// Route to add a new question
app.post("/api/addQuestion", async (req, res) => {
  const { question, options } = req.body;

  try {
    const newQuestion = new Question({
      question,

      options,
      // answer,
    });

    await newQuestion.save(); // Save to the database
    res.status(201).json({ message: "Question added successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error adding question", details: err });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
