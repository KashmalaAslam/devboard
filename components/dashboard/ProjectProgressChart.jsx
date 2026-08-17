"use client";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const datasets = {
  week: [
    { day: "Mon", value: 20 },
    { day: "Tue", value: 35 },
    { day: "Wed", value: 45 },
    { day: "Thu", value: 60 },
    { day: "Fri", value: 75 },
    { day: "Sat", value: 65 },
    { day: "Sun", value: 80 },
  ],
  month: [
    { week: "Week 1", value: 20 },
    { week: "Week 2", value: 33 },
    { week: "Week 3", value: 65 },
    { week: "Week 4", value: 85 },
  ],
};

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">
      {payload[0].value}%
    </div>
  );
}

export default function ProjectProgressChart() {
  const [range, setRange] = useState("month");
  const data = datasets[range];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-slate-800">Project Progress</h3>
        <select
          className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-500 active:border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-300"
          onChange={(e) => setRange(e.target.value)}
        >
          <option value="week">This Week</option>
          <option value="month">This Month</option>
        </select>
      </div>

      <div className="mt-4 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#F1F5F9"
            />
            <XAxis
              dataKey={range === "week" ? "day" : "week"}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#94A3B8" }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#94A3B8" }}
              tickFormatter={(v) => `${v}%`}
            />
            <Tooltip content={<CustomTooltip />} />
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
    </div>
  );
}
