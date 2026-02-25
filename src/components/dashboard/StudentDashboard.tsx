
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, BookOpen, Calendar, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";

// Sample data
const enrolledCourses = [
  {
    id: "cs101",
    name: "Introduction to Programming",
    instructor: "Dr. Rajesh Kumar",
    completed: 68,
    nextClass: "Today, 10:00 AM",
    attendance: 92
  },
  {
    id: "cs202",
    name: "Data Structures & Algorithms",
    instructor: "Dr. Meena Sharma",
    completed: 45,
    nextClass: "Tomorrow, 2:00 PM",
    attendance: 85
  },
  {
    id: "cs304",
    name: "Database Management Systems",
    instructor: "Prof. Veeresh",
    completed: 24,
    nextClass: "Wednesday, 11:30 AM",
    attendance: 76
  }
];

const upcomingAssignments = [
  {
    id: 1,
    title: "Programming Assignment 3",
    course: "CS101",
    dueDate: "Apr 28, 2025",
    status: "pending"
  },
  {
    id: 2,
    title: "Database Design Project",
    course: "CS304",
    dueDate: "May 5, 2025",
    status: "pending"
  },
  {
    id: 3,
    title: "Algorithm Analysis",
    course: "CS202",
    dueDate: "May 10, 2025",
    status: "pending"
  }
];

const StudentDashboard = () => {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Welcome back, Student</h2>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Enrolled Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              This semester
            </p>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Attendance</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">84%</div>
            <p className="text-xs text-muted-foreground">
              Above minimum requirement
            </p>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Assignments</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Due this week
            </p>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Class</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">CS101</div>
            <p className="text-xs text-muted-foreground">
              Today, 10:00 AM
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 md:grid-cols-7">
        <Card className="md:col-span-4 card-hover">
          <CardHeader>
            <CardTitle>My Courses</CardTitle>
            <CardDescription>Your enrolled courses this semester</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {enrolledCourses.map(course => (
                <div key={course.id} className="rounded-lg border p-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{course.name}</h3>
                    <Badge variant="outline">{course.id}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
                  
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Course progress</span>
                        <span>{course.completed}%</span>
                      </div>
                      <Progress value={course.completed} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Attendance</span>
                        <span>{course.attendance}%</span>
                      </div>
                      <Progress 
                        value={course.attendance} 
                        className={`h-2 ${course.attendance < 75 ? "bg-red-100" : ""}`} 
                      />
                    </div>
                  </div>
                  
                  <div className="mt-3 flex justify-between text-sm">
                    <span className="text-muted-foreground">Next class: {course.nextClass}</span>
                    <Button variant="link" size="sm" className="p-0 h-auto">View details</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-3 card-hover">
          <CardHeader>
            <CardTitle>Upcoming Assignments</CardTitle>
            <CardDescription>Tasks that need your attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {upcomingAssignments.map(assignment => (
                <div key={assignment.id} className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{assignment.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary">{assignment.course}</Badge>
                      <span className="text-sm text-muted-foreground">Due: {assignment.dueDate}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
              ))}
            </div>

            <Separator className="my-4" />
            
            <div>
              <h3 className="font-semibold mb-2">Announcements</h3>
              <div className="space-y-3">
                <div className="rounded-lg bg-muted p-3">
                  <h4 className="font-medium">Final Exam Schedule</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    The final examination schedule has been published. Please check your email for details.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">Posted 2 days ago</p>
                </div>
                <div className="rounded-lg bg-muted p-3">
                  <h4 className="font-medium">Department Technical Fest</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Register for the annual technical fest starting May 15th.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">Posted 5 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;
