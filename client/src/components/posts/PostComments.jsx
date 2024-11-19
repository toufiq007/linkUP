/* eslint-disable react/prop-types */
import { useState } from "react";
import PostComment from "./PostComment";

const PostComments = ({ post }) => {
  const [showComments, setShowComments] = useState(false);
  console.log(post);
  return (
    <>
      <div>
        {/* <!-- comment input box --> */}
        <div className="flex-center mb-3 gap-2 lg:gap-4">
          <img
            className="max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]"
            src="./assets/images/avatars/avatar_1.png"
            alt="avatar"
          />

          <div className="flex-1">
            <input
              type="text"
              className="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
              name="post"
              id="post"
              placeholder="What's on your mind?"
            />
          </div>
        </div>
        {/* <!-- comment filter button --> */}
        <div className="mt-4">
          <button
            onClick={() => setShowComments(!showComments)}
            className="text-gray-300 max-md:text-sm"
          >
            All Comment ▾
          </button>
        </div>
        {/* <!-- comments --> */}
        {showComments &&
          post &&
          post?.comments?.map((item) => (
            <PostComment key={item.id} item={item} />
          ))}

        {/* <!-- comments ends --> */}
      </div>
    </>
  );
};

export default PostComments;
