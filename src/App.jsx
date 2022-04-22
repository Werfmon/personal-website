import React from "react";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Experience from "./Components/Experience";
import About from "./Components/About";
import ParticlesComp from "./Components/ParticlesComp";

export default function App() {
  return (
    <>
        <ParticlesComp />
        <Home />
      <About />
      <Experience />
    </>
  );
}
