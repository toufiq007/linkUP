import { useNavigate } from "react-router-dom";
import LogoutIcon from "../assets/icons/logout.svg";
const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <>
      <button className="icon-btn" onClick={handleLogout}>
        <img src={LogoutIcon} />
      </button>
    </>
  );
};

export default Logout;
