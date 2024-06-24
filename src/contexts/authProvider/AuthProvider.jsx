"use client";
import { api } from "@/axios/api";
import { useRouter } from "next/navigation";
import React, { createContext, useState, useEffect, useContext } from "react";

const INITIAL_AUTH_STATE = {
  token: "",
  user: {
    email: "",
    first_name: "",
    last_name: "",
    mobile_no: "",
    role_id: -1,
    status: "ACTIVE",
    user_uuid: "",
  },
};

const AuthContext = createContext({
  userInfo: INITIAL_AUTH_STATE,
  isLogin: false,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = (props) => {
  const [userInfo, setUserInfo] = useState(INITIAL_AUTH_STATE);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      const data = JSON.parse(auth);
      const date1 = new Date(data.date);
      const date2 = new Date();
      const diff = (date2.getTime() - date1.getTime()) / (1000 * 60 * 60);
      if (diff <= 1) {
        setUserInfo(data);
        
        api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      }
    }
    setLoading(false);
  }, []);

  const handleLogin = async (email, password, onSuccess, onError) => {
    console.log(email, password);
    try {
      const res = await api.post("/authentication/login", {
        email: email,
        password: password,
      });

      console.log(res.data.data);

      const userData = {
        token: res.data.data.token,
        user: {
          email: res.data.data.user.email,
          first_name: res.data.data.user.first_name,
          last_name: res.data.data.user.last_name || "",
          mobile_no: res.data.data.user.mobile || "",
          role_id: res.data.data.user.role_uuid,
          status: res.data.data.user.status,
          user_uuid: res.data.data.user.user_uuid,
        },
      };

      localStorage.setItem(
        "auth",
        JSON.stringify({ ...userData, date: new Date() })
      );

      setUserInfo(userData);

      api.defaults.headers.common["Authorization"] = `Bearer ${userData.token}`;

      onSuccess();

      router.push("/bookings");
    } catch (error) {
      console.error("Login error:", error);
      onError(error.response.data.message);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    setUserInfo(INITIAL_AUTH_STATE);
    delete api.defaults.headers.common["Authorization"];
  };

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        isLogin: !!userInfo.token,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
