import React, { useEffect } from "react";
import Home from "./Components/Home";
import Experience from "./Components/Experience";
import About from "./Components/About";
import ParticlesComp from "./Components/ParticlesComp";

export default function App() {

  return (
    <>
      <div style={{ height: "100vh" }}>
        <Home />
        <ParticlesComp />
      </div>
      <About />
      <Experience />
    </>
  );
}
