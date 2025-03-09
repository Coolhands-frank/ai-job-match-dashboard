"use client";

import { useJobContext } from "@/app/context/JobContext";

export default function ApplyButton({ job }) {
  const { userSkills } = useJobContext(); 

  // Find missing skills
  const missingSkills = job.requiredSkills.filter(skill => 
    !userSkills.some(userSkill => userSkill.toLowerCase() === skill.toLowerCase())
  );

  // Handle Apply Click
  const handleApply = () => {
    if (missingSkills.length > 0) {
      alert(
        `You are missing the following skills required for this job: ${missingSkills.join(", ")}.\nConsider taking a course on udacity or cousera before applying!`
      );
    } else {
      alert(`Application submitted for ${job.title} at ${job.company}!`);
    }
  };

  return (
    <button 
      onClick={handleApply} 
      className="px-4 py-2 text-white bg-teal-800 rounded hover:bg-teal-500"
    >
      Apply Now
    </button>
  );
}
