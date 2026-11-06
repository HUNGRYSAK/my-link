"use client";

import { useState, useEffect } from "react";
import { Flame, Zap, Coffee, Rocket, Sparkles } from "lucide-react";

interface Reaction {
  id: string;
  label: string;
  icon: string;
  count: number;
  bg: string;
  border: string;
  rotation: string;
}

export default function ReactionStamps() {
  const [reactions, setReactions] = useState<Reaction[]>([
    {
      id: "hot",
      label: "취향저격!",
      icon: "🔥",
      count: 42,
      bg: "bg-[#FF6584]",
      border: "border-black dark:border-white",
      rotation: "-rotate-2",
    },
    {
      id: "vibe",
      label: "바이브 굿",
      icon: "⚡",
      count: 88,
      bg: "bg-[#FFE600]",
      border: "border-black dark:border-white",
      rotation: "rotate-2",
    },
    {
      id: "coffee",
      label: "커피 한잔",
      icon: "☕",
      count: 27,
      bg: "bg-[#70D6FF]",
      border: "border-black dark:border-white",
      rotation: "-rotate-1",
    },
    {
      id: "hire",
      label: "함께 일해요",
      icon: "🚀",
      count: 65,
      bg: "bg-[#B4F8C8]",
      border: "border-black dark:border-white",
      rotation: "rotate-3",
    },
  ]);

  const [lastClicked, setLastClicked] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("neo_reactions");
      if (saved) {
        setReactions(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const handleClick = (id: string) => {
    setLastClicked(id);
    setReactions((prev) => {
      const next = prev.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      );
      try {
        localStorage.setItem("neo_reactions", JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });

    setTimeout(() => {
      setLastClicked(null);
    }, 600);
  };

  return (
    <div className="rounded-2xl border-[3px] border-black bg-white p-6 shadow-[6px_6px_0px_0px_#000] dark:border-white dark:bg-[#1a1b1e] dark:shadow-[6px_6px_0px_0px_#fff]">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-md border-2 border-black bg-[#FFE600] px-2 py-0.5 text-xs font-black text-black shadow-[2px_2px_0px_0px_#000]">
            <Sparkles className="h-3 w-3 stroke-[3]" /> STAMP STATION
          </span>
          <h3 className="mt-1 text-base sm:text-lg font-black text-black dark:text-white">
            프로필을 둘러보셨나요? 도장을 쾅 찍어주세요!
          </h3>
        </div>
        <span className="text-xs font-bold text-zinc-500">
          클릭해서 리액션 남기기
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        {reactions.map((r) => {
          const isAnimating = lastClicked === r.id;
          return (
            <button
              key={r.id}
              onClick={() => handleClick(r.id)}
              type="button"
              className={`group relative flex flex-col items-center justify-center rounded-xl border-[2.5px] ${r.border} ${r.bg} p-3.5 shadow-[4px_4px_0px_0px_#000] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#000] cursor-pointer text-black dark:shadow-[4px_4px_0px_0px_#fff] ${r.rotation} ${
                isAnimating ? "scale-105" : ""
              }`}
            >
              <span className="text-2xl sm:text-3xl transition-transform group-hover:scale-125">
                {r.icon}
              </span>
              <span className="mt-1 text-xs sm:text-sm font-black tracking-tight">
                {r.label}
              </span>
              <span className="mt-0.5 rounded-full border border-black bg-white px-2 py-0.2 font-mono text-[11px] font-black shadow-[1px_1px_0px_0px_#000]">
                +{r.count}
              </span>

              {isAnimating && (
                <span className="absolute -top-3 right-2 rounded-full border-2 border-black bg-[#FF6584] px-1.5 py-0.5 text-[10px] font-black text-white shadow-[2px_2px_0px_0px_#000] animate-ping">
                  +1
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
