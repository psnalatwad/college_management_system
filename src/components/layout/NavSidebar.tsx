
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Book,
  Calendar,
  ClipboardList,
  FileText,
  GraduationCap,
  Home,
  Settings,
  Users,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface SidebarProps {
  isOpen: boolean;
}

interface NavItem {
  title: string;
  icon: React.ElementType;
  href: string;
  roles?: string[];
}

const NavSidebar = ({ isOpen }: SidebarProps) => {
  const location = useLocation();
  // Simulated user role - in a real app, this would come from authentication
  const [userRole] = useState<string>("student");

  const navItems: NavItem[] = [
    {
      title: "Dashboard",
      icon: Home,
      href: "/dashboard",
      roles: ["admin", "faculty", "student", "staff"],
    },
    {
      title: "Courses",
      icon: Book,
      href: "/courses",
      roles: ["admin", "faculty", "student"],
    },
    {
      title: "Attendance",
      icon: ClipboardList,
      href: "/attendance",
      roles: ["admin", "faculty", "student"],
    },
    {
      title: "Assignments",
      icon: FileText,
      href: "/assignments",
      roles: ["admin", "faculty", "student"],
    },
    {
      title: "Exams & Results",
      icon: GraduationCap,
      href: "/exams",
      roles: ["admin", "faculty", "student"],
    },
    {
      title: "Events",
      icon: Calendar,
      href: "/events",
      roles: ["admin", "faculty", "student", "staff"],
    },
    {
      title: "Notifications",
      icon: Bell,
      href: "/Notification",
      roles: ["admin", "faculty", "student", "staff"],
    }
  ];

  const adminNavItems: NavItem[] = [
    {
      title: "User Management",
      icon: Users,
      href: "/users",
      roles: ["admin"],
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/settings",
      roles: ["admin"],
    },
  ];

  // Filter nav items based on user role
  const filteredNavItems = navItems.filter(item => 
    !item.roles || item.roles.includes(userRole)
  );
  
  const filteredAdminNavItems = adminNavItems.filter(item => 
    !item.roles || item.roles.includes(userRole)
  );

  return (
    <aside 
      className={cn(
        "fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r bg-background transition-transform lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex h-16 items-center border-b px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="font-semibold text-xl text-cse-primary">GEC Talkal</div>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-2 text-sm">
          {filteredNavItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground",
                location.pathname === item.href && "bg-cse-primary text-white hover:text-white"
              )}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.title}</span>
            </Link>
          ))}

          {filteredAdminNavItems.length > 0 && (
            <>
              <Separator className="my-2" />
              <div className="text-xs font-medium text-muted-foreground px-4 py-2">
                Administration
              </div>
              {filteredAdminNavItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground",
                    location.pathname === item.href && "bg-cse-primary text-white hover:text-white"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </>
          )}
        </nav>
      </div>
      <div className="mt-auto p-4">
        <div className="flex items-center gap-2 rounded-lg bg-muted p-4">
          <div>
            <p className="text-xs font-medium">Department Portal</p>
            <p className="text-xs text-muted-foreground">
              CSE Branch, GEC Talkal
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default NavSidebar;
