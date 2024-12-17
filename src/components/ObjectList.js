import React from "react";

function ObjectList({ objects }) {
  return (
    <div className="ObjectList">
      <h2>Object List</h2>
      {objects.length > 0 ? (
        <ul>
          {objects.map((object, index) => (
            <li key={index}>
              Object {index + 1} → Angle: {object.angle}°, X: {object.coorX}, Y:{" "}
              {object.coorY}, Distance:
              {object.distance}m
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
