import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsList from "./components/NewsList";
import NewsDetail from "./components/NewsDetail";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // You can add code here to toggle the dark/light mode
  };

  return (
    <Router>
      <div
        className={`App ${isDarkMode ? "dark-bg" : "light-bg"}`}
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<NewsList isDarkMode={isDarkMode} />} />
            <Route
              path="/article/:id"
              element={<NewsDetail isDarkMode={isDarkMode} />}
            />
          </Routes>
        </div>
        <Footer isDarkMode={isDarkMode} />
      </div>
    </Router>
  );
}

export default App;
