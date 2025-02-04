import { useContext } from "react";
import { authContext } from "../main/Main";

const About = () => {
  const { handleGoogleSignIn, users } = useContext(authContext);
  return (
    <div className="text-center my-10">
      {users?.displayName}
      <button className="btn" onClick={handleGoogleSignIn}>
        Google
      </button>
    </div>
  );
};

export default About;
