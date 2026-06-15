import { useState, useContext } from "react";

import API from "../api/axios";

import {
  AuthContext,
} from "../context/AuthContext";

import { useNavigate } from "react-router-dom";

export default function Login() {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await API.post(
        "/auth/login",
        form
      );

      login(res.data);

      alert("Login Success");

      if (
        res.data.user.role === "recruiter"
      ) {
        navigate("/recruiter");
      } else {
        navigate("/candidate");
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-10">

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto flex flex-col gap-4"
      >

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2"
          onChange={handleChange}
        />

        <button className="bg-black text-white p-2">
          Login
        </button>

      </form>

    </div>
  );
}