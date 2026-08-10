"use client";
import Link from "next/link";
import { Mail, ArrowRight, ArrowLeft } from "lucide-react";
import ForgotPasswordVisual from "../../../components/ui/ForgetPasswordVisuals";
import Image from "next/image";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

export default function ForgotPasswordForm() {
  return (
    <section className="min-h-screen grid lg:grid-cols-[45%_55%]">
      {/* Left Side - Login Form */}
      <div className="p-8 lg:px-24 lg:py-10 bg-white">
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
            Forgot your password?
          </h2>

          <p className="mt-3 max-w-lg text-sm leading-7 text-slate-500">
            No worries. Enter your email and we'll send you a link to reset your
            password.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Email */}
          <div className="mb-4">
            <Input
              label="Email"
              type="email"
              placeholder="john@example.com"
              icon={Mail}
            />
          </div>

          {/* Submit */}
          <Button icon={ArrowRight} iconPosition="right">
            Send reset link
          </Button>
        </form>

        {/* Back to login */}
        <Link
          href="/login"
          className="
            mt-8 flex items-center
            justify-center gap-2
            text-sm font-medium
            text-violet-600
            transition
            hover:text-violet-700
          "
        >
          <ArrowLeft size={17} />
          Back to Sign In
        </Link>
      </div>
      {/* Right Side - Visuals */}
      <div className="hidden min-h-screen lg:block">
        <ForgotPasswordVisual />
      </div>
    </section>
  );
}
