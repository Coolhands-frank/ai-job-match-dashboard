import UserProfile from './UserProfile'
import UserSkills from './UserSkills'


export default function SideBar() {

    return (
        <div className="h-full w-full flex flex-col bg-teal-800 p-4">
            <h1 className="font-black text-lg lg:text-xl text-white text-center mt-2">Job Match Dashboard</h1>
            <UserProfile />
            <UserSkills />
        </div>
    )
}