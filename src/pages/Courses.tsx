
import { useState } from "react";
import NavSidebar from "@/components/layout/NavSidebar";
import Header from "@/components/layout/Header";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

// Sample course data
const availableCourses = [
  {
    id: "cs101",
    code: "CS101",
    name: "Introduction to Programming",
    instructor: "Dr. Rajesh Kumar",
    credits: 4,
    semester: "Odd",
    year: 1,
    description: "An introductory course to programming concepts using Python. Students learn basic algorithms, data types, and problem-solving approaches.",
    prerequisites: [],
    status: "available",
  },
  {
    id: "cs202",
    code: "CS202",
    name: "Data Structures & Algorithms",
    instructor: "Dr. Meena Sharma",
    credits: 4,
    semester: "Even",
    year: 2,
    description: "This course covers fundamental data structures like arrays, linked lists, stacks, queues, trees, and graphs along with algorithms for searching, sorting, and graph traversal.",
    prerequisites: ["CS101"],
    status: "available",
  },
  {
    id: "cs304",
    code: "CS304",
    name: "Database Management Systems",
    instructor: "Prof. Veeresh",
    credits: 4,
    semester: "Odd",
    year: 3,
    description: "A comprehensive course on database design, implementation, and management. Covers ER modeling, normalization, SQL, and transaction processing.",
    prerequisites: ["CS202"],
    status: "available",
  },
  {
    id: "cs401",
    code: "CS401",
    name: "Computer Networks",
    instructor: "Dr. Suresh Babu",
    credits: 3,
    semester: "Even",
    year: 3,
    description: "Introduces network architecture, protocols, and applications. Topics include OSI model, TCP/IP, routing algorithms, and network security.",
    prerequisites: ["CS202"],
    status: "available",
  },
  {
    id: "cs505",
    code: "CS505",
    name: "Machine Learning",
    instructor: "Dr. Priya Singh",
    credits: 4,
    semester: "Odd",
    year: 4,
    description: "Explores machine learning algorithms, neural networks, and applications. Students implement various ML models for practical problems.",
    prerequisites: ["CS202", "MA201"],
    status: "available",
  }
];

const enrolledCourses = [
  {
    id: "cs101",
    code: "CS101",
    name: "Introduction to Programming",
    instructor: "Dr. Rajesh Kumar",
    progress: 68,
    nextClass: "Today, 10:00 AM",
    attendance: 92
  },
  {
    id: "cs202",
    code: "CS202",
    name: "Data Structures & Algorithms",
    instructor: "Dr. Meena Sharma",
    progress: 45,
    nextClass: "Tomorrow, 2:00 PM",
    attendance: 85
  },
  {
    id: "cs304",
    code: "CS304",
    name: "Database Management Systems",
    instructor: "Prof. Veeresh",
    progress: 24,
    nextClass: "Wednesday, 11:30 AM",
    attendance: 76
  }
];

