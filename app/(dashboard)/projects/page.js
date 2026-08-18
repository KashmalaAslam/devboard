"use client";

import { useState } from "react";
import Button from "../../../components/ui/Button";
import { Plus, Search } from "lucide-react";
const projects = [
  {
    id: 1,
    name: "DevBoard Redesign",
    manager: "Sarah Johnson",
    progress: 75,
    status: "In Progress",
    deadline: "May 24, 2024",
    team: ["/avatars/michael.jpg", "/avatars/sarah.png", "/avatars/emily.png"],
  },
  {
    id: 2,
    name: "Mobile App Development",
    manager: "Michael Davis",
    progress: 60,
    status: "In Progress",
    deadline: "Jun 10, 2024",
    team: ["/avatars/michael.jpg", "/avatars/sarah.png"],
  },
  {
    id: 3,
    name: "Marketing Website",
    manager: "Emily Davis",
    progress: 90,
    status: "Review",
    deadline: "May 18, 2024",
    team: ["/avatars/emily.png", "/avatars/david.png", "/avatars/sarah.png"],
  },
  {
    id: 4,
    name: "API Integration",
    manager: "David Wilson",
    progress: 30,
    status: "To Do",
    deadline: "Jun 5, 2024",
    team: ["/avatars/david.png", "/avatars/michael.jpg"],
  },
  {
    id: 5,
    name: "Database Migration",
    manager: "Jessica Brown",
    progress: 100,
    status: "Done",
    deadline: "Apr 26, 2024",
    team: ["/avatars/jessica.jpg", "/avatars/sarah.png", "/avatars/emily.png"],
  },
];

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All Status" || project.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 p-8">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Projects</h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage and track all your projects.
          </p>
        </div>

        <Button variant="primary" icon={Plus} iconPosition="left">
          New Project
        </Button>
      </div>

      {/* Filters */}
      <div className="">
        <div className="flex flex-col gap-4 sm:flex-row">
          {/* SEARCH */}

          <div
            className="
              hidden
              h-10
              w-[320px]
              items-center
              gap-3
              rounded-md
              border
              border-violet-200
              bg-white
              px-3
              md:flex
            "
          >
            <Search size={18} className="shrink-0 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                min-w-0
                flex-1
                bg-transparent
                text-sm
                text-slate-700
                outline-none
                placeholder:text-slate-400
              "
            />
          </div>

          {/* Status */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none focus:outline-none focus:ring-1 focus:ring-violet-500"
          >
            <option>All Status</option>
            <option>To Do</option>
            <option>In Progress</option>
            <option>Review</option>
            <option>Done</option>
          </select>
        </div>
      </div>

      {/* Projects Table */}
      <div className="overflow-hidden rounded-md border border-slate-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-900px">
            <thead>
              <tr className="border-b border-slate-200 ">
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Project
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Manager
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Progress
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Status
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Deadline
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Team
                </th>

                <th className="px-6 py-4"></th>
              </tr>
            </thead>

            <tbody>
              {filteredProjects.map((project) => (
                <ProjectRow key={project.id} project={project} />
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="px-6 py-12 text-center">
            <p className="text-sm font-medium text-slate-700">
              No projects found
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Try changing your search or filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectRow({ project }) {
  const getProgressColor = (progress) => {
    if (progress <= 30) return "bg-red-500";
    if (progress <= 60) return "bg-orange-500";
    if (progress <= 80) return "bg-violet-500";
    return "bg-green-500";
  };
  return (
    <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">
      {/* Project */}
      <td className="px-6 py-4">
        <div>
          <p className="text-sm font-semibold text-slate-800">{project.name}</p>

          <p className="mt-1 text-xs text-slate-400">Project #{project.id}</p>
        </div>
      </td>

      {/* Manager */}
      <td className="px-6 py-4">
        <span className="text-sm text-slate-600">{project.manager}</span>
      </td>

      {/* Progress */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-100">
            <div
              className={`h-full rounded-full transition-all duration-300 ${getProgressColor(
                project.progress,
              )}`}
              style={{ width: `${project.progress}%` }}
            />
          </div>

          <span className="text-xs font-medium text-slate-600">
            {project.progress}%
          </span>
        </div>
      </td>

      {/* Status */}
      <td className="px-6 py-4">
        <StatusBadge status={project.status} />
      </td>

      {/* Deadline */}
      <td className="px-6 py-4">
        <span className="text-sm text-slate-600">{project.deadline}</span>
      </td>

      {/* Team */}
      <td className="px-6 py-4">
        <div className="flex -space-x-2">
          {project.team.map((member, index) => (
            <div
              key={index}
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-violet-100 text-[10px] font-semibold text-violet-700"
            >
              <img
                src={member}
                alt="Team member"
                className="h-full w-full rounded-full object-contain"
              />
            </div>
          ))}
        </div>
      </td>

      {/* Actions */}
      <td className="px-6 py-4">
        <button className="text-slate-400 hover:text-slate-700">⋮</button>
      </td>
    </tr>
  );
}

function StatusBadge({ status }) {
  const styles = {
    "In Progress": "bg-orange-50 text-orange-600",
    "To Do": "bg-slate-100 text-slate-600",
    Review: "bg-purple-50 text-purple-600",
    Done: "bg-green-50 text-green-600",
  };

  return (
    <span
      className={`inline-flex rounded-md px-2.5 py-1 text-xs font-medium ${
        styles[status] || "bg-slate-100 text-slate-600"
      }`}
    >
      {status}
    </span>
  );
}
