import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { About, Contact, Hero, Navbar, Tech, Works, Footer } from "./components";
import { StarsCanvas } from "./components/canvas";
import CustomCursor from "./components/CustomCursor";

const MainLayout = () => {
  const [theme, setTheme] = useState("light");

  // Toggle theme function passed to Navbar
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  // Check system preference or default
  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    // Default to light as requested, but respect preference if needed. 
    // For now, force light start but allow toggle.
    document.documentElement.classList.remove("dark");
    setTheme("light");
  }, []);


  return (
    <div className={`relative z-0 bg-primary dark:bg-dark-bg text-primary dark:text-dark-text transition-colors duration-300`}>
      <CustomCursor />
      {/* Removed bg-hero-pattern, using clean background */}
      <div className='bg-primary dark:bg-dark-bg transition-colors duration-300'>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero />
      </div>
      <About />
      <Tech />
      <Works />
      <div className='relative z-0'>
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
