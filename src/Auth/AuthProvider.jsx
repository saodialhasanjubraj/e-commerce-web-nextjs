"use client";
import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "@/firebase.init";

const AuthProvider = ({ children }) => {
  const b = 5;
  const [userInfo, setUserInfo] = useState(null);

  // * Register user with Email............
  const registerEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (user) => {
        setUserInfo(user.user);
      }
    );
  };

  // * Sing In User with Email..............
  const signInEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).then((user) => {
      setUserInfo(user.user);
    });
  };

  // * sign Out User....................
  const signOutUser = () => {
    return signOut(auth)
      .then(() => alert("Sign out successfull"))
      .catch((error) => console.log(error));
  };

  //* Sign in with Google ................
  const provider = new GoogleAuthProvider();
  const signInGoogle = () => {
    return signInWithPopup(auth, provider)
      .then((user) => {
        setUserInfo(user.user);
      })
      .catch((error) => console.log(error));
  };
  const data = {
    b,
    userInfo,
    registerEmail,
    signInEmail,
    signOutUser,
    signInGoogle,
  };
  return <AuthContext value={data}>{children}</AuthContext>;
};

export default AuthProvider;
