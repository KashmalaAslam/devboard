"use client";

import { useState } from "react";
import { ChevronDown, ArrowUp, Clock } from "lucide-react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// ---------------------------------------------------------------------------
// Mock data — swap for your API / DB call
// ---------------------------------------------------------------------------

const TEAM_PRODUCTIVITY = [
  { label: "Mon", value: 42 },
  { label: "Tue", value: 58 },
  { label: "Wed", value: 35 },
  { label: "Thu", value: 70 },
  { label: "Fri", value: 52 },
  { label: "Sat", value: 20 },
  { label: "Sun", value: 15 },
];

const TASKS_COMPLETED = [
  { label: "Week 1", value: 18 },
  { label: "Week 2", value: 26 },
  { label: "Week 3", value: 14 },
  { label: "Week 4", value: 30 },
];

const TIME_BREAKDOWN = [
  { label: "Development", value: 40, color: "#6366F1" },
  { label: "Design", value: 30, color: "#8B5CF6" },
  { label: "Testing", value: 20, color: "#F5960B" },
  { label: "Other", value: 10, color: "#CBD5E1" },
];

const TIME_RANGES = ["This Week", "This Month", "This Quarter", "This Year"];

// ---------------------------------------------------------------------------
// Small shared bits
// ---------------------------------------------------------------------------

function RangeDropdown({ value, onChange }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          appearance-none rounded-md border border-slate-200 bg-white
          py-1.5 pl-3 pr-8 text-xs font-medium text-slate-600
          outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100
        "
      >
        {TIME_RANGES.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
    </div>
  );
}

function ChartCard({ title, range, onRangeChange, children }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
        <RangeDropdown value={range} onChange={onRangeChange} />
      </div>
      {children}
    </div>
  );
}

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="rounded-md border border-slate-200 bg-white px-3 py-2 text-xs shadow-sm">
      <p className="font-medium text-slate-700">{label}</p>
      <p className="text-slate-500">{payload[0].value}</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Reports page
// ---------------------------------------------------------------------------

export default function ReportsPage() {
  const [productivityRange, setProductivityRange] = useState("This Month");
  const [tasksRange, setTasksRange] = useState("This Month");

  const totalBreakdown = TIME_BREAKDOWN.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      {/* Page header */}
      <div>
        <h1 className="text-xl font-bold text-slate-800 sm:text-2xl">
          Reports
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Track team performance and project activity over time.
        </p>
      </div>

      {/* Chart grid — 1 column on mobile, 2 on md+ */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Team Productivity */}
        <ChartCard
          title="Team Productivity"
          range={productivityRange}
          onRangeChange={setProductivityRange}
        >
          <div className="h-56 w-full sm:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={TEAM_PRODUCTIVITY}
                margin={{ top: 20, right: 10, left: -20, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#F1F5F9"
                />
                <XAxis
                  dataKey="label"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 11, fill: "#94A3B8" }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 11, fill: "#94A3B8" }}
                  width={28}
                />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: "#F8FAFC" }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#7C3AED"
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: "#7C3AED", strokeWidth: 0 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        {/* Tasks Completed */}
        <ChartCard
          title="Tasks Completed"
          range={tasksRange}
          onRangeChange={setTasksRange}
        >
          <div className="h-56 w-full sm:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={TASKS_COMPLETED} barCategoryGap="40%">
                <CartesianGrid vertical={false} stroke="#F1F5F9" />
                <XAxis
                  dataKey="label"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 11, fill: "#94A3B8" }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 11, fill: "#94A3B8" }}
                  width={28}
                />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: "#F8FAFC" }}
                />
                <Bar dataKey="value" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        {/* Time Tracked */}
        <div className="rounded-md border border-slate-200 bg-white p-4 sm:p-5">
          <h3 className="mb-4 text-sm font-semibold text-slate-800">
            Time Tracked
          </h3>

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-500">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800 sm:text-3xl">
                120h 30m
              </p>
              <div className="mt-1 flex items-center gap-1 text-xs font-medium text-emerald-600">
                <ArrowUp className="h-3 w-3" />
                <span>15%</span>
                <span className="font-normal text-slate-400">
                  vs last month
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Category breakdown donut */}
        <div className="rounded-md border border-slate-200 bg-white p-4 sm:p-5">
          <h3 className="mb-4 text-sm font-semibold text-slate-800">
            Time by Category
          </h3>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="h-40 w-40 shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={TIME_BREAKDOWN}
                    dataKey="value"
                    nameKey="label"
                    innerRadius="65%"
                    outerRadius="100%"
                    paddingAngle={2}
                    stroke="none"
                  >
                    {TIME_BREAKDOWN.map((entry) => (
                      <Cell key={entry.label} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <ul className="w-full space-y-2 sm:w-auto">
              {TIME_BREAKDOWN.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between gap-6 text-sm"
                >
                  <span className="flex items-center gap-2 text-slate-600">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    {item.label}
                  </span>
                  <span className="font-medium text-slate-800">
                    {Math.round((item.value / totalBreakdown) * 100)}%
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
