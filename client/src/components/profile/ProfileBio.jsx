/* eslint-disable react/prop-types */
import { useState } from "react";
import EditIcon from "../../assets/icons/edit.svg";
import CloseIcon from "../../assets/icons/close.svg";
import useAxios from "../../hooks/useAxios";
import useProfile from "../../hooks/useProfile";
import { actions } from "../../actions";
const ProfileBio = () => {
  const { state, dispatch } = useProfile();
  const [bio, setBio] = useState(state?.user?.bio);
  const [editMode, setEditMode] = useState(false);
  const { api } = useAxios();

  const handleEditBio = async () => {
    console.log(state?.user?.bio);
    dispatch({ type: actions.profile.DATA_FETCHING });
    try {
      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${state?.user?.id}`,
        { bio }
      );
      if (response.status === 200) {
        dispatch({
          type: actions.profile.USER_DATA_EDITED,
          data: response.data,
        });
        // console.log(response.data);
        setEditMode(false);
      }
    } catch (err) {
      dispatch({ type: actions.profile.DATA_FETCH_ERROR, error: err.message });
      console.log(err);
    }
  };

  return (
    <>
      {/* <!-- name , email --> */}
      <div>
        <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
          {state?.user?.firstName + state?.user?.lastName}
        </h3>
        <p className="leading-[231%] lg:text-lg">{state?.user?.email}</p>
      </div>

      {/* <!-- bio --> */}
      <div className="mt-4 flex items-start gap-2 lg:mt-6">
        <div className="flex-1">
          {editMode ? (
            <textarea
              rows={5}
              cols={50}
              value={bio}
              className="text-gray-500 p-2"
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          ) : (
            <p className="leading-[188%] text-gray-400 lg:text-lg">
              {state?.user?.bio}
            </p>
          )}
        </div>
        {/* <!-- Edit Bio button. The Above bio will be editable when clicking on the button --> */}
        {editMode ? (
          <button
            className="flex-center h-7 w-7 rounded-full"
            onClick={handleEditBio}
          >
            <img src={CloseIcon} alt="Edit" />
          </button>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className="flex-center h-7 w-7 rounded-full"
          >
            <img src={EditIcon} alt="Edit" />
          </button>
        )}
      </div>
    </>
  );
};

export default ProfileBio;
