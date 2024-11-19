import { Link } from "react-router-dom";
import HomeIcon from "../../assets/icons/home.svg";
import Notification from "../../assets/icons/notification.svg";
import Logout from "../Logout";
import { useAuth } from "../../hooks/useAuth";
import useProfile from "../../hooks/useProfile";
const Header = () => {
  const { auth } = useAuth();
  const { state } = useProfile();

  const user = state?.user ?? auth?.user;
  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
        <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* <!-- Logo --> */}
          <Link to="/">
            <h1
              style={{ fontFamily: "Ga Maamli", letterSpacing: "5px" }}
              className="text-4xl"
            >
              linkUP
            </h1>
          </Link>
          {/* <!-- nav links  --> */}

          <div className="flex items-center space-x-4">
            <Link to="/" className="btn-primary">
              <img src={HomeIcon} alt="Home" />
              Home
            </Link>
            <button className="icon-btn">
              <img src={Notification} alt="Notification" />
            </button>

            <Logout />

            <Link to="/profile" className="flex-center !ml-8 gap-3">
              <span className="text-lg font-medium lg:text-xl">
                {user?.firstName}
              </span>
              <img
                className="max-h-[32px] max-w-[32px] lg:max-h-[44px] lg:max-w-[44px]"
                src={`${import.meta.env.VITE_SERVER_BASE_URL}/${user?.avatar}`}
                alt=""
              />
            </Link>
          </div>
          {/* <!-- nav links ends --> */}
        </div>
      </nav>
    </>
  );
};

export default Header;
