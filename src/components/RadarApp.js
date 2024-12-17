import React, { useState } from "react";
import ObjectEntry from "./ObjectEntry";
import ObjectList from "./ObjectList";
import Radar from "./Radar";

function RadarApp() {
  const [objects, setObjects] = useState([]);
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
    setDots((prevDots) => [...prevDots, { x: coorX, y: coorY }]);
  };

  return (
    <div className="RadarApp">
      <h1>Radar Simulator (range 10m)</h1>
      <h3>{JSON.stringify(dots)}</h3>

      <Radar dots={dots}></Radar>

      <ObjectEntry onSubmit={addObject} />

      <ObjectList objects={objects} />
    </div>
  );
}

export default RadarApp;
