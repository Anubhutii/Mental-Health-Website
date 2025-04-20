import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeProvider";
import setupLocatorUI from "@locator/runtime";

if (process.env.NODE_ENV === "development") {
  setupLocatorUI();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ThemeProvider>
    <App />
  </ThemeProvider>
  // </React.StrictMode>
);
