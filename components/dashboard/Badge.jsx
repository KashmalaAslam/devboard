const styles = {
  "In Progress": "bg-blue-50 text-orange-600",
  Review: "bg-violet-50 text-violet-600",
  "To Do": "bg-slate-100 text-slate-500",
  Done: "bg-green-50 text-green-600",
};

export default function Badge({ label }) {
  return (
    <span
      className={`
        inline-flex items-center justify-center
        rounded-full px-3 py-1
        text-xs font-medium
        ${styles[label] || "bg-slate-100 text-slate-500"}
      `}
    >
      {label}
    </span>
  );
}
