"use client";


import { useAuth } from "@/contexts/authProvider/AuthProvider";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const { login } = useAuth();
  const [loading, setLoading] = React.useState(false);


  async function onSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      const email = formData.get("email");
      const password = formData.get("password");
      console.log(email, password);
      await login(
        email,
        password,
        () => {
          setLoading(false);
          // router.push("/bookings");
        },
        (errMsg) => {
          setError(errMsg);
          setLoading(false);
        }
      );
    } catch (err) {
      setError(err.message);
    }
  }
  const { userInfo } = useAuth();
  console.log(userInfo)
  return (
    <>
      {error && (
        <div className="text-xl text-red-500 text-center">{error}</div>
      )}
      <form className="login-form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button type="submit" className="btn-primary w-full mt-4 bg-primary">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
