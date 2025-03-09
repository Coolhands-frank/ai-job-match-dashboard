"use client";
import { createContext, useContext, useEffect, useState } from "react";

const JobContext = createContext();

export function JobProvider({ children }) {
    const [jobs, setJobs] = useState([]);
    const [userSkills] = useState(["React", "Next.js", "JavaScript", "Tailwind CSS", "Figma", "SupaBase", "python"]); // Mock user skills

    useEffect(() => {
      async function fetchJobs() {
        try {
          const response = await fetch("/mockJobs.json");
          if (!response.ok) {
            throw new Error("Failed to fetch jobs");
          }
          const data = await response.json();
          setJobs(data);
        } catch (error) {
          console.error("Error fetching jobs:", error);
        }
      }
      fetchJobs();
    }, []);

    return (
      <JobContext.Provider value={{ jobs, userSkills }}>
        {children}
      </JobContext.Provider>
    );
}

export function useJobContext() {
    return useContext(JobContext);
}
