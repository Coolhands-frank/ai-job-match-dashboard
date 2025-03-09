"use client";
import { useJobContext } from "../app/context/JobContext";
import JobCard from "./JobCard";

export default function JobList() {
  const { jobs } = useJobContext();

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {jobs.length === 0 ? (
        <p className="text-gray-500">No jobs available</p>
      ) : (
        jobs.map((job) => <JobCard key={job.id} job={job} />)
      )}
    </div>
  );
}
