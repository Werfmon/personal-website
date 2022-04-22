import React, { useEffect } from "react";
import Home from "./Components/Home";
import Experience from "./Components/Experience";
import About from "./Components/About";
import ParticlesComp from "./Components/ParticlesComp";

export default function App() {
  useEffect(() => {
    let el = document.querySelectorAll("#tsparticles")[0].style;
    let canvas = document.querySelectorAll("#tsparticles canvas")[0].style;

    el.position = "relative";
    el.height = "100vh";

    canvas.position = "absolute";
    canvas.height = "100vh";
  }, []);
  return (
    <>
      <div style={{ height: "100vh" }}>
        <ParticlesComp />
        <Home />
      </div>
      <About />
      <Experience />
    </>
  );
}
