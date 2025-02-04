import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase.config";
import Navbar from "../Layout/Navbar";
export const authContext = createContext();
const Main = () => {
  const [users, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
    });
  };

  const handleGitHub = () => {
    signInWithPopup(auth, gitHubProvider).then((result) => {
      setUser(result.user);
      setLoading(true);
    });
  };

  const handleSignOut = () => {
    signOut(auth).then((result) => {
      console.log("login out", result);
    });
  };

  const handleSignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      console.log(result.user);
      setLoading(true);
    });
  };
  const handleLogIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      console.log(result.user);
      setLoading(true);
    });
  };

  useEffect(() => {
    console.log("user state", users);
  }, [users]);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authData = {
    handleGoogleSignIn,
    handleGitHub,
    handleSignOut,
    users,
    handleSignUp,
    handleLogIn,
    loading,
  };
  return (
    <div>
      <authContext.Provider value={authData}>
        <Navbar />
        <Outlet />
      </authContext.Provider>
    </div>
  );
};

export default Main;
