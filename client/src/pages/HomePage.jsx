import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const HomePage = () => {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <div>
      <Link to="/profile">go to signup</Link>
    </div>
  );
};

export default HomePage;
