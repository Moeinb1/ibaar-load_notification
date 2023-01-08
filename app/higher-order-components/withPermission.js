import React from "react";
import { useSelector } from "react-redux";

const withPermission = (Component, requiredPermission) => {
  const ComponentParent = (props) => {
    const userPermissions = useSelector((state) => state);
    const hasPermission = requiredPermission.every((requiredPermission) =>
      userPermissions.includes(requiredPermission)
    );
    return hasPermission ? <Component /> : null;
  };
  return ComponentParent;
};

export default withPermission;
