import React from "react";
import "./css/ObjectList.css";

function ObjectList({ objects }) {
  return (
    <div className="ObjectList">
      <h2>Object List</h2>
      {objects.length > 0 ? (
        <ul>
          {objects.map((object, index) => (
            <li key={index} className="object-item">
              <strong>Object {index + 1} →</strong> Angle: {object.angle}°, X:{" "}
              {object.coorX}, Y: {object.coorY}, Distance: {object.distance}m
            </li>
          ))}
        </ul>
      ) : (
        <p>No objects submitted yet.</p>
      )}
    </div>
  );
}

export default ObjectList;
