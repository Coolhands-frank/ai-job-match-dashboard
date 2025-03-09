"use client"
import { useJobContext } from "../../context/JobContext";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import ApplyButton from "../../../components/ApplyButton";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function JobDetails({ params }) {
  const { jobs } = useJobContext();
  const { id } = useParams();

  const job = jobs.find((j) => j.id === parseInt(id));

  if (!job) return notFound();

  return (
    <div className="flex flex-col h-full text-black py-2 md:py-4">
        <div className="border-b border-teal-800 px-8 py-2 text-sm md:text-base"> 
            <Link href="/">
                <ArrowLeft size={24} />
            </Link>
            
            <h2 className="text-lg md:text-2xl font-bold my-1 md:my-2 text-teal-800">{job.title}</h2>
            <p>Company: {job.company}</p>
            <p>Location: {job.location}</p>
            <p>Salary Range: {job.salary}</p>
        </div>

        <div className="px-8 text-sm md:text-base overflow-auto">
            <h2 className="my-4">Job Details</h2>

            <div className="space-y-4">
                <div>
                    <h2 className="font-bold mb-1">About the role</h2>
                    <p>{job.description}</p>
                </div>

                <div>
                    <h2 className="font-bold mb-1">Required Skills</h2>
                    {job.requiredSkills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-teal-800"></div>
                            {skill}
                        </div>
                    ))}
                </div>
                    
                <div>
                    <h2 className="font-bold mb-1">Acceptable Match Score</h2>
                    <p>{job.matchScore}%</p>
                </div>

                <div className="flex gap-4 items-center pb-2">
                    <ApplyButton job={job} />
                    <Link href="/">
                        <div className="bg-red-600 text-red-100 hover:bg-red-800 py-2 px-4 rounded">Cancel</div>
                    </Link>  
                </div>
            </div>
                   
        </div>
      
    </div>
  );
}
