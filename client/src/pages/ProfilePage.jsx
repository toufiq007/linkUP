import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import useProfile from "../hooks/useProfile";
import { actions } from "../actions";
import EditIcon from "../assets/icons/edit.svg";
import ProfileInfo from "../components/profile/ProfileInfo";
import MyPosts from "../components/profile/MyPosts";

const ProfilePage = () => {
  const { api } = useAxios();
  const { auth } = useAuth();
  const { state, dispatch } = useProfile();
  const [profileData, setProfileData] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      dispatch({ type: actions.profile.DATA_FETCHING });
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        console.log(response.data);
        // setProfileData(response?.data?.user);
        // setPosts(response?.data?.posts);
        if (response.status === 200) {
          dispatch({ type: actions.profile.DATA_FETCHED, data: response.data });
        }
      } catch (err) {
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: err.message,
        });
        console.log(err);
      }
    };

    fetchProfile();
  }, []);

  if (state?.loading) <div>fetching your data...</div>;

  return (
    <div>
      <div className="container">
        {/* <!-- profile info --> */}
        <ProfileInfo />
        {/* <!-- end profile info --> */}

        {/* <!-- post  --> */}
       <MyPosts/>
        {/* <!-- post ends --> */}
      </div>
    </div>
  );
};

export default ProfilePage;
