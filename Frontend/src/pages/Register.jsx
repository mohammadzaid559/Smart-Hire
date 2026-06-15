import { useState } from "react";

import API from "../api/axios";

export default function Register() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "candidate",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await API.post(
        "/auth/register",
        form
      );

      alert("Registered Successfully");

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
          type="text"
          name="name"
          placeholder="Name"
          className="border p-2"
          onChange={handleChange}
        />

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

        <select
          name="role"
          className="border p-2"
          onChange={handleChange}
        >
          <option value="candidate">
            Candidate
          </option>

          <option value="recruiter">
            Recruiter
          </option>
        </select>

        <button className="bg-black text-white p-2">
          Register
        </button>

      </form>

    </div>
  );
}