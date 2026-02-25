
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle, Copy, FileText, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const StaffDashboard = () => {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Scheduled Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              Upcoming this month
            </p>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Faculty Support Requests</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              3 pending approval
            </p>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Tasks</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">
              This week
            </p>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Documents Processed</CardTitle>
            <Copy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              This month
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>
              Department events scheduled for this month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="bg-cse-primary bg-opacity-10 p-2 rounded-md">
                    <Calendar className="h-5 w-5 text-cse-primary" />
                  </div>
                  <div className="text-sm text-muted-foreground">May 15, 2025</div>
                </div>
                <h3 className="mt-2 font-semibold">Technical Symposium</h3>
                <p className="text-sm text-muted-foreground">Annual technical fest for the CSE department</p>
                <div className="mt-2 flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span className="text-xs">Expected: 250+</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Main Auditorium</div>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Planning progress: </span>
                    <span>85%</span>
                  </div>
                  <Button variant="outline" size="sm">Details</Button>
                </div>
                <Progress value={85} className="mt-2 h-2" />
              </div>
              
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="bg-cse-primary bg-opacity-10 p-2 rounded-md">
                    <Calendar className="h-5 w-5 text-cse-primary" />
                  </div>
                  <div className="text-sm text-muted-foreground">May 22, 2025</div>
                </div>
                <h3 className="mt-2 font-semibold">Industry Visit - Microsoft</h3>
                <p className="text-sm text-muted-foreground">Organized tour of Microsoft Development Center</p>
                <div className="mt-2 flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span className="text-xs">Participants: 60</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Off-campus</div>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Planning progress: </span>
                    <span>65%</span>
                  </div>
                  <Button variant="outline" size="sm">Details</Button>
                </div>
                <Progress value={65} className="mt-2 h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid gap-4 grid-cols-1">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Faculty Support Requests</CardTitle>
              <CardDescription>
                Recent requests from faculty members
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-3">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Lab Equipment Setup</h4>
                    <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">
                      Pending
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Setup new computers in Database Lab for Oracle software demonstration
                  </p>
                  <div className="mt-2 flex justify-between text-xs">
                    <div className="text-muted-foreground">
                      Requested by: Dr. Meena Sharma
                    </div>
                    <div className="text-muted-foreground">
                      Needed by: May 1, 2025
                    </div>
                  </div>
                  <div className="mt-3 flex justify-end gap-2">
                    <Button variant="outline" size="sm">Decline</Button>
                    <Button variant="default" size="sm" className="bg-cse-primary hover:bg-cse-secondary">Approve</Button>
                  </div>
                </div>
                
                <div className="rounded-lg border p-3">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Classroom Projector Repair</h4>
                    <div className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                      Approved
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Repair projector in Room 302, not displaying properly
                  </p>
                  <div className="mt-2 flex justify-between text-xs">
                    <div className="text-muted-foreground">
                      Requested by: Prof. Veeresh
                    </div>
                    <div className="text-muted-foreground">
                      Status: Technician assigned
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Document Processing</CardTitle>
              <CardDescription>
                Documents pending approval or processing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-cse-primary bg-opacity-10 p-2 rounded-md">
                      <FileText className="h-4 w-4 text-cse-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Student Certificates</h4>
                      <p className="text-xs text-muted-foreground">12 pending approval</p>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">Process</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-cse-primary bg-opacity-10 p-2 rounded-md">
                      <FileText className="h-4 w-4 text-cse-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Faculty Leave Applications</h4>
                      <p className="text-xs text-muted-foreground">3 pending approval</p>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">Process</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-cse-primary bg-opacity-10 p-2 rounded-md">
                      <FileText className="h-4 w-4 text-cse-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Department Budget Reports</h4>
                      <p className="text-xs text-muted-foreground">For quarterly review</p>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">Process</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-cse-primary bg-opacity-10 p-2 rounded-md">
                      <FileText className="h-4 w-4 text-cse-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Event Permission Forms</h4>
                      <p className="text-xs text-muted-foreground">5 new submissions</p>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">Process</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
