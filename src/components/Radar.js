import React, { useEffect, useRef } from "react";
import "./css/Radar.css"; // Import the CSS styles

const Radar = ({ dots }) => {
  const radarRef = useRef(null);

  // Utility functions
  const getCSSVal = (e, v) => e.style.getPropertyValue(v);
  const mod = (n, m) => ((n % m) + m) % m; // Fix negative Modulo
  const PI = Math.PI;
  const TAU = PI * 2;

  // Radar effect logic
  useEffect(() => {
    const elRadar = radarRef.current;
    const elBeam = elRadar.querySelector(".beam");
    const elsDot = elRadar.querySelectorAll(".dot");

    const update = () => {
      const beamAngle =
        (parseFloat(getComputedStyle(elBeam).getPropertyValue("rotate")) * PI) /
          180 || 0;

      elsDot.forEach((elDot) => {
        const x = getCSSVal(elDot, "--x") - 0.5;
        const y = getCSSVal(elDot, "--y") - 0.5;
        const dotAngle = mod(Math.atan2(y, x), TAU);
        const opacity = mod(dotAngle - beamAngle, TAU) / TAU;
        elDot.style.opacity = opacity;
      });

      requestAnimationFrame(update);
    };

    update();
  }, []);

  return (
    <div className="radar" ref={radarRef}>
      <div className="beam"></div>
      {dots.map((dot, index) => (
        <div
          key={index}
          className="dot"
          style={{ "--x": dot.x, "--y": dot.y }}
        ></div>
      ))}
    </div>
  );
};

export default Radar;
