import { Button } from "antd";
import React from "react";

const CustomButton = ({
  text,
  type = "primary",
  icon,
  className,
  ...props
}) => {
  return (
    <Button
      type={type}
      {...props}
      className={`bg-[#1677ff] flex justify-center  items-center ${className}`}
    >
      {text}
      {icon && icon}
    </Button>
  );
};

export default CustomButton;
