import React, { memo } from "react";

import privateRoutesConfig from "../app-config/private-routes-config";
import { GetAllowedRoutes, isLoggedIn } from "../utils/helper";

const usePrivateRoutes = () => {
  let allowedRoutes = [];
  if (!isLoggedIn()) {
    allowedRoutes = GetAllowedRoutes(privateRoutesConfig);
  } else {
    //navigate to login
    return;
  }
  return { allowedRoutes };
};
export default usePrivateRoutes;
