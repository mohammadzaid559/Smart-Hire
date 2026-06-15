import { useState } from "react";

import API from "../api/axios";

export default function PostJob() {

  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
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
        "/jobs",
        form,
        {
          headers: {
            authorization:
              localStorage.getItem("token"),
          },
        }
      );

      alert("Job Posted");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-10">

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md mx-auto"
      >

        <input
          type="text"
          name="title"
          placeholder="Job Title"
          className="border p-2"
          onChange={handleChange}
        />

        <input
          type="text"
          name="company"
          placeholder="Company"
          className="border p-2"
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          className="border p-2"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          className="border p-2"
          onChange={handleChange}
        />

        <button className="bg-black text-white p-2">
          Post Job
        </button>

      </form>

    </div>
  );
}