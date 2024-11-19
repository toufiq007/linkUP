/* eslint-disable react/prop-types */
import PostCard from "./PostCard";

const Postlist = ({ posts }) => {
  return (
    <>
      {posts &&
        posts?.length > 0 &&
        posts?.map((post) => <PostCard key={post.id} post={post} />)}
    </>
  );
};

export default Postlist;
