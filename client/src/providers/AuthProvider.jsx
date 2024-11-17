/* eslint-disable react/prop-types */

import { useState } from "react";
import { AuthContext } from "../context/indext";

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
