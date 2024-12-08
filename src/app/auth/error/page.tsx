import Link from "next/link";

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4 text-red-600">Authentication Error</h2>
        <p className="text-gray-600 mb-6">
          Something went wrong during login or registration. 
          Please check your credentials and try again.
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            href="/auth/login" 
            className="btn-primary px-6 py-3 rounded-lg"
          >
            Try Login Again
          </Link>
          <Link 
            href="/auth/register" 
            className="btn-secondary px-6 py-3 rounded-lg border-2 border-primary text-primary"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
