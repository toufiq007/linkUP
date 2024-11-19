import { useContext } from "react";
import { ProfileContext } from "../context/indext";

const useProfile = () => {
  return useContext(ProfileContext);
};

export default useProfile;
