import React, { useState } from "react";

function ObjectEntry({ onSubmit }) {
  const radarRadius = 10;
  const [angle, setAngle] = useState("");
  const [distance, setDistance] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (angle && distance) {
      const radian = (angle * Math.PI) / 180;
      const coorX = (distance * Math.cos(radian)) / radarRadius; // Keep as number
      const coorY = (distance * Math.sin(radian)) / radarRadius; // Keep as number
      onSubmit(
        angle,
        distance,
        radian, // Keep as number
        coorX, // Keep as number
        coorY // Keep as number
      );
      setAngle("");
      setDistance("");
    }
  };

  return (
    <div className="ObjectEntry">
      <form onSubmit={handleSubmit}>
        <div className="angleEntry" style={{ display: "flex" }}>
          <h3>Angle:</h3>
          <input
            type="number"
            value={angle}
            onChange={(e) => setAngle(e.target.value)}
            placeholder="Enter angle (0-360)"
            required
          />
        </div>
        <div className="distanceEntry" style={{ display: "flex" }}>
          <h3>Distance:</h3>
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            placeholder="Enter distance"
            required
          />
        </div>
        <div className="submitObject">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default ObjectEntry;
