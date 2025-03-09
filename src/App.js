import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Gallery from "./Gallery";
import About from "./About";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
