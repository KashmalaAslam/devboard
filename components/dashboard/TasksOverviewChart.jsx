"use client";

import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const datasets = {
  week: [
    { label: "Done", value: 9, color: "#22C55E" },
    { label: "In Progress", value: 7, color: "#E86100" },
    { label: "Review", value: 3, color: "#7C3AED" },
    { label: "To Do", value: 4, color: "#CBD5E1" },
  ],
  month: [
    { label: "Done", value: 18, color: "#22C55E" },
    { label: "In Progress", value: 16, color: "#E86100" },
    { label: "Review", value: 8, color: "#7C3AED" },
    { label: "To Do", value: 6, color: "#CBD5E1" },
  ],
};

export default function TasksOverviewChart() {
  const [range, setRange] = useState("month");
  const data = datasets[range];
  const total = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-slate-800">Tasks Overview</h3>
        <select
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-500 active:border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-300"
        >
          <option value="month">This Month</option>
          <option value="week">This Week</option>
        </select>
      </div>

      <div className="mt-4 flex items-center gap-6">
        <div className="relative h-40 w-40 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={55}
                outerRadius={75}
                paddingAngle={3}
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry) => (
                  <Cell key={entry.label} fill={entry.color} stroke="none" />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-slate-800">{total}</span>
            <span className="text-xs text-slate-400">Total Tasks</span>
          </div>
        </div>

        <div className="flex-1 space-y-3">
          {data.map((d) => (
            <div
              key={d.label}
              className="flex items-center justify-between text-sm"
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: d.color }}
                />
                <span className="text-slate-600">{d.label}</span>
              </div>
              <span className="font-medium text-slate-800">
                {d.value} ({((d.value / total) * 100).toFixed(1)}%)
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
