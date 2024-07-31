// src/AlertsPage.js
import React, { useState } from "react";
import Alert from "./Alert";
import PopupAlert from "./PopupAlert";
import "./Alert.css"; // Import CSS for animations and styling

const AlertsPage = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="container">
      <h1>Alert Variations</h1>

      {/* Different Types and Shapes */}
      <Alert type="success" shape="rounded">
        Success Rounded
      </Alert>
      <Alert type="error" shape="square">
        Error Square
      </Alert>
      <Alert type="warning" shape="pill">
        Warning Pill
      </Alert>
      <Alert type="info" shape="default">
        Info Default
      </Alert>

      <Alert type="success" shape="square">
        Success Square
      </Alert>
      <Alert type="error" shape="pill">
        Error Pill
      </Alert>
      <Alert type="warning" shape="default">
        Warning Default
      </Alert>
      <Alert type="info" shape="rounded">
        Info Rounded
      </Alert>

      {/* Button to Trigger Popup Alert */}
      <button
        onClick={handleOpenPopup}
        style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}
      >
        Show Popup Alert
      </button>

      {/* Popup Alert Component */}
      <PopupAlert
        type="success"
        shape="rounded"
        message="This is a success popup alert!"
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />
    </div>
  );
};

export default AlertsPage;
