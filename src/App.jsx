import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Features from "./components/Features";
import About from "./components/About";
import CTA from "./components/CTA";
import Navbar from "./components/Navbar";

function Home({ darkMode, setDarkMode }) {
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Features />
      <Services />
      <CTA />
      <Footer />
    </>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
      </Routes>
    </Router>
  );
}
export default App;
