/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ThreeDots from "../../assets/icons/3dots.svg";
import EditIcon from "../../assets/icons/edit.svg";
import DeleteIcon from "../../assets/icons/delete.svg";
import Time from "../../assets/icons/time.svg";
import { getTimeSince } from "../../utils/dateCompare";

const PostHeader = ({ post }) => {
  const [showModal, setShowModal] = useState(false);
  console.log(post, "this is from post header");

  const modifyTime = getTimeSince(post?.createAt);
  return (
    <>
      <header className="flex items-center justify-between gap-4">
        {/* <!-- author info --> */}
        <div className="flex items-center gap-3">
          <img
            className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
            src={`${import.meta.env.VITE_SERVER_BASE_URL}/${
              post?.author?.avatar
            }`}
            alt="avatar"
          />
          <div>
            <h6 className="text-lg lg:text-xl">{post?.author?.name}</h6>
            <div className="flex items-center gap-1.5">
              <img src={Time} alt="time" />
              <span className="text-sm text-gray-400 lg:text-base">
                {modifyTime}
              </span>
            </div>
          </div>
        </div>
        {/* <!-- author info ends --> */}

        {/* <!-- action dot --> */}
        <div className="relative">
          <button onClick={() => setShowModal(!showModal)}>
            <img src={ThreeDots} alt="3dots of Action" />
          </button>

          {/* <!-- Action Menus Popup --> */}
          {showModal && (
            <div className="action-modal-container">
              <button className="action-menu-item hover:text-lwsGreen">
                <img src={EditIcon} alt="Edit" />
                Edit
              </button>
              <button className="action-menu-item hover:text-red-500">
                <img src={DeleteIcon} alt="Delete" />
                Delete
              </button>
            </div>
          )}
        </div>
        {/* <!-- action dot ends --> */}
      </header>
    </>
  );
};

export default PostHeader;
