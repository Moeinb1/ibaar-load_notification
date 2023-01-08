import React, { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import { isLoggedIn as loggedInHook } from "app/utils/helper";
import dynamic from "next/dynamic";
import useHasUserPermission from "app/hooks/useHasUserPermission";

const PageWrapper = dynamic(() => import("./PageWrapper"), { ssr: false });

const AppWrapper = ({ children }) => {
  Router.events.on("routeChangeComplete", () => {
    setIsMount(true);
  });

  let router = useRouter();

  const [isMount, setIsMount] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { hasRoutePermission } = useHasUserPermission();
  let isUseLoggedIn = loggedInHook();

  const manageRouteSettingByUserPermission = async () => {
    // let hasUserPermissionForThisRoute = await hasRoutePermission(router.route);
    if (isUseLoggedIn) {
      setIsLoggedIn(true);
      setIsMount(true);

      // if (hasUserPermissionForThisRoute) {
      //   router.push(router.route, null, {
      //     shallow: false,
      //   });
      // } else {
      //   router.replace("/403");
      // }
    } else {
      setIsLoggedIn(false);
      router.replace("/login");
    }
  };

  useEffect(() => {
    manageRouteSettingByUserPermission();
    return () => {
      Router.events.off("routeChangeComplete");
    };
  }, [isUseLoggedIn, router.path]);

  if (isMount) {
    return isLoggedIn ? <PageWrapper>{children}</PageWrapper> : <>{children}</>;
  }
};

export default AppWrapper;
