"use client"
import UserProfile from './UserProfile';
import UserSkills from "./UserSkills";
import { ArrowLeft } from "lucide-react";
import { useEffect, useRef } from "react";

export default function ProfileDrawer({ isOpen, onClose }) {
    const sidebarRef = useRef(null); // Reference to sidebar

    useEffect(() => {
        // Function to handle outside clicks
        const handleClickOutside = (event) => {
          if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            onClose(); // Close the sidebar if clicked outside
          }
        };

        // Function to handle scrolling outside sidebar
        const handleScrollOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
              onClose(); // Close sidebar when scrolling outside
            }
        };
    
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside); // Detect clicks
            document.addEventListener("touchstart", handleClickOutside); // Detect taps (for mobile)
            document.addEventListener("touchmove", handleScrollOutside); // Detect scrolling outside (for mobile)
            document.addEventListener("scroll", handleScrollOutside, { passive: true }); // Detect scrolls (desktop)
        }
    
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
            document.removeEventListener("touchmove", handleScrollOutside);
            document.removeEventListener("scroll", handleScrollOutside);
        };
    }, [isOpen, onClose]); // Runs only when isOpen changes

    return (
        <>
            {/* Overlay that appears when sidebar is open */}
            {isOpen && (
              <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={onClose}></div>
            )}

            <div
              ref={sidebarRef}
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
        </>
    );
}