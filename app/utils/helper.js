import { useSelector } from "react-redux";

export function isArrayWithLength(arr) {
  return Array.isArray(arr) && arr.length;
}

export function GetAllowedRoutes(routes) {
  let userPermission = useSelector((state) => state.userSlice.permissions);

  return routes.filter(({ permission }) => {
    if (!permission) return true;
    else if (Object.keys(userPermission).includes(permission)) return true;
    else return false;
  });
}
export function isLoggedIn() {
  if (typeof window !== "undefined") {
    let token = localStorage?.getItem("token");
    if (token && token.length) return true;
    return false;
  }
}

export function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
