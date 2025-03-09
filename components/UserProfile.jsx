import { UserCircleIcon } from '@heroicons/react/24/solid';

export default function UserProfile() {

    return (
        <div className="flex flex-col items-center">
            <div className="my-8 px-2 flex flex-col justify-center items-center">

                {/* Profile Picture Container */}
                <UserCircleIcon className="h-20 w-20 "/>
                
                <div className="flex flex-col items-center justify-center text-white mt-2">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="font-bold text-base md:text-lg lg:text-xl">Elendu Franklin</h2>
                        <p className="text-xs md:text-sm font-normal">Front End Developer</p>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}