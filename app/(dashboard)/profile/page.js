"use client";

import { useState } from "react";
import {
  MapPin,
  Calendar,
  Briefcase,
  Mail,
  Pencil,
  PencilSparkles,
} from "lucide-react";
import Button from "../../../components/ui/Button";

// ---------------------------------------------------------------------------
// Mock data — swap for your API / session / DB call
// ---------------------------------------------------------------------------

const USER = {
  name: "Kashmala Aslam",
  role: "Account Manager",
  email: "kashmala@devboard.com",
  location: "San Francisco, USA",
  joined: "Jan 15, 2024",
  bio: "Passionate about creating user-centered designs and solving complex problems.",
  avatarUrl: "/avatars/profile-img.jpg",
  skills: ["Figma", "UI/UX", "Prototyping", "Design System", "User Research"],
};

const TABS = ["Overview", "Activity", "Projects", "Settings"];

const RECENT_ACTIVITY = [
  {
    id: 1,
    text: "Updated the DevBoard Redesign project brief",
    time: "2h ago",
  },
  {
    id: 2,
    text: "Completed 4 tasks in Mobile App Development",
    time: "Yesterday",
  },
  { id: 3, text: "Commented on Marketing Website review", time: "2 days ago" },
];

const PROJECTS = [
  { id: 1, name: "DevBoard Redesign", progress: 75 },
  { id: 2, name: "Mobile App Development", progress: 60 },
  { id: 3, name: "Marketing Website", progress: 90 },
];

// ---------------------------------------------------------------------------
// Small shared bits
// ---------------------------------------------------------------------------

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-1.5 h-4 w-4 shrink-0 text-slate-400" />
      <div className="min-w-0">
        <p className="text-xs text-slate-400">{label}</p>
        <p className="truncate text-sm font-medium text-slate-700">{value}</p>
      </div>
    </div>
  );
}

function SkillTag({ children }) {
  return (
    <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
      {children}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Tab panels
// ---------------------------------------------------------------------------

function OverviewPanel() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2 text-sm font-semibold text-slate-800">Bio</h3>
        <p className="text-sm leading-relaxed text-slate-600">{USER.bio}</p>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-semibold text-slate-800">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {USER.skills.map((skill) => (
            <SkillTag key={skill}>{skill}</SkillTag>
          ))}
        </div>
      </div>
    </div>
  );
}

function ActivityPanel() {
  return (
    <ul className="space-y-4">
      {RECENT_ACTIVITY.map((item) => (
        <li key={item.id} className="flex items-start gap-3">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
          <div>
            <p className="text-sm text-slate-700">{item.text}</p>
            <p className="text-xs text-slate-400">{item.time}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function ProjectsPanel() {
  return (
    <ul className="space-y-4">
      {PROJECTS.map((project) => (
        <li key={project.id}>
          <div className="mb-1 flex items-center justify-between text-sm">
            <span className="font-medium text-slate-700">{project.name}</span>
            <span className="text-slate-500">{project.progress}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-indigo-500"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

// ---------------------------------------------------------------------------
// Profile page
// ---------------------------------------------------------------------------

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="space-y-4 p-4 sm:space-y-6 sm:p-6 lg:p-8">
      {/* Header card: banner + avatar + name + edit button */}
      <div className="overflow-hidden rounded-md border border-slate-200 bg-white">
        <div className="h-20 bg-linear-to-br from-violet-400 to-purple-600  sm:h-32" />

        <div className="px-4 pb-4 sm:px-6 sm:pb-6 mt-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="-mt-10 flex flex-col items-center gap-3 sm:-mt-12 sm:flex-row sm:items-end">
              <img
                src={USER.avatarUrl}
                alt={USER.name}
                className="h-20 w-20 shrink-0 rounded-full border-4 border-white object-cover object-top sm:h-24 sm:w-24"
              />
              <div className="text-center sm:pb-1 sm:text-left ">
                <h1 className="text-lg font-bold text-slate-800 sm:text-xl mt-3">
                  {USER.name}
                </h1>
                <p className="text-sm text-slate-500">{USER.role}</p>
                <a
                  href={`mailto:${USER.email}`}
                  className="mt-0.5 flex items-center justify-center gap-1.5 text-xs text-slate-400 hover:text-indigo-600 sm:justify-start"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {USER.email}
                </a>
              </div>
            </div>
            <Button variant="primary" icon={PencilSparkles} iconPosition="left">
              Edit Profile
            </Button>
            {/* <button
              type="button"
              className="flex items-center justify-center gap-2 self-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600 sm:self-auto"
            >
              <Pencil className="h-4 w-4" />
              Edit Profile
            </button> */}
          </div>

          {/* Tabs */}
          <div className="mt-10 flex gap-6 overflow-x-auto border-b border-slate-100">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`
                  whitespace-nowrap border-b-2 pb-3 text-sm font-medium transition-colors cursor-pointer
                  ${
                    activeTab === tab
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-slate-500 hover:text-slate-700"
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Body: info sidebar + tab content */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Quick info card */}
        <div className="space-y-5 rounded-md border border-slate-200 bg-white p-4 sm:p-5 lg:col-span-1">
          <InfoRow
            icon={MapPin}
            label="Location"
            value={USER.location}
            size={20}
          />
          <InfoRow icon={Calendar} label="Joined" value={USER.joined} />
          <InfoRow icon={Briefcase} label="Role" value={USER.role} />
        </div>

        {/* Tab content */}
        <div className="rounded-md border border-slate-200 bg-white p-4 sm:p-5 lg:col-span-2">
          {activeTab === "Overview" && <OverviewPanel />}
          {activeTab === "Activity" && <ActivityPanel />}
          {activeTab === "Projects" && <ProjectsPanel />}
          {activeTab === "Settings" && (
            <p className="text-sm text-slate-500">
              Head to the{" "}
              <a href="/settings" className="text-indigo-600 hover:underline">
                Settings page
              </a>{" "}
              to manage account preferences.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
