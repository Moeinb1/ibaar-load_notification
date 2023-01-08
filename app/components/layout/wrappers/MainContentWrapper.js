import React from "react";

const MainContentWrapper = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`flex-1 w-full mt-12 flex flex-col py-2 justify-between   ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default MainContentWrapper;
