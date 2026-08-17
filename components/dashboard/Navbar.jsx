"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Menu,
  Search,
  Bell,
  ChevronDown,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ collapsed, setCollapsed, setMobileOpen }) {
  const [profileOpen, setProfileOpen] = useState(false);

  const handleHamburger = () => {
    if (window.innerWidth < 1024) {
      setMobileOpen((prev) => !prev);
    } else {
      setCollapsed((prev) => !prev);
    }
  };

  return (
    <header
      className={`
        fixed top-0 right-0 z-40 py-1.5
        border-b border-slate-200 bg-white
        transition-[left] duration-300 ease-in-out
        left-0
        ${collapsed ? "lg:left-20" : "lg:left-64"}
      `}
    >
      <div className="flex h-full items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={handleHamburger}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
            aria-label="Toggle sidebar"
          >
            <Menu size={21} strokeWidth={1.8} />
          </button>

          {/* SEARCH */}

          <div
            className="
              hidden
              h-10
              w-[320px]
              items-center
              gap-3
              rounded-md
              border
              border-violet-200
              bg-white
              px-3
              md:flex
            "
          >
            <Search size={18} className="shrink-0 text-slate-400" />

            <input
              type="text"
              placeholder="Search..."
              className="
                min-w-0
                flex-1
                bg-transparent
                text-sm
                text-slate-700
                outline-none
                placeholder:text-slate-400
              "
            />

            {/* <kbd
              className="
                hidden
                rounded-md
                border
                border-slate-200
                bg-white
                px-2
                py-1
                text-[10px]
                font-medium
                text-slate-400
                lg:block
              "
            >
              Ctrl K
            </kbd> */}
          </div>
        </div>

        {/* =====================================================
            RIGHT
        ===================================================== */}

        <div className="flex items-center gap-2">
          {/* NOTIFICATION */}

          <button
            type="button"
            className="
              relative
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              text-slate-500
              hover:bg-slate-100
              hover:text-slate-900
            "
          >
            <Bell size={20} strokeWidth={1.8} />

            <span
              className="
                absolute
                right-2.5
                top-2
                h-2
                w-2
                rounded-full
                bg-violet-600
                ring-2
                ring-white
              "
            />
          </button>

          {/* DIVIDER */}

          <div className="mx-2 h-8 w-px bg-slate-200" />

          {/* PROFILE */}

          <div className="relative">
            <button
              type="button"
              onClick={() => setProfileOpen((prev) => !prev)}
              className="
                flex
                items-center
                gap-3
                rounded-xl
                px-2
                py-1.5
                hover:bg-slate-50
              "
            >
              {/* <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-violet-100
                  text-sm
                  font-semibold
                  text-violet-600
                "
              >
                KA
              </div> */}

              <Image
                src="/avatars/profile-img.jpg"
                alt="Profile"
                width={30}
                height={30}
                className="rounded-full bg-slate-100 object-cover"
              />

              <div className="hidden text-left sm:block">
                <p className="text-sm font-semibold text-slate-800">Kashmala</p>

                <p className="text-xs text-slate-400">Account Manager</p>
              </div>

              <ChevronDown
                size={16}
                className={`
                  hidden
                  text-slate-400
                  transition-transform
                  sm:block
                  ${profileOpen ? "rotate-180" : ""}
                `}
              />
            </button>

            {/* DROPDOWN */}

            <AnimatePresence>
              {profileOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -8,
                    scale: 0.98,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                    scale: 0.98,
                  }}
                  className="
                    absolute
                    right-0
                    top-[calc(100%+10px)]
                    w-60
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-2
                    shadow-xl
                  "
                >
                  <div className="px-3 py-3">
                    <p className="font-semibold text-slate-800">Kashmala</p>

                    <p className="text-sm text-slate-400">
                      kashmala@example.com
                    </p>
                  </div>

                  <div className="my-0.5 h-px bg-slate-100 text-sm" />

                  <DropdownItem icon={User} label="Profile" href="/profile" />

                  <DropdownItem
                    icon={Settings}
                    label="Settings"
                    href="/settings"
                  />

                  <div className="my-0.5 h-px bg-slate-100 text-sm" />

                  <DropdownItem
                    icon={LogOut}
                    label="Logout"
                    href="/login"
                    danger
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}

function DropdownItem({ icon: Icon, label, href, danger = false }) {
  return (
    <a
      href={href}
      className={`
        flex
        items-center
        gap-3
        rounded-xl
        px-3
        py-3
        text-sm
        transition-colors

        ${
          danger
            ? "text-red-500 hover:bg-red-50"
            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
        }
      `}
    >
      <Icon size={18} strokeWidth={1.8} />

      {label}
    </a>
  );
}
