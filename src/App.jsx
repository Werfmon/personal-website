import React from "react";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Experience from "./Components/Experience";
import About from "./Components/About";
import ParticlesComp from "./Components/ParticlesComp";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route
            path="/" 
            exact
            element={
              <>
                <ParticlesComp />
                <Home />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
