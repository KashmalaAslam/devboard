const colors = {
  violet: "bg-violet-600",
  blue: "bg-blue-500",
  green: "bg-green-500",
  slate: "bg-slate-300",
  orange: "bg-orange-500",
  red: "bg-red-500",
};

export default function ProgressBar({ value, color = "violet" }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 w-24 overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full rounded-full ${colors[color]}`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="text-xs font-medium text-slate-500">{value}%</span>
    </div>
  );
}
