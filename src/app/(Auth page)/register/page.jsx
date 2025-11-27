"use client";
import { AuthContext } from "@/Auth/AuthContext";
import React, { use } from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const { registerEmail } = use(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleForm = async (e) => {
    console.log(e);
    const { email, password } = e;
    registerEmail(email, password);
  };
  return (
    <div className=" w-full h-[55vh] flex items-center justify-center">
      <form
        onSubmit={handleSubmit(handleForm)}
        className="w-80 h-90 flex flex-col gap-y-5 border-2 rounded-xl px-5 py-2"
      >
        <fieldset className="fieldset flex flex-col gap-y-3 mt-8">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            {...register("email")}
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
            {...register("password")}
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral  bg-sky-500 mt-10">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
