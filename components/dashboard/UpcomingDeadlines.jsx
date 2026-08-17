import { ArrowRight } from "lucide-react";

const deadlines = [
  {
    name: "DevBoard Redesign",
    date: "May 24, 2024",
    left: "2 days left",
    urgent: true,
  },
  {
    name: "Marketing Website",
    date: "May 18, 2024",
    left: "Today",
    urgent: true,
  },
  {
    name: "Mobile App Development",
    date: "Jun 10, 2024",
    left: "19 days left",
    urgent: false,
  },
];

export default function UpcomingDeadlines() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h3 className="font-semibold text-slate-800">Upcoming Deadlines</h3>

      <div className="mt-4 divide-y divide-slate-100">
        {deadlines.map((d) => (
          <div key={d.name} className="flex items-center justify-between py-3">
            <div>
              <p className="text-sm font-medium text-slate-700">{d.name}</p>
              <p className="text-xs text-slate-400">{d.date}</p>
            </div>
            <span
              className={`text-xs font-semibold ${d.urgent ? "text-red-500" : "text-slate-400"}`}
            >
              {d.left}
            </span>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="mt-3 flex items-center gap-1 text-sm font-medium text-violet-600 hover:text-violet-700 cursor-pointer"
      >
        View all deadlines <ArrowRight size={14} />
      </button>
    </div>
  );
}
