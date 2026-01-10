import JobCard from "../components/JobCard";
import jobsData from "../data/JobsData";

function Jobs() {
  return (
    <div>
      <h2>Available Jobs</h2>

      {jobsData.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default Jobs;
