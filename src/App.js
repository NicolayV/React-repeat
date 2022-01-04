import React from "react";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <div className="navbar__links">
          <Link to="/">Posts</Link>
          <Link to="about">About</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
