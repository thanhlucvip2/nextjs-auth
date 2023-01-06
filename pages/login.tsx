import React from "react";
import { authClient } from "../http-client";

export default function LoginPage() {
  async function handleLogin() {
    try {
      await authClient.login({
        username: "doanthanhluc91bvh@gmail.com",
        password: "newPassword",
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function handleGetProfile() {
    try {
      await authClient.getdata();
    } catch (error) {
      console.log(error);
    }
  }
  async function handleLogout() {
    try {
      await authClient.logout();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>login page</h1>
      <div style={{ fontSize: "30px", margin: "10px" }}></div>
      <button
        style={{ fontSize: "30px", margin: "10px" }}
        onClick={handleLogin}
      >
        login
      </button>

      <button
        onClick={handleGetProfile}
        style={{ fontSize: "30px", margin: "10px" }}
      >
        Get profile
      </button>

      <button
        onClick={handleLogout}
        style={{ fontSize: "30px", margin: "10px" }}
      >
        logout
      </button>
    </div>
  );
}
