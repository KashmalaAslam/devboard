"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import {
  LayoutDashboard,
  CheckCircle2,
  Users,
  BarChart3,
  Star,
} from "lucide-react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

// ---------------------------------------------------------------------------
// Mock data
// ---------------------------------------------------------------------------

const FEATURES = [
  {
    icon: LayoutDashboard,
    title: "Unified Dashboard",
    description:
      "See every project, task, and deadline in one clean, organized view.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Assign tasks, track status, and keep your whole team in sync.",
  },
  {
    icon: BarChart3,
    title: "Insightful Reports",
    description:
      "Track productivity and time spent with visual, easy-to-read charts.",
  },
];

const TESTIMONIALS = [
  {
    name: "Amanda Reyes",
    role: "Product Manager, Nimbus",
    quote:
      "DevBoard replaced three different tools for us. Our team finally has one place to plan and ship work.",
    avatarUrl: "https://i.pravatar.cc/80?img=47",
  },
  {
    name: "Carlos Mendes",
    role: "Engineering Lead, Fintra",
    quote:
      "The reporting view alone saved our leads hours every week. Setup took minutes, not days.",
    avatarUrl: "https://i.pravatar.cc/80?img=12",
  },
  {
    name: "Priya Nair",
    role: "Design Director, Loop",
    quote:
      "Clean, fast, and it actually looks good. Our designers stopped complaining about the project tool.",
    avatarUrl: "https://i.pravatar.cc/80?img=32",
  },
];

const FOOTER_LINKS = {
  Product: ["Features", "Pricing", "Integrations", "Changelog"],
  Company: ["About", "Careers", "Blog", "Contact"],
  Resources: ["Documentation", "Help Center", "API Reference", "Status"],
};

// ---------------------------------------------------------------------------
// Nav
// ---------------------------------------------------------------------------

function NavBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-2 py-2 sm:px-6">
        <div className="flex items-center gap-2">
          {/* LOGO */}
          <div className="flex h-20 items-center px-4 lg:px-5">
            <div>
              <Image
                src="/logos/logo-with-text.png"
                alt="DevBoard"
                width={130}
                height={30}
              />
            </div>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#features" className="hover:text-indigo-600">
            Features
          </a>
          <a href="#testimonials" className="hover:text-indigo-600">
            Testimonials
          </a>
          <a href="#footer" className="hover:text-indigo-600">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={"/login"}
            className="hidden text-sm font-medium text-slate-600 hover:text-indigo-600 sm:block"
          >
            Login
          </Link>
          <Link href={"/signup"}>
            <Button variant="primary">Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
            Now in public beta
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-800 sm:text-4xl lg:text-5xl">
            Plan, track, and deliver
            <span className="text-indigo-500"> projects that ship</span>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base text-slate-500 lg:mx-0">
            DevBoard brings your team's tasks, timelines, and reports into one
            modern dashboard — so nothing falls through the cracks.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <Link href={"/signup"}>
              <Button variant="primary">Get Started Free</Button>
            </Link>
            <Link href={"/login"}>
              <Button variant="outline">Login to Dashboard</Button>
            </Link>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80"
            alt="DevBoard dashboard preview"
            className="w-full rounded-xl border border-slate-200 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Features
// ---------------------------------------------------------------------------

function Features() {
  return (
    <section id="features" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
            Everything your team needs
          </h2>
          <p className="mt-3 text-sm text-slate-500 sm:text-base">
            Built for teams who want less busywork and more shipped work.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-md border border-slate-200 bg-white p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-500">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-800">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------

function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
            Loved by product teams
          </h2>
          <p className="mt-3 text-sm text-slate-500 sm:text-base">
            Don't just take our word for it.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-md border border-slate-200 bg-white p-6"
            >
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                "{t.quote}"
              </p>
              <div className="mt-5 flex items-center gap-3">
                <img
                  src={t.avatarUrl}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-slate-800">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// CTA banner
// ---------------------------------------------------------------------------

function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
      <div className="rounded-2xl bg-linear-to-r from-indigo-500 to-purple-500 px-6 py-12 text-center sm:px-12">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Ready to get organized?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-indigo-100 sm:text-base">
          Create your account in under a minute. No credit card required.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={"/signup"}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-indigo-600 transition-colors hover:bg-indigo-50 sm:w-auto"
          >
            <CheckCircle2 className="h-4 w-4" />
            Create Free Account
          </Link>
          <Link
            href={"/login"}
            className="w-full rounded-lg border border-white/40 px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

function Footer() {
  return (
    <footer id="footer" className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2">
              {/* LOGO */}
              <div className="flex h-20 items-center">
                <div>
                  <Image
                    src="/logos/logo-with-text.png"
                    alt="DevBoard"
                    width={130}
                    height={30}
                  />
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-500">
              Modern project management for teams that ship.
            </p>
            <div className="mt-4 flex gap-3 text-slate-400">
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-indigo-600"
              >
                <FaTwitter className="h-4 w-4" />
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-indigo-600">
                <FaGithub className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-indigo-600"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-sm font-semibold text-slate-800">
                {section}
              </h4>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 hover:text-indigo-600"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} DevBoard. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <NavBar />
      <Hero />
      <Features />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </div>
  );
}
