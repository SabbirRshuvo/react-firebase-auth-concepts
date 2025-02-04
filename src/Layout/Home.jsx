import { useContext } from "react";
import { authContext } from "../main/Main";

const Home = () => {
  const contextValue = useContext(authContext);
  const { handleGoogleSignIn, handleGitHub, handleSignOut } = contextValue;
  return (
    <div className="text-center my-10">
      <button className="btn" onClick={handleGoogleSignIn}>
        Google
      </button>
      <button className="btn" onClick={handleGitHub}>
        GitHub
      </button>
      <button className="btn" onClick={handleSignOut}>
        logOut
      </button>
    </div>
  );
};

export default Home;
