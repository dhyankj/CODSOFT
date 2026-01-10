import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <Link to={`/job/${job.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div style={{ border: "1px solid #ccc", padding: "12px", marginBottom: "12px" }}>
        <h3>{job.title}</h3>
        <p>{job.company}</p>
        <p>{job.location}</p>
      </div>
    </Link>
  );
}

export default JobCard;
