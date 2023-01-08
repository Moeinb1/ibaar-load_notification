import React from "react";

const ButtonWrapper = ({ children, className = "", row = false }) => {
  return (
    <div
      className={`flex ${
        row ? "flex-row" : "flex-col"
      } gap-y-16 pb-12 ${className}`}
    >
      {children}
    </div>
  );
};

export default ButtonWrapper;
