import React, { useState } from "react";
import ObjectEntry from "./ObjectEntry";
import ObjectList from "./ObjectList";
import Radar from "./Radar";

function RadarApp() {
  const [objects, setObjects] = useState([]);
  const sampleDots = [
    { x: 0.7, y: 0.2 },
    { x: 0.2, y: 0.3 },
    { x: 0.6, y: 0.1 },
    { x: 0.4, y: 0.6 },
    { x: 0.9, y: 0.7 },
  ];
  const [dots, setDots] = useState([]);
  const addObject = (angle, distance, radian, coorX, coorY) => {
    const newObject = {
      angle: parseFloat(angle),
      distance: parseFloat(distance),
      radian: parseFloat(radian),
      coorX: parseFloat(coorX),
      coorY: parseFloat(coorY),
    };

    setObjects((prevObjects) => [...prevObjects, newObject]);
    setDots((prevDots) => [
      ...prevDots,
      { x: parseFloat(coorX), y: parseFloat(coorY) },
    ]);
  };

  return (
    <div className="RadarApp" style={{ backgroundColor: "green" }}>
      <h1
        style={{
          position: "fixed",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          color: "green",
        }}
      >
        Radar Simulator (range 100m)
      </h1>
      <div
        className="RadarDiv"
        style={{
          position: "fixed",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -20%)",
          textAlign: "center",
        }}
      >
        <Radar dots={dots}></Radar>
      </div>
      <br />
      <div
        className="ObjectEntryDiv"
        style={{
          position: "fixed",
          top: "95%",
          left: "50%",
          transform: "translate(-50%, -95%)",
          textAlign: "center",
        }}
      >
        <ObjectEntry onSubmit={addObject} />
      </div>
      <div
        className="ObjectListDiv"
        style={{ position: "fixed", right: "10%", top: "10%" }}
      >
        <ObjectList objects={objects} />
      </div>
    </div>
  );
}

export default RadarApp;
