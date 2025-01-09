// src/app/components/Notification.js

import React from "react";

export default function Notification({ type, message, onClose }) {
  if (!message) return null; // If no message, do not render the component

  // Determine styles based on the type of notification
  const isSuccess = type === "success";
  const bgColor = isSuccess ? "bg-green-100" : "bg-red-100";
  const textColor = isSuccess ? "text-green-800" : "text-red-800";
  const borderColor = isSuccess ? "border-green-300" : "border-red-300";

  return (
    <div
      className={`my-4 p-3 ${bgColor} ${textColor} ${borderColor} border rounded flex justify-between items-center`}
    >
      <span>{message}</span>
      {onClose && (
        <button
          className="ml-4 text-xl font-bold hover:opacity-60"
          onClick={onClose}
          aria-label="Close notification"
        >
          &times;
        </button>
      )}
    </div>
  );
}
