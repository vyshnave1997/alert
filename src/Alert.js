// src/Alert.js
import React from "react";
import "./Alert.css"; // Import the CSS file for styling

const Alert = ({ type, shape, children }) => {
  return <div className={`alert ${type} ${shape}`}>{children}</div>;
};

export default Alert;
