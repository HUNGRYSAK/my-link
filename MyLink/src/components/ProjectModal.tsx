"use client";

import { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Sparkles } from "lucide-react";
import { GithubIcon, GithubIcon as Github } from "./Icons";

export interface ProjectData {
  id: string;
  title: string;
  category: "webapp" | "ai" | "tool";
  categoryLabel: string;
  badge: string;
  badgeColor: string;
  accentColor: string; // e.g. "bg-[#FFE600]", "bg-[#70D6FF]"
  description: string;
  longDescription: string;
  highlights: string[];
  tags: string[];
  demoUrl?: string;
  githubUrl: string;
  iconName: string;
  date: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border-[3px] border-black bg-white shadow-[8px_8px_0px_0px_#000] dark:border-white dark:bg-[#1a1b1e] dark:shadow-[8px_8px_0px_0px_#fff]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Retro Window Titlebar */}
        <div
          className={`flex items-center justify-between border-b-[3px] border-black px-4 py-3 dark:border-white ${project.accentColor}`}
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="h-3.5 w-3.5 rounded-full border border-black bg-[#FF6584] inline-block" />
              <span className="h-3.5 w-3.5 rounded-full border border-black bg-[#FFE600] inline-block" />
              <span className="h-3.5 w-3.5 rounded-full border border-black bg-[#4ADE80] inline-block" />
            </div>
            <span className="ml-2 font-mono text-xs font-black uppercase text-black tracking-wide">
              {project.id}.inspect
            </span>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded-lg border-2 border-black bg-white text-black font-black shadow-[2px_2px_0px_0px_#000] transition-transform hover:scale-105 active:translate-x-0.5 active:translate-y-0.5 cursor-pointer dark:bg-zinc-800 dark:text-white"
            title="창 닫기 (ESC)"
          >
            <X className="h-4 w-4 stroke-[3]" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Header Title & Badges */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="rounded-md border-2 border-black bg-black px-2.5 py-0.5 text-xs font-black text-white dark:border-white dark:bg-white dark:text-black">
                {project.categoryLabel}
              </span>
              <span
                className={`rounded-md border-2 border-black px-2.5 py-0.5 text-xs font-black text-black ${project.badgeColor}`}
              >
                ★ {project.badge}
              </span>
              <span className="font-mono text-xs text-zinc-500 font-bold ml-auto">
                {project.date}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-black dark:text-white tracking-tight">
              {project.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Deep Dive & Highlights */}
          <div className="rounded-xl border-[2.5px] border-black bg-[#FAF7EE] p-5 shadow-[4px_4px_0px_0px_#000] dark:border-white dark:bg-[#25262b] dark:shadow-[4px_4px_0px_0px_#fff]">
            <h3 className="flex items-center gap-2 text-sm font-black text-black dark:text-white uppercase tracking-wider mb-3">
              <Sparkles className="h-4 w-4 text-[#FF6584]" />
              주요 기능 및 아키텍처 하이라이트
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 stroke-[2.5] text-emerald-600 dark:text-emerald-400 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2.5">
              <Layers className="h-3.5 w-3.5" />
              적용 기술 스택
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border-2 border-black bg-white px-2.5 py-1 text-xs font-black text-black shadow-[2px_2px_0px_0px_#000] dark:border-white dark:bg-[#1a1b1e] dark:text-white dark:shadow-[2px_2px_0px_0px_#fff]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t-2 border-dashed border-zinc-300 dark:border-zinc-700">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border-[2.5px] border-black bg-[#FFE600] px-4 py-2.5 text-xs sm:text-sm font-black text-black shadow-[3px_3px_0px_0px_#000] transition-transform hover:-translate-y-0.5 active:translate-y-0.5 cursor-pointer dark:border-white dark:shadow-[3px_3px_0px_0px_#fff]"
              >
                <span>라이브 데모 열기</span>
                <ExternalLink className="h-4 w-4 stroke-[2.5]" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-[2.5px] border-black bg-black px-4 py-2.5 text-xs sm:text-sm font-black text-white shadow-[3px_3px_0px_0px_#000] transition-transform hover:-translate-y-0.5 active:translate-y-0.5 cursor-pointer dark:border-white dark:bg-white dark:text-black dark:shadow-[3px_3px_0px_0px_#fff]"
            >
              <GithubIcon className="h-4 w-4" />
              <span>GitHub 저장소</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
