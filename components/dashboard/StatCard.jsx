import { TrendingUp } from "lucide-react";

export default function StatCard({ label, value, trend, ring }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5">
      <div>
        <p className="text-sm text-slate-400">{label}</p>
        <p className="mt-1 text-2xl font-bold text-slate-800">{value}</p>
        {trend && (
          <p className="mt-2 flex items-center gap-1 text-xs font-medium text-green-600">
            <TrendingUp size={14} />
            {trend}{" "}
            <span className="font-normal text-slate-400">vs last month</span>
          </p>
        )}
      </div>

      {ring && (
        <div className="relative h-14 w-14">
          <svg viewBox="0 0 36 36" className="h-14 w-14 -rotate-90">
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="4"
            />
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#7C3AED"
              strokeWidth="4"
              strokeDasharray={`${ring} 100`}
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
