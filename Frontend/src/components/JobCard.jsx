export default function JobCard({
  job,
  handleApply,
}) {

  return (
    <div className="border p-4 rounded shadow">

      <h2 className="text-xl font-bold">
        {job.title}
      </h2>

      <p>{job.company}</p>

      <p>{job.location}</p>

      <p>{job.description}</p>

      <button
        onClick={() => handleApply(job._id)}
        className="bg-black text-white px-4 py-2 mt-4"
      >
        Apply
      </button>

    </div>
  );
}