import { useParams } from "react-router-dom";
import jobsData from "../data/JobsData";

function JobDetails() {
  const { id } = useParams();

  const job = jobsData.find((job) => job.id === Number(id));

  if (!job) {
    return <h2>Job not found</h2>;
  }

  return (
    <div>
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Description:</strong> {job.description}</p>
    </div>
  );
}

export default JobDetails;
