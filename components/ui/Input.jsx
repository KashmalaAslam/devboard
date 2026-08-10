export default function Input({
  label,
  icon: Icon,
  type = "text",
  placeholder,
  error,
  ...props
}) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <div className="relative">
        {Icon && (
          <Icon
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
        )}

        <input
          type={type}
          placeholder={placeholder}
          className="
            w-full
            rounded-sm
            border
            border-slate-300
            bg-white
            py-3
            pr-4
            pl-12
            text-sm
            outline-none
            transition
            focus:border-indigo-500
            focus:ring-2
            focus:ring-indigo-100
          "
          {...props}
        />
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
