import { signIn } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function LoginPage() {
  async function handleLogin(formData: FormData) {
    "use server";
    const email = formData.get("email");
    const password = formData.get("password");

    const result = await signIn("credentials", {
      redirect: false,
      email: email as string,
      password: password as string
    });

    if (result?.error) {
      // Handle login error
      redirect("/auth/error");
    }

    redirect("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <form action={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-gray-600">Email</label>
            <input 
              type="email" 
              name="email" 
              required 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-gray-600">Password</label>
            <input 
              type="password" 
              name="password" 
              required 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button 
            type="submit" 
            className="w-full btn-primary py-3 rounded-lg"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Don't have an account? {" "}
            <Link href="/auth/register" className="text-primary hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
