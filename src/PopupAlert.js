// src/PopupAlert.js
import React from "react";
import "./PopupAlert.css";

const PopupAlert = ({ type, shape, message, isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="popup-overlay">
          <div className={`popup-alert ${type} ${shape}`}>
            <span>{message}</span>
            <button className="close-btn" onClick={onClose}>
              ✖
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupAlert;
