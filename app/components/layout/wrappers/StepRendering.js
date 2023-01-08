import React from "react";

const StepRendering = ({ step, children }) => {
  return (
    <>
      {children
        .filter((child) => typeof child == "object")
        .map((child, i) => step === i && <React.Fragment key={i}>{child}</React.Fragment>)}
    </>
  );
};

export default StepRendering;
