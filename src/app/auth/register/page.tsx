import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import Link from "next/link";

const prisma = new PrismaClient();

export default function RegisterPage() {
  async function handleRegister(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!name || !email || !password) {
      redirect("/auth/error");
    }

    const hashedPassword = await bcrypt.hash(password as string, 10);

    try {
      await prisma.user.create({
        data: {
          name: name as string,
          email: email as string,
          password: hashedPassword
        }
      });

      redirect("/auth/login");
    } catch {
      redirect("/auth/error");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>
        <form action={handleRegister} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-gray-600">Full Name</label>
            <input 
              type="text" 
              name="name" 
              required 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
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
              minLength={8}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button 
            type="submit" 
            className="w-full btn-primary py-3 rounded-lg"
          >
            Register
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Already have an account? {" "}
            <Link href="/auth/login" className="text-primary hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
