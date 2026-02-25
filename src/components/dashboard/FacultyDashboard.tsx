
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Book, Calendar, FileText, Users } from "lucide-react";

// Sample data for courses
const courses = [
  {
    id: "cs101",
    name: "Introduction to Programming",
    students: 86,
    completionRate: 65,
    assignments: 3,
    nextClass: "Today, 10:00 AM"
  },
  {
    id: "cs202",
    name: "Data Structures & Algorithms",
    students: 72,
    completionRate: 42,
    assignments: 5,
    nextClass: "Tomorrow, 2:00 PM"
  },
  {
    id: "cs304",
    name: "Database Management Systems",
    students: 55,
    completionRate: 78,
    assignments: 2,
    nextClass: "Wednesday, 11:30 AM"
  }
];

// Sample data for upcoming tasks
const upcomingTasks = [
  {
    id: 1,
    title: "Grade Programming Assignments",
    course: "CS101",
    deadline: "Today, 5:00 PM",
    priority: "high"
  },
  {
    id: 2,
    title: "Prepare Quiz Questions",
    course: "CS202",
    deadline: "Tomorrow, 12:00 PM",
    priority: "medium"
  },
  {
    id: 3,
    title: "Faculty Meeting",
    course: "",
    deadline: "Thursday, 3:00 PM",
    priority: "low"
  }
];

const FacultyDashboard = () => {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">My Courses</CardTitle>
            <Book className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Active this semester
            </p>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">213</div>
            <p className="text-xs text-muted-foreground">
              Across all courses
            </p>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Assignments</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">
              Need grading
            </p>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Schedule</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              Classes today
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>My Courses</CardTitle>
            <CardDescription>
              Current active courses for this semester
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {courses.map(course => (
                <div key={course.id} className="border rounded-lg p-4">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{course.name}</h3>
                    <Badge variant="outline">{course.students} students</Badge>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between text-sm text-muted-foreground mb-1">
                      <span>Course progress</span>
                      <span>{course.completionRate}%</span>
                    </div>
                    <Progress value={course.completionRate} className="h-2" />
                  </div>
                  <div className="mt-4 flex justify-between text-sm">
                    <div>
                      <span className="text-muted-foreground">Next class: </span>
                      <span className="font-medium">{course.nextClass}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Assignments: </span>
                      <span className="font-medium">{course.assignments}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full">
              View All Courses
            </Button>
          </CardFooter>
        </Card>
        
        <div className="grid gap-4 grid-cols-1">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Upcoming Tasks</CardTitle>
              <CardDescription>
                Tasks that need your attention
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingTasks.map(task => (
                  <div 
                    key={task.id} 
                    className={`flex items-center justify-between p-3 rounded-lg border ${
                      task.priority === 'high' ? 'border-red-200 bg-red-50' : 
                      task.priority === 'medium' ? 'border-amber-200 bg-amber-50' : 
                      'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div>
                      <h4 className="font-medium">{task.title}</h4>
                      <div className="flex gap-3 text-sm text-muted-foreground">
                        {task.course && (
                          <span>{task.course}</span>
                        )}
                        <span>{task.deadline}</span>
                      </div>
                    </div>
                    <Badge 
                      variant={
                        task.priority === 'high' ? 'destructive' : 
                        task.priority === 'medium' ? 'outline' : 
                        'secondary'
                      }
                    >
                      {task.priority}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="w-full">
                View All Tasks
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common faculty tasks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 mr-2"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M8 12h8" />
                  <path d="M12 8v8" />
                </svg>
                Create New Assignment
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 mr-2"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="M12 18v-6" />
                  <path d="M9 15h6" />
                </svg>
                Upload Course Material
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 mr-2"
                >
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
                  <path d="M12 11h4" />
                  <path d="M12 16h4" />
                  <path d="M8 11h.01" />
                  <path d="M8 16h.01" />
                </svg>
                Take Attendance
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
