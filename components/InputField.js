import React from "react";

export default function InputField({ label, id, value, onChange, error, type, setErrors , placeholder}) {
  return (
    <div className="mb-10 relative">
      <label className="block text-gray-500">{label}</label>
      <input
        className={`w-full p-2 rounded-md border text-gray-700 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e.target.value);
          if (!e.target.value) {
            setErrors((prevErrors) => ({ ...prevErrors, [id]: true }));
          } else {
            setErrors((prevErrors) => ({ ...prevErrors, [id]: false }));
          }
        }}
      />
      {error && (
        <p className="absolute text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
}
