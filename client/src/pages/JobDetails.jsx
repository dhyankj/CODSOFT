import { useParams } from "react-router-dom";
import jobsData from "../data/jobsData";

function JobDetails() {
  const { id } = useParams();
  const job = jobsData.find(j => j.id === Number(id));

  if (!job) return <h2>Job not found</h2>;

  return (
    <div className="container">
      <h1>{job.title}</h1>
      <h3>{job.company}</h3>
      <p>{job.location}</p>
      <p>{job.description}</p>

      <button>Apply Now</button>
    </div>
  );
}

export default JobDetails;
