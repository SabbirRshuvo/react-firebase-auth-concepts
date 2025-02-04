import { useContext } from "react";
import { NavLink } from "react-router";
import { authContext } from "../main/Main";

const Login = () => {
  const { handleLogIn } = useContext(authContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    e.target.reset();
    handleLogIn(email, password);
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
      <form onSubmit={handleSubmit} className="card-body">
        <fieldset className="fieldset">
          <label className="fieldset-label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
          />
          <label className="fieldset-label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
          />
          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
        </fieldset>
      </form>
      <p className="text-center pb-10">
        create a new Account ?{" "}
        <NavLink className="text-xl font-semibold text-green-600" to="/signup">
          Sign Up{" "}
        </NavLink>
      </p>
    </div>
  );
};

export default Login;
