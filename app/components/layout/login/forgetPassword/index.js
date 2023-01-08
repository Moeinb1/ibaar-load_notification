import React, { useState } from "react";
import StepRendering from "../../wrappers/StepRendering";
import EntryForgetPassword from "./EntryForgetPassword";
import EntryNewPassword from "./EntryNewPassword";

const ForgetPassWord = () => {
  const [step, setStep] = useState(0);
  return (
    <StepRendering step={step}>
      <EntryForgetPassword setStep={setStep} />
      <EntryNewPassword setStep={setStep} />
    </StepRendering>
  );
};

export default ForgetPassWord;
