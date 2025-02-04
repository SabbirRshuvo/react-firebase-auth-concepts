import { useContext } from "react";
import { NavLink } from "react-router";
import { authContext } from "../main/Main";

const Navbar = () => {
  const { users, handleSignOut } = useContext(authContext);
  return (
    <div className="text-center mt-4 text-xl">
      <NavLink
        className="ml-4 border px-6 rounded-xl hover:bg-amber-300 transition"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="ml-4 border px-6 rounded-xl hover:bg-amber-300 transition"
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className="ml-4 border px-6 rounded-xl hover:bg-amber-300 transition"
        to="/signup"
      >
        Signup
      </NavLink>

      {users ? (
        <NavLink
          onClick={handleSignOut}
          className="ml-4 border px-6 rounded-xl hover:bg-amber-300 transition"
        >
          LogOut
        </NavLink>
      ) : (
        <NavLink
          className="ml-4 border px-6 rounded-xl hover:bg-amber-300 transition"
          to="/login"
        >
          Login
        </NavLink>
      )}
      <NavLink
        className="ml-4 border px-6 rounded-xl hover:bg-amber-300 transition"
        to="/profile"
      >
        Profile
      </NavLink>
    </div>
  );
};

export default Navbar;
