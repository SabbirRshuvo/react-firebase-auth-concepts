import { useContext } from "react";
import { authContext } from "../main/Main";
import { Navigate } from "react-router";

/* eslint-disable react/prop-types */
const PrivateRoute = ({ children }) => {
  console.log(children);
  const { users, loading } = useContext(authContext);
  if (loading) {
    return <h1>Loading.....</h1>;
  }
  if (!users) {
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
