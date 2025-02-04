import { useContext } from "react";
import { authContext } from "../main/Main";
import { NavLink } from "react-router";

const SignUp = () => {
  const { handleSignUp } = useContext(authContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const conPassword = e.target.conPassword.value;
    if (password.length < 6) {
      alert("password must be 6 character or bigger");
      return;
    }
    if (password !== conPassword) {
      alert("didn't match");
      return;
    }
    console.log(email, password, conPassword);
    handleSignUp(email, password);
    e.target.reset();
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
          <label className="fieldset-label">Confirm Password</label>
          <input
            name="conPassword"
            type="password"
            className="input"
            placeholder="Confirm Password"
          />
          <button type="submit" className="btn btn-neutral mt-4">
            Sign Up
          </button>
        </fieldset>
      </form>
      <p className="text-center pb-10">
        already have an Account ?{" "}
        <NavLink className="text-xl font-semibold text-green-600" to="/login">
          Login
        </NavLink>
      </p>
    </div>
  );
};

export default SignUp;
