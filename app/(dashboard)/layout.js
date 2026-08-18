"use client";
import { useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import Navbar from "../../components/dashboard/Navbar";

export default function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false); // desktop: icon-only rail
  const [mobileOpen, setMobileOpen] = useState(false); // mobile: drawer overlay

  return (
    <div className="min-h-screen bg-slate-50 ">
      <Sidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <Navbar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        setMobileOpen={setMobileOpen}
      />

      <main
        className={`
          
          pt-20
          bg-white
          overflow-y-auto
          transition-[padding] duration-300 ease-in-out
          ${collapsed ? "lg:pl-20" : "lg:pl-64"}
          no-scrollbar
        `}
      >
        {children}
      </main>
    </div>
  );
}
