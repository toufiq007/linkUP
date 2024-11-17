import { useContext, useDebugValue } from "react";
import { AuthContext } from "../context/indext";

export const useAuth = () => {
  const { auth } = useContext(AuthContext);
  useDebugValue(auth, (auth) =>
    auth?.user ? "user logged in..." : "user Logged out"
  );
  return useContext(AuthContext);
};
