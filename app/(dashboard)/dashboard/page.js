import DashboardHeader from "../../../components/dashboard/DashboardHeader";
import StatCard from "../../../components/dashboard/StatCard";
import ProjectProgressChart from "../../../components/dashboard/ProjectProgressChart";
import TasksOverviewChart from "../../../components/dashboard/TasksOverviewChart";
import RecentProjectsTable from "../../../components/dashboard/RecentProjectsTable";
import UpcomingDeadlines from "../../../components/dashboard/UpcomingDeadlines";

const stats = [
  { label: "Total Projects", value: 24, trend: "12%" },
  { label: "Active Tasks", value: 48, trend: "8%" },
  { label: "Team Members", value: 16, trend: "4%" },
  { label: "Completion Rate", value: "76%", trend: "10%", ring: 76 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6 p-8">
      <DashboardHeader name="Kashmala" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ProjectProgressChart />
        <TasksOverviewChart />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <RecentProjectsTable />
        <UpcomingDeadlines />
      </div>
    </div>
  );
}
