import React from "react";

function ForminputGroup({ label, type, value, onChange }) {
  return (
    <>
      <div className="input-container">
        <label htmlFor="input" className="form-label">
          {label}
        </label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="form-input"
        />
      </div>
    </>
  );
}

export default ForminputGroup;
