
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar, FileText, Clock, Award, BookOpen } from "lucide-react";

const HODProfile = () => {
  return (
    <div className="animate-fade-in">
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full bg-cse-light border-4 border-cse-primary mb-4 overflow-hidden">
                <img 
                  src="/HOD.png" 
                  alt="Prof. Veeresh" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl font-bold text-center">Prof. Veeresh</h1>
              <p className="text-muted-foreground text-center">Head of Department</p>
              <p className="text-muted-foreground text-center">Computer Science & Engineering</p>
              
              <div className="flex gap-2 mt-4">
                <Button size="sm" variant="outline" className="flex gap-2">
                  <Mail className="h-4 w-4" />
                  <span>Contact</span>
                </Button>
                <Button size="sm" variant="default" className="bg-cse-primary hover:bg-cse-secondary">View CV</Button>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-3">About</h2>
              <p className="text-muted-foreground mb-4">
                Prof. Veeresh is a distinguished academic leader with over 20 years of experience in Computer Science education and research. 
                As the Head of the CSE Department at Government Engineering College Talkal, Koppal, he has been instrumental in developing 
                cutting-edge curriculum and fostering industry-academic partnerships to enhance student opportunities.
              </p>
              
              <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-cse-primary" />
                  <span>veeresh@gectk.edu.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-cse-primary" />
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-cse-primary" />
                  <span>Office Hours: Mon-Fri, 10 AM - 4 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-cse-primary" />
                  <span>Room 401, CSE Block</span>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h2 className="text-xl font-semibold mb-3">Education</h2>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-cse-primary" />
                        <span className="font-medium">Ph.D. in Computer Science</span>
                      </div>
                      <p className="text-sm text-muted-foreground ml-6">Indian Institute of Technology, Bombay (2005)</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-cse-primary" />
                        <span className="font-medium">M.Tech in Computer Science</span>
                      </div>
                      <p className="text-sm text-muted-foreground ml-6">National Institute of Technology, Karnataka (1999)</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-cse-primary" />
                        <span className="font-medium">B.E in Computer Science</span>
                      </div>
                      <p className="text-sm text-muted-foreground ml-6">Visvesvaraya Technological University (1997)</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-3">Research Interests</h2>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-cse-primary" />
                      <span>Machine Learning & Artificial Intelligence</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-cse-primary" />
                      <span>Computer Vision & Image Processing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-cse-primary" />
                      <span>High Performance Computing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-cse-primary" />
                      <span>Database Systems & Big Data Analytics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Teaching</CardTitle>
            <CardDescription>Current and past courses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Current Courses (Spring 2025)</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span>CS504: Advanced Database Management Systems</span>
                    <span className="text-muted-foreground">3rd Year</span>
                  </li>
                  <li className="flex justify-between">
                    <span>CS701: Machine Learning</span>
                    <span className="text-muted-foreground">4th Year</span>
                  </li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-medium">Previous Courses</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span>CS302: Data Structures and Algorithms</span>
                    <span className="text-muted-foreground">Fall 2024</span>
                  </li>
                  <li className="flex justify-between">
                    <span>CS501: Operating Systems</span>
                    <span className="text-muted-foreground">Fall 2024</span>
                  </li>
                  <li className="flex justify-between">
                    <span>CS601: Software Engineering</span>
                    <span className="text-muted-foreground">Spring 2024</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Publications & Achievements</CardTitle>
            <CardDescription>Selected research work and recognition</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Selected Publications</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li>
                    <p>"Efficient Deep Learning Approaches for Resource-Constrained Environments"</p>
                    <p className="text-muted-foreground">IEEE Transactions on Computational Intelligence, 2023</p>
                  </li>
                  <li>
                    <p>"A Novel Approach to Distributed Database Systems in Edge Computing"</p>
                    <p className="text-muted-foreground">International Journal of Data Science, 2022</p>
                  </li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-medium">Awards & Recognition</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-cse-primary mt-0.5" />
                    <div>
                      <p>Best Research Paper Award</p>
                      <p className="text-muted-foreground">National Conference on Advanced Computing, 2023</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-cse-primary mt-0.5" />
                    <div>
                      <p>Outstanding Educator Award</p>
                      <p className="text-muted-foreground">Karnataka State Technical Education Society, 2022</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HODProfile;
