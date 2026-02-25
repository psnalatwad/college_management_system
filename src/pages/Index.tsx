
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, FileText, GraduationCap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-cse-primary">GEC Talkal CSE</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="text-sm font-medium">Home</Link>
            <Link to="/courses" className="text-sm font-medium">Courses</Link>
            <Link to="/profile" className="text-sm font-medium">Department</Link>
            <Link to="/login" className="text-sm font-medium">Login</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/login" className="md:hidden">
              <Button variant="ghost" size="sm">Login</Button>
            </Link>
            <Link to="/login" className="hidden md:block">
              <Button className="bg-cse-primary hover:bg-cse-secondary">Login to Portal</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none animate-fade-in">
                  Government Engineering College Talkal, Koppal
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fade-in">
                  Government Engineering College Talkal, Koppal
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-in">
                <Link to="/login">
                  <Button className="bg-cse-primary hover:bg-cse-secondary" size="lg">
                    Login to Portal
                  </Button>
                </Link>
                <Link to="/profile">
                  <Button variant="outline" size="lg">
                    Learn About Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                alt="CSE Department"
                className="aspect-video rounded-xl object-cover object-center animate-fade-in"
                src="demo1.png"      
               />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Portal Features</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Our comprehensive academic portal offers a range of features to enhance the learning experience
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            <Card className="border-none shadow-md card-hover animate-slide-in bg-cse-primary">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-slate-950 bg-opacity-10 flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="font-bold">Course Management</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Seamlessly manage course registrations, materials, and progress tracking
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md card-hover animate-slide-in bg-cse-primary" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-slate-950 bg-opacity-10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 " />
                </div>
                <h3 className="font-bold">Assignment Submission</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Submit and track assignments with automatic deadline notifications
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md card-hover animate-slide-in bg-cse-primary" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-slate-950 bg-opacity-10 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="font-bold">Event Management</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Stay updated on department events, workshops, and seminars
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md card-hover animate-slide-in bg-cse-primary" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-slate-950 bg-opacity-10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 " />
                </div>
                <h3 className="font-bold">Role-Based Access</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Customized interfaces for students, faculty, and administrative staff
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Department Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Our Department</h2>
                <p className="text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                  The Department of Computer Science & Engineering at Government Engineering College Talkal is committed to providing quality education and research opportunities.
                </p>
              </div>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-cse-primary" />
                  <span>Experienced faculty with industry and research backgrounds</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-cse-primary" />
                  <span>Modern computer labs with latest software and hardware</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-cse-primary" />
                  <span>Regular workshops, seminars, and industry interactions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-cse-primary" />
                  <span>Strong placement record with top tech companies</span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/profile">
                  <Button className="bg-cse-primary hover:bg-cse-secondary">
                    Meet Our HOD
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                alt="Department Lab"
                className="aspect-video rounded-xl object-cover object-center"
                src="/demo.png"          
                />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-lg font-medium">About Us</h3>
              <ul className="space-y-1">
                <li>
                  <Link to="/profile" className="text-sm text-muted-foreground hover:underline">
                    Department Profile
                  </Link>
                </li>
                <li>
                  <Link to="/faculty" className="text-sm text-muted-foreground hover:underline">
                    Faculty
                  </Link>
                </li>
                <li>
                  <Link to="/facilities" className="text-sm text-muted-foreground hover:underline">
                    Facilities
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Academics</h3>
              <ul className="space-y-1">
                <li>
                  <Link to="/courses" className="text-sm text-muted-foreground hover:underline">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link to="/syllabus" className="text-sm text-muted-foreground hover:underline">
                    Syllabus
                  </Link>
                </li>
                <li>
                  <Link to="/research" className="text-sm text-muted-foreground hover:underline">
                    Research
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Quick Links</h3>
              <ul className="space-y-1">
                <li>
                  <Link to="/events" className="text-sm text-muted-foreground hover:underline">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-sm text-muted-foreground hover:underline">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="text-sm text-muted-foreground hover:underline">
                    News & Announcements
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Contact Us</h3>
              <address className="not-italic text-sm text-muted-foreground">
                Govt. Engineering College<br />
                Talkal, Koppal District<br />
                Karnataka, India<br />
                <p className="mt-2">Email: cse@gectk.edu.in</p>
                <p>Phone: +91 1234567890</p>
              </address>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Government Engineering College Talkal. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link to="/terms" className="text-sm text-muted-foreground hover:underline">
                Terms
              </Link>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:underline">
                Privacy
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default Index;
