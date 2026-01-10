import JobCard from "../components/JobCard";

const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Remote",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Amazon",
    location: "Bangalore",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Microsoft",
    location: "Hyderabad",
  },
];

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
