// AlertComponent.js
import React from "react";

export default function Alert({ showAlert, message , color}) {
  return (
    showAlert && (
      <div className={`${color} p-4 rounded absolute top-10 left-1/2 transform -translate-x-1/2 w-500`} style={{width:"100%", maxWidth:"500px", zIndex:9999}}>
        <p className="text-green-800 text-center" style={{fontSize:"18px"}}>{message}</p>
      </div>
    )
  );
}
