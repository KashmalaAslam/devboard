export default function Button({
  children,
  icon: Icon,
  iconPosition = "left",
  variant = "primary",
  type = "button",
  fullWidth = false,
  onClick,
  className = "",
}) {
  const variants = {
    primary:
      "bg-linear-to-br from-violet-400 to-purple-600 text-white hover:bg-purple-700",
    secondary: "bg-slate-100 text-slate-800 hover:bg-slate-200",
    outline: "border border-slate-300 text-slate-800 hover:bg-slate-50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        rounded-sm
        px-4
        py-2.5
        font-medium
        transition
        flex
        items-center
        justify-center
        gap-2
        cursor-pointer
        ${fullWidth ? "w-full" : ""}
        ${variants[variant]}
        ${className}
      `}
    >
      {Icon && iconPosition === "left" && <Icon size={18} />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon size={18} />}
    </button>
  );
}
