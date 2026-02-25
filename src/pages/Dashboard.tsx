
import { useState, useEffect } from "react";
import NavSidebar from "@/components/layout/NavSidebar";
import Header from "@/components/layout/Header";
import AdminDashboard from "@/components/dashboard/AdminDashboard";
import FacultyDashboard from "@/components/dashboard/FacultyDashboard";
import StudentDashboard from "@/components/dashboard/StudentDashboard";
import StaffDashboard from "@/components/dashboard/StaffDashboard";
import { useIsMobile } from "@/hooks/use-mobile";

type UserRole = "admin" | "faculty" | "student" | "staff";

const Dashboard = () => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  const [userRole, setUserRole] = useState<UserRole>("student");

  useEffect(() => {
    // For demo purposes, select a different dashboard every 30 seconds
    const roles: UserRole[] = ["admin", "faculty", "student", "staff"];
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * roles.length);
      setUserRole(roles[randomIndex]);
    }, 30000);

    return () => clearInterval(interval);
  }, []);



  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderDashboard = () => {
    switch (userRole) {
      case "admin":
        return <AdminDashboard />;
      case "faculty":
        return <FacultyDashboard />;
      case "staff":
        return <StaffDashboard />;
      default:
        return <StudentDashboard />;
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-gray-50">
      <NavSidebar isOpen={sidebarOpen} />

      <div className="flex flex-1 flex-col lg:pl-64">
        <Header toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight">
              {userRole === "admin"
                ? "Admin Dashboard"
                : userRole === "faculty"
                ? "Faculty Dashboard"
                : userRole === "staff"
                ? "Staff Dashboard"
                : "Student Dashboard"}
            </h1>
            <p className="text-muted-foreground">
              Welcome back to the CSE Department Portal
            </p>
          </div>
          
          {renderDashboard()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
