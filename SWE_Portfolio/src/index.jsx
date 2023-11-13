import React from "react";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

const root = createRoot(document.getElementById("root")); // Replace 'root' with your root element ID

root.render(
  <Router>
    <App />
  </Router>
);
