"use client";

import { useState, useEffect } from "react";
import { Sparkles, Sun, Moon, ArrowUpRight, Terminal } from "lucide-react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <header className="sticky top-4 z-40 mx-auto max-w-5xl px-4 sm:px-6">
      <nav className="flex items-center justify-between rounded-2xl border-[3px] border-black bg-white px-4 py-3 shadow-[4px_4px_0px_0px_#000] dark:border-white dark:bg-[#1a1b1e] dark:shadow-[4px_4px_0px_0px_#fff]">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 text-sm sm:text-base font-black tracking-tight text-black dark:text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-black bg-[#FFE600] font-black shadow-[2px_2px_0px_0px_#000] transition-transform group-hover:rotate-6 dark:border-white dark:text-black">
            JH
          </span>
          <div className="flex flex-col">
            <span className="leading-tight">HUNGRYSAK</span>
            <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              ONLINE
            </span>
          </div>
        </a>

        {/* Quick Nav Anchors */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="#projects"
            className="rounded-lg border-2 border-transparent px-3 py-1.5 text-xs font-black tracking-wide uppercase transition-all hover:border-black hover:bg-[#B4F8C8] hover:text-black hover:shadow-[2px_2px_0px_0px_#000] dark:hover:border-white dark:hover:bg-[#B4F8C8] dark:hover:text-black dark:text-zinc-200"
          >
            📂 Projects
          </a>
          <a
            href="#skills"
            className="rounded-lg border-2 border-transparent px-3 py-1.5 text-xs font-black tracking-wide uppercase transition-all hover:border-black hover:bg-[#70D6FF] hover:text-black hover:shadow-[2px_2px_0px_0px_#000] dark:hover:border-white dark:hover:bg-[#70D6FF] dark:hover:text-black dark:text-zinc-200"
          >
            ⚡ Tech Stack
          </a>
          <a
            href="#strengths"
            className="rounded-lg border-2 border-transparent px-3 py-1.5 text-xs font-black tracking-wide uppercase transition-all hover:border-black hover:bg-[#FFB3BA] hover:text-black hover:shadow-[2px_2px_0px_0px_#000] dark:hover:border-white dark:hover:bg-[#FFB3BA] dark:hover:text-black dark:text-zinc-200"
          >
            🔥 Strengths
          </a>
          <a
            href="#connect"
            className="rounded-lg border-2 border-transparent px-3 py-1.5 text-xs font-black tracking-wide uppercase transition-all hover:border-black hover:bg-[#E8C5FF] hover:text-black hover:shadow-[2px_2px_0px_0px_#000] dark:hover:border-white dark:hover:bg-[#E8C5FF] dark:hover:text-black dark:text-zinc-200"
          >
            💬 Contact
          </a>
        </div>

        {/* Actions (Theme Switcher & Quick Contact) */}
        <div className="flex items-center gap-2.5">
          {mounted && (
            <button
              onClick={toggleTheme}
              type="button"
              title="테마 전환"
              className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-black bg-[#FAF7EE] text-black shadow-[2px_2px_0px_0px_#000] transition-transform hover:-translate-y-0.5 active:translate-y-0.5 cursor-pointer dark:border-white dark:bg-[#27282b] dark:text-white dark:shadow-[2px_2px_0px_0px_#fff]"
            >
              {isDark ? (
                <Sun className="h-4 w-4 stroke-[2.5] text-[#FFE600]" />
              ) : (
                <Moon className="h-4 w-4 stroke-[2.5]" />
              )}
            </button>
          )}

          <a
            href="#connect"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border-2 border-black bg-[#FF6584] px-3.5 py-1.5 text-xs font-black text-white shadow-[3px_3px_0px_0px_#000] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#000] dark:border-white dark:shadow-[3px_3px_0px_0px_#fff]"
          >
            <span>HIRE ME</span>
            <ArrowUpRight className="h-3.5 w-3.5 stroke-[3]" />
          </a>
        </div>
      </nav>
    </header>
  );
}
