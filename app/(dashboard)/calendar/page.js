"use client";

import { useState } from "react";
import Button from "../../../components/ui/Button";
import { Plus } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Team Meeting",
    date: "2026-08-04",
    time: "10:00 AM",
    type: "meeting",
  },
  {
    id: 2,
    title: "Design Review",
    date: "2026-08-08",
    time: "02:00 PM",
    type: "review",
  },
  {
    id: 3,
    title: "Website Deadline",
    date: "2026-08-12",
    time: "05:00 PM",
    type: "deadline",
  },
  {
    id: 4,
    title: "Client Meeting",
    date: "2026-08-18",
    time: "11:30 AM",
    type: "meeting",
  },
  {
    id: 5,
    title: "API Integration",
    date: "2026-08-22",
    time: "03:00 PM",
    type: "task",
  },
  {
    id: 6,
    title: "Project Launch",
    date: "2026-08-28",
    time: "09:00 AM",
    type: "deadline",
  },
];

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 7, 1));

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthName = currentDate.toLocaleString("default", {
    month: "long",
  });

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const firstDay = new Date(year, month, 1).getDay();

  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const days = [];

  // Empty cells before first day
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Actual days
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Calendar</h1>

          <p className="mt-1 text-sm text-slate-500">
            View and manage your upcoming events.
          </p>
        </div>

        <Button variant="primary" icon={Plus} iconPosition="left">
          Add Event
        </Button>
      </div>

      {/* Calendar Container */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        {/* Calendar Toolbar */}
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4 sm:px-6">
          <div className="rounded-lg flex items-center gap-3">
            <button
              onClick={previousMonth}
              className="border-none border border-slate-200 px-3 py-2 text-slate-500 hover:bg-slate-50"
            >
              ←
            </button>
            <button
              onClick={goToToday}
              className="border-none border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
            >
              Today
            </button>

            <button
              onClick={nextMonth}
              className="border-none border-y border-r border-slate-200 px-3 py-2 text-slate-500 hover:bg-slate-50"
            >
              →
            </button>
          </div>

          <h2 className="text-lg font-semibold text-slate-800">
            {monthName} {year}
          </h2>

          <div className="hidden sm:block">
            <select className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 outline-none">
              <option>Month</option>
              <option>Week</option>
              <option>Day</option>
            </select>
          </div>
        </div>

        {/* Calendar */}
        <div className="overflow-x-auto">
          <div className="min-w-700px">
            {/* Weekdays */}
            <div className="grid grid-cols-7 border-b border-slate-200">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="px-3 py-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-400"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Days */}
            <div className="grid grid-cols-7">
              {days.map((day, index) => (
                <CalendarDay key={index} day={day} year={year} month={month} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-5">
        <LegendItem color="bg-blue-500" label="Meeting" />

        <LegendItem color="bg-violet-500" label="Review" />

        <LegendItem color="bg-red-500" label="Deadline" />

        <LegendItem color="bg-green-500" label="Task" />
      </div>
    </div>
  );
}

function CalendarDay({ day, year, month }) {
  if (!day) {
    return (
      <div className="min-h-120px border-b border-r border-slate-100 bg-slate-50/40" />
    );
  }

  const dateString = `${year}-${String(month + 1).padStart(
    2,
    "0",
  )}-${String(day).padStart(2, "0")}`;

  const dayEvents = events.filter((event) => event.date === dateString);

  const today = new Date();

  const isToday =
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

  return (
    <div className="min-h-120px border-b border-r border-slate-100 p-2 transition hover:bg-slate-50">
      {/* Date */}
      <div className="mb-2 flex justify-end">
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium ${
            isToday ? "bg-violet-600 text-white" : "text-slate-600"
          }`}
        >
          {day}
        </span>
      </div>

      {/* Events */}
      <div className="space-y-1">
        {dayEvents.map((event) => (
          <CalendarEvent key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

function CalendarEvent({ event }) {
  const eventStyles = {
    meeting: "bg-blue-50 text-blue-600 border-blue-100",
    review: "bg-violet-50 text-violet-600 border-violet-100",
    deadline: "bg-red-50 text-red-600 border-red-100",
    task: "bg-green-50 text-green-600 border-green-100",
  };

  return (
    <div
      className={`cursor-pointer truncate rounded-md border px-2 py-1.5 text-[11px] font-medium transition hover:opacity-80 ${
        eventStyles[event.type]
      }`}
      title={`${event.title} — ${event.time}`}
    >
      {event.title}
    </div>
  );
}

function LegendItem({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-2.5 w-2.5 rounded-full ${color}`} />

      <span className="text-xs text-slate-500">{label}</span>
    </div>
  );
}
