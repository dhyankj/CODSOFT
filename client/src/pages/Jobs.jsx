import jobsData from "../data/jobsData";
import JobCard from "../components/JobCard";

function Jobs() {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h2>Available Jobs</h2>
      {jobsData.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default Jobs;
