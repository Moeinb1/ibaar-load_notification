import privateRoutesConfig from "app/app-config/private-routes-config";
import React from "react";
import { useSelector } from "react-redux";

const useHasUserPermission = () => {
  let userPermission = useSelector((state) => state.userSlice.permissions);

  const hasUserPermission = (permission) => {
    if (Object.keys(userPermission).includes(permission)) return true;
    return false;
  };

  const hasRoutePermission = (route) => {
    if (route == "/403" || route == "/404") {
      return true;
    }
    let routePermission;
    privateRoutesConfig.forEach((item) => {
      if (item.path == route) {
        return (routePermission = item?.permission);
      } else if (item?.children?.length) {
        item?.children.map((child) => {
          if (child?.path == route) {
            return (routePermission = child?.permission);
          }
        });
      }
    });
    return hasUserPermission(routePermission);
  };
  return { hasUserPermission, hasRoutePermission };
};

export default useHasUserPermission;
