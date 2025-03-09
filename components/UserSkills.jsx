"use client"
import { useJobContext } from "../app/context/JobContext";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

export default function UserSkills({onClick}) {

    const { userSkills } = useJobContext()

    return (
        <div className="px-2 lg:pl-4 flex flex-col text-white">
            <div className="flex gap-2 items-center">
                <WrenchScrewdriverIcon className="h-6 w-6 text-teal-300"/>
                <h2 className="font-bold text-base md:text-lg my-4">User Skillset</h2>
            </div>
            
            <ul className=" flex flex-col space-y-4 md:space-y-4">

                {userSkills.map((skill, index) => (
                    <li key={index} 
                    >
                        <div className="flex items-center text-white">
                            <div className="mr-2 bg-teal-200 rounded-full w-2 h-2"></div>
                            <h2 className="text-sm md:text-base">{skill}</h2>
                        </div>

                    </li>
                ))}
                
            </ul>
        </div>   
    )
}