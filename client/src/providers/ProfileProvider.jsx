/* eslint-disable react/prop-types */

import { ProfileContext } from "../context/indext";
import { useReducer } from "react";
import { profileReducer, initialState } from "../reducers/profileReducer";

export const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
};
