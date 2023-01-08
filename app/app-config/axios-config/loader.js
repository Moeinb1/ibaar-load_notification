import { Spin } from "antd";
import React, { useState } from "react";

let setLoader;
export const PublicLoader = () => {
  const [localLoader, setLocalLoader] = useState(false);
  setLoader = setLocalLoader;
  if (!localLoader) return null;
  return (
    <div className="absolute z-50 flex bg-sky-200 bg-opacity-20 w-full h-full">
      <Spin className="w-full mx-auto my-auto " size="large" />
    </div>
  );
};

export const setAxiosLoader = (value) => {
  setLoader(value);
};
