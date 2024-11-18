import { useEffect } from "react";
import { api } from "../api";
import axios from "axios";
import { useAuth } from "./useAuth";

const useAxios = () => {
  const { auth, setAuth } = useAuth();
  useEffect(() => {
    // add a request interseptors
    const requestInterseptors = api.interceptors.request.use(
      (config) => {
        // set auth token to the header
        const authToken = auth?.authToken;
        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
      },
      //   if error occured
      (error) => Promise.reject(error)
    );

    // add a response interseptors

    const responseInterseptors = api.interceptors.response.use(
      (response) => response,
      //  handing the error
      async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const refreshToken = auth?.refreshToken;
            const response = await axios.post(
              `${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh-token`,
              { refreshToken }
            );
            const { token } = response.data;
            setAuth({ ...auth, authToken: token });
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return axios(originalRequest);
          } catch (err) {
            console.log(err);
            throw err;
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.request.eject(requestInterseptors);
      api.interceptors.response.eject(responseInterseptors);
    };
  }, [auth?.authToken]);

  return { api };
};
export default useAxios;
