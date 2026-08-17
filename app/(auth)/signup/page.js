import Link from "next/link";
import Image from "next/image";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Input from "../../../components/ui/Input";
import { Mail, Lock, ArrowRight, User } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import SignUpVisuals from "../../../components/ui/SignUpVisuals";

export default function SignupPage() {
  return (
    <main className="min-h-screen grid lg:grid-cols-[45%_55%]">
      {/* Left - Signup form */}
      <section className="p-8 lg:px-24 lg:py-8 bg-white">
        <div className="w-full max-w-137.5">
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
            <h2 className="text-3xl font-bold text-slate-900">
              Create your account
            </h2>

            <p className=" text-slate-500 text-sm mt-1">
              Start your journey with DevBoard and manage your projects
            </p>
          </div>

          {/* Form */}
          <form className="mb-4">
            <div className="mb-4">
              <Input
                label="Full Name"
                type="text"
                placeholder="John Doe"
                icon={User}
              />
            </div>
            <div className="mb-4">
              <Input
                label="Email"
                type="email"
                placeholder="john@example.com"
                icon={Mail}
              />
            </div>
            <div className="mb-4">
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                icon={Lock}
              />
            </div>
            {/* <div className="mb-4">
              <Input
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
                icon={Lock}
              />
            </div> */}

            {/* Terms */}
            <div className="flex items-start gap-3 pt-1">
              <input
                id="terms"
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-slate-300"
              />

              <label
                htmlFor="terms"
                className="text-sm leading-5 text-slate-500"
              >
                I agree to the{" "}
                <Link
                  href="#"
                  className="font-medium text-violet-600 hover:text-violet-700"
                >
                  terms and
                </Link>{" "}
                and{" "}
                <Link
                  href="#"
                  className="font-medium text-violet-600 hover:text-violet-700"
                >
                  privacy policy.
                </Link>
                .
              </label>
            </div>

            {/* Create Account */}
            <div className="pt-4">
              <Button
                type="submit"
                icon={ArrowRight}
                iconPosition="right"
                fullWidth
              >
                Create Account
              </Button>
            </div>
          </form>

          {/* Divider */}
          {/* <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-200" />

            <span className="text-sm text-slate-400">OR</span>

            <div className="h-px flex-1 bg-slate-200" />
          </div> */}

          {/* Google Button */}
          <Button
            variant="outline"
            icon={FcGoogle}
            iconPosition="left"
            fullWidth
          >
            Continue with Google
          </Button>

          {/* Login */}
          <p className="mt-7 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-violet-600 hover:text-violet-700"
            >
              Sign In
            </Link>
          </p>
        </div>
      </section>

      {/* Right - Product showcase  */}
      <section className="hidden lg:flex relative items-center justify-center overflow-hidden bg-slate-50">
        <SignUpVisuals />
      </section>
    </main>
  );
}
