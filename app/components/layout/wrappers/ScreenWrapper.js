import React from "react";

const ScreenWrapper = ({ children, className = "" }) => {
  return (
    <div
      // overflow-y-scroll must be here
      className={`flex flex-col w-full h-full ${className}`}
    >
      {children}
    </div>
  );
};

export default ScreenWrapper;
