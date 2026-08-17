"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  CalendarDays,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "Tasks", href: "/tasks", icon: CheckSquare },
  { label: "Calendar", href: "/calendar", icon: CalendarDays },
  { label: "Team", href: "/team", icon: Users },
];

export default function Sidebar({ collapsed, mobileOpen, setMobileOpen }) {
  const pathname = usePathname();
  console.log("collapsed:", collapsed);
  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* =====================================================
          MOBILE BACKDROP
      ===================================================== */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobile}
            className="fixed inset-0 z-40 bg-slate-900/40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* =====================================================
          SIDEBAR
      ===================================================== */}
      <aside
        className={`
          fixed left-0 top-0 z-50
          flex h-screen flex-col
          border-r border-slate-200
          bg-white
          w-64
          transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          lg:transition-[width]
          ${collapsed ? "lg:w-20" : "lg:w-64"}
        `}
      >
        {/* LOGO */}
        <div className="flex h-20 items-center px-4 lg:px-5">
          <Link
            href="/dashboard"
            className="flex items-center"
            onClick={closeMobile}
          >
            {/* Icon-only logo: always on mobile, on desktop only when collapsed */}
            <div className={collapsed ? "block" : "lg:hidden"}>
              <Image
                src="/logos/logo-without-text.png"
                alt="DevBoard"
                width={40}
                height={40}
                className="h-8 w-8 object-contain"
              />
            </div>

            {/* Full logo: desktop only, when expanded */}
            <div className={collapsed ? "hidden" : "hidden lg:block"}>
              <Image
                src="/logos/logo-with-text.png"
                alt="DevBoard"
                width={130}
                height={30}
                className="mb-4"
              />
            </div>
          </Link>
        </div>
        {/* NAVIGATION */}
        <nav className="flex-1 px-3 mt-2 lg:mt-6">
          <p
            className={`
              mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400
              ${collapsed ? "lg:hidden" : ""}
            `}
          >
            Workspace
          </p>
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <SidebarItem
                  key={item.label}
                  item={item}
                  Icon={Icon}
                  isActive={isActive}
                  collapsed={collapsed}
                  closeMobile={closeMobile}
                />
              );
            })}
          </div>
        </nav>
        {/* BOTTOM ACTIONS */}
        <div className="border-t border-slate-100 px-3 py-1 lg:py-4">
          <p
            className={`
              mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400
              ${collapsed ? "lg:hidden" : ""}
            `}
          >
            Other
          </p>
          <SidebarBottomItem
            href="/settings"
            label="Settings"
            Icon={Settings}
            collapsed={collapsed}
            closeMobile={closeMobile}
          />
          <SidebarBottomItem
            href="/login"
            label="Logout"
            Icon={LogOut}
            collapsed={collapsed}
            closeMobile={closeMobile}
          />
        </div>
      </aside>
    </>
  );
}

function SidebarItem({ item, Icon, isActive, collapsed, closeMobile }) {
  return (
    <Link
      href={item.href}
      onClick={closeMobile}
      className="group relative block"
    >
      <motion.div
        whileHover={{ x: 2 }}
        transition={{ duration: 0.2 }}
        className={`
          relative flex h-11 items-center rounded-md transition-colors
          ${isActive ? "bg-violet-50 text-violet-600" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}
          gap-3 px-3
          ${collapsed ? "lg:justify-center lg:px-0" : ""}
        `}
      >
        {isActive && (
          <motion.span
            layoutId="activeSidebarItem"
            className="absolute left-0 h-6 w-1 rounded-r-full bg-violet-600"
          />
        )}

        <Icon
          strokeWidth={isActive ? 2.2 : 1.8}
          size={20}
          className="shrink-0 text-inherit"
        />

        <span className={`text-sm font-medium ${collapsed ? "lg:hidden" : ""}`}>
          {item.label}
        </span>
      </motion.div>
    </Link>
  );
}

function SidebarBottomItem({ href, label, Icon, collapsed, closeMobile }) {
  return (
    <Link href={href} onClick={closeMobile} className="group relative block">
      <motion.div
        whileHover={{ x: 2 }}
        transition={{ duration: 0.2 }}
        className={`
          flex h-11 items-center rounded-xl text-slate-500 transition-colors
          hover:bg-slate-50 hover:text-slate-900
          gap-3 px-3
          ${collapsed ? "lg:justify-center lg:px-0" : ""}
        `}
      >
        <Icon strokeWidth={1.8} size={20} />
        <span className={`text-sm font-medium ${collapsed ? "lg:hidden" : ""}`}>
          {label}
        </span>
      </motion.div>
    </Link>
  );
}
