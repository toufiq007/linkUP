import useProfile from "../../hooks/useProfile";
import ProfileBio from "./ProfileBio";
import ProfileImg from "./ProfileImg";

const ProfileInfo = () => {
  const { state } = useProfile();
  return (
    <>
      <div className="flex flex-col items-center py-8 text-center">
        {/* <!-- profile image --> */}
        <ProfileImg state={state} />
        <ProfileBio state={state} />
        <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
      </div>
    </>
  );
};

export default ProfileInfo;
