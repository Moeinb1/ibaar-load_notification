import axios from "axios";
import { setAxiosLoader } from "./loader";
export const axiosInstance = axios.create();
axiosInstance.defaults.baseURL = process.env.REACT_PUBLIC_APP_BASE_URL;
axiosInstance.interceptors.request.use(
  (request) => {
    if (!request.internalComponentLoader) {
      setAxiosLoader(true);
    }

    const token = localStorage.getItem("token");
    if (token && !request.notUseToken) {
      request.headers["Authorization"] = `Bearer ${token}`;
    }
    return request;
  },

  (error) => {
    setAxiosLoader(false);
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    setAxiosLoader(false);
    return response;
  },
  (error) => {
    setAxiosLoader(false);
    return Promise.reject(error);
  }
);
