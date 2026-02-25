
import { useState } from "react";
import NavSidebar from "@/components/layout/NavSidebar";
import Header from "@/components/layout/Header";
import HODProfile from "@/components/profile/HODProfile";
import { useIsMobile } from "@/hooks/use-mobile";

const Profile = () => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className="flex min-h-screen w-full bg-gray-50">
      <NavSidebar isOpen={sidebarOpen} />

      <div className="flex flex-1 flex-col lg:pl-64">
        <Header toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Department Profile</h1>
            <p className="text-muted-foreground">
              Head of Computer Science & Engineering Department
            </p>
          </div>
          
          <HODProfile />
        </main>
      </div>
    </div>
  );
};

export default Profile;
