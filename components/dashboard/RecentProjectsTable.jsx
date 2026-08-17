import Badge from "../dashboard/Badge";
import ProgressBar from "../dashboard/ProgressBar";

const projects = [
  {
    name: "DevBoard Redesign",
    progress: 75,
    color: "violet",
    tasks: "12/16",
    deadline: "May 24, 2024",
    status: "In Progress",
  },
  {
    name: "Mobile App Development",
    progress: 60,
    color: "blue",
    tasks: "18/30",
    deadline: "Jun 10, 2024",
    status: "In Progress",
  },
  {
    name: "Marketing Website",
    progress: 90,
    color: "green",
    tasks: "22/24",
    deadline: "May 18, 2024",
    status: "Review",
  },
  {
    name: "API Integration",
    progress: 30,
    color: "slate",
    tasks: "6/20",
    deadline: "Jun 5, 2024",
    status: "To Do",
  },
];

export default function RecentProjectsTable() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h3 className="font-semibold text-slate-800">Recent Projects</h3>

      <table className="mt-4 w-full text-left text-sm">
        <thead>
          <tr className="text-xs text-slate-400">
            <th className="pb-3 font-medium">Project</th>
            <th className="pb-3 font-medium">Progress</th>
            <th className="pb-3 font-medium">Tasks</th>
            <th className="pb-3 font-medium">Deadline</th>
            <th className="pb-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {projects.map((p) => (
            <tr key={p.name}>
              <td className="py-3 font-medium text-slate-700">{p.name}</td>
              <td className="py-3">
                <ProgressBar value={p.progress} color={p.color} />
              </td>
              <td className="py-3 text-slate-500">{p.tasks}</td>
              <td className="py-3 text-slate-500">{p.deadline}</td>
              <td className="py-3">
                <Badge label={p.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
