/* eslint-disable react/prop-types */
const PostComment = ({ item }) => {
  return (
    <>
      <div className="space-y-4 divide-y divide-lighterDark pl-2 lg:pl-3">
        {/* <!-- single comment --> */}
        <div className="flex items-center gap-3 pt-4">
          <img
            className="max-w-6 max-h-6 rounded-full"
            src={`${import.meta.env.VITE_SERVER_BASE_URL}/${
              item?.author?.avatar
            }`}
            alt="avatar"
          />
          <div>
            <div className="flex gap-1 text-xs lg:text-sm">
              <span>{item?.author?.name} </span>
              <span>{item?.comment}</span>
            </div>
          </div>
        </div>
        {/* <!-- single comment ends --> */}

        {/* <!-- single comment --> */}
        <div className="flex items-center gap-3 pt-4">
          <img
            className="max-w-6 max-h-6 rounded-full"
            src="./assets/images/avatars/avatar_1.png"
            alt="avatar"
          />
          <div>
            <div className="flex gap-1 text-xs lg:text-sm">
              <span>Sumit Saha: </span>
              <span>Great Sumit Saha dada ❤</span>
            </div>
          </div>
        </div>
        {/* <!-- single comment ends --> */}
      </div>
    </>
  );
};

export default PostComment;
