/* eslint-disable react/prop-types */
import EditIcon from "../../assets/icons/edit.svg";
import useProfile from "../../hooks/useProfile";
import useAxios from "../../hooks/useAxios";
import { useRef } from "react";
import { actions } from "../../actions";
const ProfileImg = () => {
  const { state, dispatch } = useProfile();
  const { api } = useAxios();

  const fileUplaodRef = useRef(null);

  const handleFileUpload = (event) => {
    event.preventDefault();
    // Trigger file input click
    fileUplaodRef.current.click();
    // Listen for file input change if needed
    fileUplaodRef.current.addEventListener("change", uploadDispayFile);
  };

  const uploadDispayFile = async () => {
    try {
      const formData = new FormData();

      for (const file of fileUplaodRef.current.files) {
        formData.append("avatar", file);
      }
      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
          state?.user?.id
        }/avatar`,
        formData
      );
      console.log(response.data, "it is from profile page");
      if (response.status === 200) {
        console.log(response.data);
        dispatch({ type: actions.profile.IMAGE_UPDATED, data: response.data });
      }
    } catch (err) {
      dispatch({ type: actions.profile.DATA_FETCH_ERROR, error: err.message });
      console.log(err);
    }
  };

  return (
    <>
      <div className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
        <img
          className="max-w-full"
          src={`${import.meta.env.VITE_SERVER_BASE_URL}/${state?.user?.avatar}`}
          alt={`${state?.user?.firstName}`}
        />

        <form>
          <button
            type="submit"
            onClick={handleFileUpload}
            className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
          >
            <img src={EditIcon} alt="Edit" />
          </button>
          <input type="file" id="file" ref={fileUplaodRef} hidden />
        </form>
      </div>
    </>
  );
};

export default ProfileImg;
