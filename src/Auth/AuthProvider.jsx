"use client";
import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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

  const data = {
    b,
    userInfo,
    registerEmail,
    signInEmail,
  };
  return <AuthContext value={data}>{children}</AuthContext>;
};

export default AuthProvider;
