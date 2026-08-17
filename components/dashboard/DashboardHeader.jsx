import { Plus } from "lucide-react";
import Button from "../ui/Button";

export default function DashboardHeader({ name = "Sarah" }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Good morning, {name}! 👋
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Here's what's happening with your projects today.
        </p>
      </div>

      {/* <button
        type="button"
        className="flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-700"
      >
        <Plus size={18} />
        New Project
      </button> */}
      <Button variant="primary" icon={Plus} iconPosition="left">
        New Project
      </Button>
    </div>
  );
}
