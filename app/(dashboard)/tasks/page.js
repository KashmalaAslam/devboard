"use client";

import { useState } from "react";
import { Search, Plus } from "lucide-react";
import Button from "../../../components/ui/Button";

const tasks = [
  {
    id: 1,
    title: "Create wireframes",
    description: "Design the initial dashboard wireframes.",
    project: "DevBoard Redesign",
    priority: "High",
    status: "To Do",
    dueDate: "May 20",
    assignee: {
      name: "Sarah Johnson",
      image: "/avatars/sarah.png",
    },
  },
  {
    id: 2,
    title: "Setup database",
    description: "Configure the project database structure.",
    project: "API Integration",
    priority: "Medium",
    status: "To Do",
    dueDate: "May 21",
    assignee: {
      name: "Michael Davis",
      image: "/avatars/michael.jpg",
    },
  },
  {
    id: 3,
    title: "Build dashboard",
    description: "Develop the main dashboard interface.",
    project: "DevBoard Redesign",
    priority: "High",
    status: "In Progress",
    dueDate: "May 23",
    assignee: {
      name: "Emily Davis",
      image: "/avatars/emily.png",
    },
  },
  {
    id: 4,
    title: "Responsive testing",
    description: "Test dashboard on tablet and mobile devices.",
    project: "Mobile App Development",
    priority: "Medium",
    status: "In Progress",
    dueDate: "May 24",
    assignee: {
      name: "David Wilson",
      image: "/avatars/david.png",
    },
  },
  {
    id: 5,
    title: "Review landing page",
    description: "Review final landing page implementation.",
    project: "Marketing Website",
    priority: "Low",
    status: "Review",
    dueDate: "May 25",
    assignee: {
      name: "Jessica Brown",
      image: "/avatars/jessica.jpg",
    },
  },
  {
    id: 6,
    title: "Authentication flow",
    description: "Complete login and signup functionality.",
    project: "DevBoard Redesign",
    priority: "High",
    status: "Done",
    dueDate: "May 18",
    assignee: {
      name: "Sarah Johnson",
      image: "/avatars/sarah.png",
    },
  },
];

const columns = [
  {
    title: "To Do",
    color: "bg-slate-400",
  },
  {
    title: "In Progress",
    color: "bg-blue-500",
  },
  {
    title: "Review",
    color: "bg-violet-500",
  },
  {
    title: "Done",
    color: "bg-green-500",
  },
];

export default function TasksPage() {
  const [search, setSearch] = useState("");

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Tasks</h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage and track your team's tasks.
          </p>
        </div>

        <Button variant="primary" icon={Plus} iconPosition="left">
          New Task
        </Button>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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
        <div className="flex gap-2">
          <button className="rounded-lg bg-violet-50 px-3 py-2 text-sm font-medium text-violet-600">
            Board
          </button>

          <button className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">
            List
          </button>

          <button className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">
            Filter
          </button>
        </div>
      </div>

      {/* Board */}
      <div className="grid gap-5 overflow-x-auto pb-4 lg:grid-cols-4">
        {columns.map((column) => {
          const columnTasks = filteredTasks.filter(
            (task) => task.status === column.title,
          );

          return (
            <TaskColumn
              key={column.title}
              column={column}
              tasks={columnTasks}
            />
          );
        })}
      </div>
    </div>
  );
}

function TaskColumn({ column, tasks }) {
  return (
    <div className="min-w-280px rounded-xl bg-slate-100 p-4">
      {/* Column Header */}
      <div className="mb-3 flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${column.color}`} />

          <h2 className="text-sm font-semibold text-slate-700">
            {column.title}
          </h2>

          <span className="rounded-md bg-slate-200 px-2 py-0.5 text-xs font-medium text-slate-500">
            {tasks.length}
          </span>
        </div>

        <button className="text-slate-400 hover:text-slate-700">+</button>
      </div>

      {/* Tasks */}
      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}

        {tasks.length === 0 && (
          <div className="rounded-lg border border-dashed border-slate-200 px-4 py-8 text-center">
            <p className="text-xs text-slate-400">No tasks</p>
          </div>
        )}
      </div>
    </div>
  );
}

function TaskCard({ task }) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      {/* Top */}
      <div className="flex items-start justify-between gap-3">
        <span className={getPriorityStyle(task.priority)}>{task.priority}</span>

        <button className="text-slate-300 opacity-0 transition group-hover:opacity-100 hover:text-slate-600">
          ⋮
        </button>
      </div>

      {/* Title */}
      <h3 className="mt-3 text-sm font-semibold text-slate-800">
        {task.title}
      </h3>

      {/* Description */}
      <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">
        {task.description}
      </p>

      {/* Project */}
      <div className="mt-3">
        <span className="text-[11px] font-medium text-violet-600">
          {task.project}
        </span>
      </div>

      {/* Bottom */}
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
        {/* Due Date */}
        <span className="text-xs text-slate-400">{task.dueDate}</span>

        {/* Avatar */}
        <img
          src={task.assignee.image}
          alt={task.assignee.name}
          title={task.assignee.name}
          className="h-8 w-8 rounded-full object-contain"
        />
      </div>
    </div>
  );
}

function getPriorityStyle(priority) {
  const styles = {
    High: "rounded-md bg-red-50 px-2 py-1 text-[10px] font-medium text-red-600",
    Medium:
      "rounded-md bg-orange-50 px-2 py-1 text-[10px] font-medium text-orange-600",
    Low: "rounded-md bg-green-50 px-2 py-1 text-[10px] font-medium text-green-600",
  };

  return styles[priority] || styles.Low;
}
