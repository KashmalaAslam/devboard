"use client";

import { useState } from "react";
import {
  User,
  Lock,
  AlertTriangle,
  Eye,
  EyeOff,
  Camera,
  Trash2,
} from "lucide-react";
import Button from "../../../components/ui/Button";

// ---------------------------------------------------------------------------
// Mock data — swap for your API / session / DB call
// ---------------------------------------------------------------------------

const CURRENT_USER = {
  name: "Kashmala Aslam",
  email: "kashmala@devboard.com",
  avatarUrl: "/avatars/profile-img.jpg",
};

const SECTIONS = [
  { id: "profile", label: "Profile", icon: User },
  { id: "security", label: "Password & Security", icon: Lock },
  { id: "danger", label: "Danger Zone", icon: AlertTriangle },
];

// ---------------------------------------------------------------------------
// Shared field components — match the design system's input styling
// ---------------------------------------------------------------------------

function Field({ label, children, hint }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </label>
      {children}
      {hint && <p className="mt-1.5 text-xs text-slate-400">{hint}</p>}
    </div>
  );
}

function TextInput(props) {
  return (
    <input
      {...props}
      className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
    />
  );
}

function PrimaryButton({ children, ...props }) {
  return (
    <button
      type="button"
      {...props}
      className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-600 disabled:cursor-not-allowed disabled:bg-indigo-300"
    >
      {children}
    </button>
  );
}

function SectionCard({ title, description, children }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-4 sm:p-6">
      <h2 className="text-base font-semibold text-slate-800">{title}</h2>
      {description && (
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      )}
      <div className="mt-5 space-y-5">{children}</div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Profile section
// ---------------------------------------------------------------------------

function ProfileSection() {
  const [name, setName] = useState(CURRENT_USER.name);
  const [email, setEmail] = useState(CURRENT_USER.email);
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 800);
  };

  return (
    <SectionCard
      title="Profile Information"
      description="Update your photo and personal details."
    >
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={CURRENT_USER.avatarUrl}
            alt={CURRENT_USER.name}
            className="h-16 w-16 rounded-full object-cover"
          />
          <button
            type="button"
            aria-label="Change avatar"
            className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-indigo-500 text-white hover:bg-indigo-600"
          >
            <Camera className="h-3 w-3" />
          </button>
        </div>
        <div>
          <p className="text-sm font-medium text-slate-700">Profile photo</p>
          <p className="text-xs text-slate-400">JPG or PNG, max 2MB.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full name">
          <TextInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </Field>
        <Field label="Email address">
          <TextInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </Field>
      </div>
      <div className="flex justify-end">
        <Button variant="primary" onClick={handleSave} disabled={saving}>
          {saving ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      {/* <div className="flex justify-end border-t border-slate-100 pt-5">
        <PrimaryButton onClick={handleSave} disabled={saving}>
          {saving ? "Saving..." : "Save Changes"}
        </PrimaryButton>
      </div> */}
    </SectionCard>
  );
}

// ---------------------------------------------------------------------------
// Password & Security section
// ---------------------------------------------------------------------------

function SecuritySection() {
  const [showNew, setShowNew] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [twoFactor, setTwoFactor] = useState(false);

  const passwordsMatch =
    newPassword.length > 0 && newPassword === confirmPassword;
  const canSubmit =
    currentPassword.length > 0 && newPassword.length >= 8 && passwordsMatch;

  return (
    <SectionCard
      title="Password & Security"
      description="Manage your password and two-factor authentication."
    >
      <Field label="Current password">
        <TextInput
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          placeholder="Enter current password"
        />
      </Field>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="New password" hint="At least 8 characters.">
          <div className="relative">
            <input
              type={showNew ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 pr-9 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
            <button
              type="button"
              onClick={() => setShowNew((v) => !v)}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              aria-label={showNew ? "Hide password" : "Show password"}
            >
              {showNew ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </Field>

        <Field
          label="Confirm new password"
          hint={
            confirmPassword.length > 0 && !passwordsMatch
              ? "Passwords do not match."
              : undefined
          }
        >
          <TextInput
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-enter new password"
          />
        </Field>
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 pt-5">
        <div>
          <p className="text-sm font-medium text-slate-700">
            Two-factor authentication
          </p>
          <p className="text-xs text-slate-400">
            Add an extra layer of security to your account.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setTwoFactor((v) => !v)}
          aria-pressed={twoFactor}
          className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 ease-in-out ${
            twoFactor ? "bg-indigo-500" : "bg-slate-200"
          }`}
        >
          <span
            className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 ease-in-out ${
              twoFactor ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
      </div>

      <div className="flex justify-end border-t border-slate-100 pt-5">
        <PrimaryButton disabled={!canSubmit}>Update Password</PrimaryButton>
      </div>
    </SectionCard>
  );
}

// ---------------------------------------------------------------------------
// Danger Zone section
// ---------------------------------------------------------------------------

function DangerZoneSection() {
  const [confirmText, setConfirmText] = useState("");
  const requiredText = "DELETE";
  const canDelete = confirmText === requiredText;

  return (
    <div className="rounded-md border border-red-200 bg-white p-4 sm:p-6">
      <h2 className="text-base font-semibold text-red-600">Danger Zone</h2>
      <p className="mt-1 text-sm text-slate-500">
        Irreversible actions — proceed with caution.
      </p>

      <div className="mt-5 rounded-lg border border-red-100 bg-red-50 p-4">
        <div className="flex gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
          <div className="min-w-0">
            <p className="text-sm font-medium text-red-700">
              Delete this account permanently
            </p>
            <p className="mt-1 text-sm text-red-600/80">
              This will permanently delete your account, projects, and all
              associated data. This action cannot be undone.
            </p>

            <div className="mt-4 space-y-3">
              <Field label={`Type "${requiredText}" to confirm`}>
                <TextInput
                  value={confirmText}
                  onChange={(e) => setConfirmText(e.target.value)}
                  placeholder={requiredText}
                />
              </Field>

              <button
                type="button"
                disabled={!canDelete}
                className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-red-300"
              >
                <Trash2 className="h-4 w-4" />
                Delete My Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Settings page
// ---------------------------------------------------------------------------

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("profile");

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8 h-screen">
      <div>
        <h1 className="text-xl font-bold text-slate-800 sm:text-2xl">
          Settings
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Manage your profile, security, and account preferences.
        </p>
      </div>

      {/* Mobile: horizontal scroll tabs. Desktop: vertical sidebar nav. */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <nav
          className="
            flex gap-2 overflow-x-auto pb-1
            lg:w-56 lg:shrink-0 lg:flex-col lg:overflow-visible lg:pb-0
          "
        >
          {SECTIONS.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => setActiveSection(section.id)}
                className={`
                  flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors
                  lg:w-full lg:shrink
                  ${
                    isActive
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                  }
                  ${section.id === "danger" && isActive ? "bg-red-50 text-red-600" : ""}
                `}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {section.label}
              </button>
            );
          })}
        </nav>

        <div className="min-w-0 flex-1 space-y-6">
          {activeSection === "profile" && <ProfileSection />}
          {activeSection === "security" && <SecuritySection />}
          {activeSection === "danger" && <DangerZoneSection />}
        </div>
      </div>
    </div>
  );
}
