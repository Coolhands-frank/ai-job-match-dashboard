"use client"
import Link from "next/link";
import MatchScoreBadge from "./MatchScoreBadge";
import { useJobContext } from "../app/context/JobContext";

export default function JobCard({ job }) {
    const { userSkills } = useJobContext()
    
    // Calculate match score
    const calculateMatchScore = (requiredSkills, userSkills) => {
        const matchingSkills = requiredSkills.filter(skill => 
          userSkills.some(userSkill => userSkill.toLowerCase() === skill.toLowerCase())
        );
      
        return Math.round((matchingSkills.length / requiredSkills.length) * 100);
      };
      
    const matchScore = calculateMatchScore(job.requiredSkills, userSkills);

    return (
      <div className="border p-4 rounded-lg shadow-sm">
        <h3 className="text-sm md:text-base">Company: {job.company}</h3>
        <p className="text-base md:text-lg my-2 font-bold">{job.title}</p>
        <p className="text-sm md:text-base">{job.location}</p>
        <p className="text-sm md:text-base">{job.salary}</p>
        <MatchScoreBadge score={matchScore} />
        <Link href={`/job/${job.id}`} className="block mt-2 text-teal-600">
          View Details
        </Link>
      </div>
    );
}
