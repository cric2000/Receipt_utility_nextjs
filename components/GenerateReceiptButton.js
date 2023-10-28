// GenerateReceiptButton.js
import React from "react";

export default function GenerateReceiptButton({ onClick, message, disable, color }) {
  const buttonStyle = {
    width: '100%',
    maxWidth: '250px',
    opacity: disable ? 0.5 : 1, 
  };

  const title=disable? 'Generate receipt first':'Click to generate receipt'
  return (
    
    <button
      type="button"
      onClick={onClick}
      disabled={disable}
      className={`${color} text-white p-2 rounded hover-bg-blue-600 ml-1 mb-1`}
      style={buttonStyle}
      title={`${title}`}
    >
      {message}
    </button>
  );
}
