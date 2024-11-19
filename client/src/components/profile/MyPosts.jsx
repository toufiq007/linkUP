import useProfile from "../../hooks/useProfile";
import Postlist from "../posts/Postlist";

const MyPosts = () => {
  const { state, dispatch } = useProfile();
  const posts = state?.posts
  console.log(state.posts);
  return (
    <div>
      <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Posts</h4>
      <Postlist posts={posts} />
    </div>
  );
};

export default MyPosts;
