import React from "react";
import HeaderComp from "./Components/HeaderComp";
import NavBar from "./Components/NavBar";
import ParticlesComp from "./Components/ParticlesComp";

export default function App() {
  return (
    <>
    <NavBar />
      <ParticlesComp />
      <HeaderComp />
    </>
  );
}
