"use client";
import Link from "next/link";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Input from "../../../components/ui/Input";
import Image from "next/image";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import AnimatedSphere from "../../../components/ui/AnimatedSphere";

export default function LoginPage() {
  return (
    <main className="min-h-screen grid lg:grid-cols-[45%_55%]">
      {/* Left Side - Login Form */}
      <div className="p-8 lg:px-24 lg:py-10 bg-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-10">
            <Image
              src="/logos/logo-with-text.png"
              alt="DevBoard Logo"
              width={130}
              height={40}
            />
          </div>
          {/* Heading */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-slate-900">Welcome back</h2>

            <p className=" text-slate-500 text-sm mt-1">
              Sign in to continue to DevBoard.
            </p>
          </div>

          {/* Form */}
          <form>
            <div className="mb-4">
              <Input
                label="Email"
                type="email"
                placeholder="john@example.com"
                icon={Mail}
              />
            </div>
            <div>
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                icon={Lock}
              />
            </div>
            {/* Remember Me */}
            <div className="flex items-center justify-between text-sm mt-2 mb-6">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <Link href="forget-password">
                <button
                  type="button"
                  className="text-purple-500 hover:text-purple-600 cursor-pointer"
                >
                  Forgot Password?
                </button>
              </Link>
            </div>

            <Button icon={ArrowRight} iconPosition="right" fullWidth>
              Sign In
            </Button>
          </form>

          {/* Divider */}
          <div className="my-4 flex items-center">
            <div className="h-px flex-1 bg-slate-200"></div>
            <span className="px-4 text-sm text-slate-400">OR</span>
            <div className="h-px flex-1 bg-slate-200"></div>
          </div>

          {/* Google Button */}
          <Button
            variant="outline"
            icon={FcGoogle}
            iconPosition="left"
            fullWidth
          >
            Continue with Google
          </Button>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-slate-500">
            Don't have an account?{" "}
            <Link href="/signup">
              <span className="font-medium text-purple-500 cursor-pointer">
                Create Account
              </span>
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Feature Slider */}
      <div className="hidden lg:flex justify-center items-center p-12 text-white">
        <AnimatedSphere />
      </div>
    </main>
  );
}
