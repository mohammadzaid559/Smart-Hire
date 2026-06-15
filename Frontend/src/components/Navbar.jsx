import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex gap-4">

      <Link to="/">Home</Link>

      <Link to="/login">Login</Link>

      <Link to="/register">Register</Link>

      <Link to="/recruiter">Recruiter</Link>

      <Link to="/candidate">Candidate</Link>

      <Link to="/post-job">Post Job</Link>

    </nav>
  );
}