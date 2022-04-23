import React from "react";
import Particles from "react-tsparticles";

export default function ParticlesComp() {

  return (
    <Particles
      id="tsparticles"
      params={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 40,
              duration: 2,
              opacity: 0.8,
              size: 20,
            },
            push: {
              quantity: 3,
            },
            repulse: {
              distance: 100,
              duration: 5,
            },
          },
        },

        particles: {
          color: {
            value: ["#0013de", "#0118ef", "#0006b1"],
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            random: false,
            speed: 1,
            straight: true,
            outMode: "bounce",
          },
          number: {
            density: {
              enable: true,
              value_area: 400,
            },
            value: 4,
          },
          opacity: {
            value: 0.7,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 10,
          },
        },
        detectRetina: false,
      }}
    />
  );
}
