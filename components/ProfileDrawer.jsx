//import Link from 'next/link';
// import { CogIcon } from '@heroicons/react/24/solid';
import UserProfile from './UserProfile';
import UserSkills from "./UserSkills";
import { ArrowLeft } from "lucide-react";
//import Image from 'next/image';

export default function ProfileDrawer({ isOpen, onClose }) {
    return (
      <div
        className={`fixed flex flex-col z-10 top-0 right-full h-full w-1/2 bg-teal-800 text-black transition-transform duration-300 transform ${
          isOpen ? 'translate-x-full' : 'translate-x-0'
        }`}
      >

        <div className="h-full px-4 pt-16 flex flex-col">
            <button className="text-gray-100" onClick={onClose}>
                <ArrowLeft size={24} />
            </button>
            <UserProfile />
            <UserSkills onClick={onClose} />
        </div>
        
      </div>
    );
}