const Courses = () => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  const [searchQuery, setSearchQuery] = useState("");
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const filteredAvailableCourses = availableCourses.filter(course => 
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen w-full bg-gray-50">
      <NavSidebar isOpen={sidebarOpen} />

      <div className="flex flex-1 flex-col lg:pl-64">
        <Header toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
            <p className="text-muted-foreground">
              Manage and explore CSE department courses
            </p>
          </div>
          
          <Tabs defaultValue="enrolled" className="space-y-4">
            <TabsList>
              <TabsTrigger value="enrolled">My Courses</TabsTrigger>
              <TabsTrigger value="available">Available Courses</TabsTrigger>
              <TabsTrigger value="calendar">Course Calendar</TabsTrigger>
            </TabsList>
            
            <TabsContent value="enrolled" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {enrolledCourses.map(course => (
                  <Card key={course.id} className="card-hover">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{course.name}</CardTitle>
                          <CardDescription>{course.code}</CardDescription>
                        </div>
                        <Badge variant="outline">{course.code}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="text-sm">
                          Instructor: <span className="font-medium">{course.instructor}</span>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Course progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Attendance</span>
                            <span className={course.attendance < 75 ? "text-red-500" : ""}>{course.attendance}%</span>
                          </div>
                          <Progress value={course.attendance} className={`h-2 ${course.attendance < 75 ? "bg-red-100" : ""}`} />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="text-sm text-muted-foreground">
                        Next class: {course.nextClass}
                      </div>
                      <Button variant="outline" size="sm">View Course</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="available">
              <Card>
                <CardHeader>
                  <CardTitle>Available Courses</CardTitle>
                  <CardDescription>
                    Browse and register for courses offered by the CSE department
                  </CardDescription>
                  <div className="relative max-w-sm mt-2">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                      type="search" 
                      placeholder="Search courses..." 
                      className="pl-8" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredAvailableCourses.length > 0 ? (
                      filteredAvailableCourses.map(course => (
                        <div key={course.id} className="border rounded-lg p-4">
                          <div className="flex flex-wrap justify-between items-start gap-2">
                            <div>
                              <h3 className="font-semibold flex items-center gap-2">
                                {course.name}
                                <Badge variant="outline">{course.code}</Badge>
                              </h3>
                              <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge>{course.credits} Credits</Badge>
                              <Badge variant="secondary">Year {course.year}</Badge>
                              <Badge variant="outline">{course.semester} Sem</Badge>
                            </div>
                          </div>
                          
                          <p className="text-sm mt-2">{course.description}</p>
                          
                          {course.prerequisites.length > 0 && (
                            <div className="mt-2">
                              <span className="text-sm text-muted-foreground">Prerequisites: </span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {course.prerequisites.map(prereq => (
                                  <Badge key={prereq} variant="outline" className="text-xs">{prereq}</Badge>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          <div className="mt-4 flex justify-end">
                            <Button variant="outline" size="sm">View Details</Button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-muted-foreground">No courses match your search criteria.</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="calendar">
              <Card>
                <CardHeader>
                  <CardTitle>Course Schedule</CardTitle>
                  <CardDescription>
                    Weekly timetable for your enrolled courses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr>
                          <th className="border p-2 bg-muted">Time</th>
                          <th className="border p-2 bg-muted">Monday</th>
                          <th className="border p-2 bg-muted">Tuesday</th>
                          <th className="border p-2 bg-muted">Wednesday</th>
                          <th className="border p-2 bg-muted">Thursday</th>
                          <th className="border p-2 bg-muted">Friday</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2 font-medium">9:00 - 10:00</td>
                          <td className="border p-2 bg-purple-50">CS101</td>
                          <td className="border p-2"></td>
                          <td className="border p-2 bg-purple-50">CS101</td>
                          <td className="border p-2"></td>
                          <td className="border p-2 bg-purple-50">CS101</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">10:00 - 11:00</td>
                          <td className="border p-2"></td>
                          <td className="border p-2 bg-blue-50">CS202</td>
                          <td className="border p-2"></td>
                          <td className="border p-2 bg-blue-50">CS202</td>
                          <td className="border p-2"></td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">11:00 - 12:00</td>
                          <td className="border p-2"></td>
                          <td className="border p-2 bg-blue-50">CS202</td>
                          <td className="border p-2"></td>
                          <td className="border p-2 bg-blue-50">CS202</td>
                          <td className="border p-2"></td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">12:00 - 1:00</td>
                          <td className="border p-2 text-center bg-gray-100" colSpan={5}>Lunch Break</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">1:00 - 2:00</td>
                          <td className="border p-2 bg-green-50">CS304</td>
                          <td className="border p-2"></td>
                          <td className="border p-2 bg-green-50">CS304</td>
                          <td className="border p-2"></td>
                          <td className="border p-2 bg-green-50">CS304</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">2:00 - 3:00</td>
                          <td className="border p-2 bg-green-50">CS304</td>
                          <td className="border p-2"></td>
                          <td className="border p-2 bg-green-50">CS304</td>
                          <td className="border p-2"></td>
                          <td className="border p-2"></td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">3:00 - 4:00</td>
                          <td className="border p-2"></td>
                          <td className="border p-2 bg-yellow-50">CS101 Lab</td>
                          <td className="border p-2"></td>
                          <td className="border p-2 bg-orange-50">CS304 Lab</td>
                          <td className="border p-2"></td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">4:00 - 5:00</td>
                          <td className="border p-2"></td>
                          <td className="border p-2 bg-yellow-50">CS101 Lab</td>
                          <td className="border p-2"></td>
                          <td className="border p-2 bg-orange-50">CS304 Lab</td>
                          <td className="border p-2"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Courses;
