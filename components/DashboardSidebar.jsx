'use client'
import React, { useState } from 'react';
import SideBar from './SideBar';
import ProfileDrawer from './ProfileDrawer';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const DashboardSidebar = () => {

  const [isProfileDrawer, setIsProfileDrawer] = useState(false)
  
  const handleProfileToggle = () => {
    setIsProfileDrawer(!isProfileDrawer);
  };

  return (
    <div className="md:w-1/3 lg:w-1/4">
      <div className="hidden md:flex justify-between items-center h-full md:w-full lg:max-w-sm text-white">
        <SideBar />
      </div>

      <div className="md:hidden bg-teal-800 py-4 px-6 flex flex-row justify-between items-center">
        <div>
          <h1 className="font-bold text-xl">Job Match Dashboard</h1>
        </div>
        
        <div className="cursor-pointer flex gap-1 items-center" onClick={handleProfileToggle}>
          <UserCircleIcon className="h-8 w-8 text-white"/>
        </div>
        
        <ProfileDrawer isOpen={isProfileDrawer} onClose={handleProfileToggle} />
      </div>
    </div>
  );
};

export default DashboardSidebar;
