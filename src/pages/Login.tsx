
import { Link } from "react-router-dom";
import AuthForm from "@/components/auth/AuthForm";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex h-14 items-center px-4 lg:px-6 border-b bg-white">
        <Link 
          to="/" 
          className="flex items-center justify-center"
        >
          <span className="text-xl font-bold text-cse-primary">GEC Talkal CSE</span>
        </Link>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md space-y-6 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your credentials to access your account
            </p>
          </div>
          <AuthForm />
        </div>
      </main>
      
      <footer className="border-t py-4 px-4 lg:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
          <p className="text-xs text-muted-foreground">
            © 2025 Government Engineering College Talkal. All rights reserved.
          </p>
          <div className="flex items-center space-x-3">
            <Link 
              to="/terms" 
              className="text-xs text-muted-foreground underline-offset-4 hover:underline"
            >
              Terms
            </Link>
            <Link 
              to="/privacy" 
              className="text-xs text-muted-foreground underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/contact" 
              className="text-xs text-muted-foreground underline-offset-4 hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
