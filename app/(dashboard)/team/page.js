"use client";

import { useState, useMemo } from "react";
import { Search, MoreVertical, Mail, Plus } from "lucide-react";
import Button from "../../../components/ui/Button";

// ---------------------------------------------------------------------------
// Mock data — swap for your API / DB call
// ---------------------------------------------------------------------------

const TEAM_MEMBERS = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah@devboard.com",
    role: "Product Designer",
    status: "Online",
    avatarColor: "bg-purple-500",
    avatarUrl: "/avatars/sarah.png",
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "michael@devboard.com",
    role: "Frontend Developer",
    status: "Online",
    avatarColor: "bg-indigo-500",
    avatarUrl: "/avatars/michael.jpg",
  },
  {
    id: "3",
    name: "Emily Davis",
    email: "emily@devboard.com",
    role: "UI/UX Designer",
    status: "Away",
    avatarColor: "bg-pink-500",
    avatarUrl: "/avatars/emily.png",
  },
  {
    id: "4",
    name: "David Wilson",
    email: "david@devboard.com",
    role: "Backend Developer",
    status: "Offline",
    avatarColor: "bg-slate-500",
    avatarUrl: "/avatars/david.png",
  },
  {
    id: "5",
    name: "Jessica Brown",
    email: "jessica@devboard.com",
    role: "Project Manager",
    status: "Online",
    avatarColor: "bg-emerald-500",
    avatarUrl: "/avatars/jessica.jpg",
  },
];

// ---------------------------------------------------------------------------
// Status pill — dot + label, colors follow the semantic tokens
// (Success #23C55E, Warning #F5960B, Neutral Slate 500 #64748B)
// ---------------------------------------------------------------------------

const STATUS_STYLES = {
  Online: { dot: "bg-emerald-500", text: "text-emerald-600" },
  Away: { dot: "bg-amber-500", text: "text-amber-600" },
  Offline: { dot: "bg-slate-400", text: "text-slate-500" },
};

function StatusPill({ status }) {
  const style = STATUS_STYLES[status];
  return (
    <span className="inline-flex items-center gap-1.5 text-sm font-medium">
      <span className={`h-2 w-2 rounded-full ${style.dot}`} />
      <span className={style.text}>{status}</span>
    </span>
  );
}

// ---------------------------------------------------------------------------
// Avatar — initials fallback, matches the purple/slate avatar style on the board
// ---------------------------------------------------------------------------

function Avatar({ member }) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  if (member.avatarUrl) {
    return (
      <img
        src={member.avatarUrl}
        alt={member.name}
        className="h-9 w-9 shrink-0 rounded-full object-cover"
      />
    );
  }

  return (
    <div
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${member.avatarColor}`}
    >
      {initials}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Row actions — shared "more" button used by both table and card views
// ---------------------------------------------------------------------------

function MoreButton({ name }) {
  return (
    <button
      type="button"
      className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
      aria-label={`More options for ${name}`}
    >
      <MoreVertical className="h-4 w-4" />
    </button>
  );
}

// ---------------------------------------------------------------------------
// Team page
// ---------------------------------------------------------------------------

export default function TeamPage() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return TEAM_MEMBERS;
    return TEAM_MEMBERS.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.email.toLowerCase().includes(q) ||
        m.role.toLowerCase().includes(q),
    );
  }, [search]);

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      {/* Page Header */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-xl font-bold text-slate-800 sm:text-2xl">
              Team Members
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Manage your team and their tasks effectively.
            </p>
          </div>

          {/* Invite button stays next to the title on larger screens,
              full width and below on mobile so it's an easy thumb target */}
          <Button
            variant="primary"
            icon={Plus}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Invite Member
          </Button>
        </div>

        {/* SEARCH — full width on every breakpoint, no longer hidden on mobile */}
        <div
          className="
            flex h-10 w-full items-center gap-3 rounded-md border
            border-violet-200 bg-white px-3
            sm:w-[320px]
          "
        >
          <Search size={18} className="shrink-0 text-slate-400" />
          <input
            type="text"
            placeholder="Search team members..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              min-w-0 flex-1 bg-transparent text-sm text-slate-700
              outline-none placeholder:text-slate-400
            "
          />
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* Mobile / tablet: stacked cards (below md)                     */}
      {/* ------------------------------------------------------------- */}
      <div className="space-y-3 md:hidden">
        {filtered.map((member) => (
          <div
            key={member.id}
            className="rounded-md border border-slate-200 bg-white p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <Avatar member={member} />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-slate-800">
                    {member.name}
                  </p>
                  <p className="truncate text-xs text-slate-500">
                    {member.role}
                  </p>
                </div>
              </div>
              <MoreButton name={member.name} />
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3">
              <a
                href={`mailto:${member.email}`}
                className="flex min-w-0 items-center gap-1.5 text-xs text-slate-500 hover:text-indigo-600"
              >
                <Mail className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{member.email}</span>
              </a>
              <StatusPill status={member.status} />
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="rounded-md border border-slate-200 bg-white px-5 py-10 text-center text-sm text-slate-400">
            No members match "{search}".
          </div>
        )}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* Desktop / tablet-landscape: table (md and up)                 */}
      {/* ------------------------------------------------------------- */}
      <div className="hidden overflow-hidden rounded-md border border-slate-200 bg-white md:block">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 text-xs font-medium uppercase tracking-wide text-slate-400">
                <th className="px-5 py-3">Name</th>
                <th className="px-5 py-3">Email</th>
                <th className="px-5 py-3">Role</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((member) => (
                <tr
                  key={member.id}
                  className="border-b border-slate-50 last:border-0 hover:bg-slate-50/60"
                >
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <Avatar member={member} />
                      <span className="text-sm font-medium text-slate-800">
                        {member.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-indigo-600"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      {member.email}
                    </a>
                  </td>
                  <td className="px-5 py-3 text-sm text-slate-600">
                    {member.role}
                  </td>
                  <td className="px-5 py-3">
                    <StatusPill status={member.status} />
                  </td>
                  <td className="px-5 py-3 text-right">
                    <MoreButton name={member.name} />
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-5 py-10 text-center text-sm text-slate-400"
                  >
                    No members match "{search}".
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
