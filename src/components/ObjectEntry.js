import React, { useState } from "react";
import "./css/ObjectEntry.css";

function ObjectEntry({ onSubmit }) {
  const radarRadius = 100;
  const [angle, setAngle] = useState("");
  const [distance, setDistance] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (angle && distance) {
      const radian = (angle * Math.PI) / 180;
      const coorX = (distance * Math.cos(radian)) / radarRadius;
      const coorY = (distance * Math.sin(radian)) / radarRadius;
      onSubmit(
        angle,
        distance,
        radian.toFixed(2),
        coorX.toFixed(2),
        coorY.toFixed(2)
      );
      setAngle("");
      setDistance("");
    }
  };

  return (
    <div
      className="ObjectEntry"
      style={{
        border: "5px solid green",
        margin: "10px",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h3>Send Object</h3>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="angleEntry" style={{ display: "flex" }}>
          <h3 style={{ margin: "26px", fontSize: "2vh" }}>Angle:</h3>
          <input
            type="number"
            value={angle}
            onChange={(e) => setAngle(e.target.value)}
            placeholder="Enter angle (0-360)"
            required
            style={{
              border: "3px solid black",
              width: "25vw",
              height: "5vh",
              fontSize: "2vh",
            }}
          />
        </div>
        <br />
        <div className="distanceEntry" style={{ display: "flex" }}>
          <h3 style={{ margin: "10px", fontSize: "2vh" }}>Distance:</h3>
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            placeholder="Enter distance"
            max={100}
            min={0}
            required
            style={{
              border: "3px solid black",
              width: "25vw",
              height: "5vh",
              fontSize: "2vh",
            }}
          />
        </div>
        <div className="submitObject" style={{ padding: "20px" }}>
          <input
            type="submit"
            value="Send"
            style={{
              color: "white",
              height: "5vh",
              width: "15vw",
              backgroundColor: "#0f8c31",
              border: "3px solid black",
              borderRadius: "5px",
              fontSize: "3vh",
              fontWeight: "bold",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#4CAF50";
              e.target.style.transform = "scale(1.1)";
              e.target.style.boxShadow = "0px 0px 10px rgba(0, 128, 0, 0.5)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#0f8c31";
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "none";
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default ObjectEntry;
