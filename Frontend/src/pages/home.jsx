import { useEffect, useState } from "react";

import API from "../api/axios";

import JobCard from "../components/JobCard";

export default function Home() {

  const [jobs, setJobs] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {

    fetchJobs();

  }, []);

  const fetchJobs = async () => {

    const res = await API.get("/jobs");

    setJobs(res.data);
  };

  const handleApply = async (jobId) => {

    alert(`Applied to ${jobId}`);
  };

  const filteredJobs = jobs.filter((job) =>
    job.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="p-10">

      <input
        type="text"
        placeholder="Search jobs..."
        className="border p-2 mb-5 w-full"
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div className="grid md:grid-cols-3 gap-5">

        {filteredJobs.map((job) => (
          <JobCard
            key={job._id}
            job={job}
            handleApply={handleApply}
          />
        ))}

      </div>

    </div>
  );
}