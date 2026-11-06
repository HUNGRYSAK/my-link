"use client";

import React from "react";
import { Sparkles, Terminal, Flame, Code2, Zap } from "lucide-react";

interface MarqueeTickerProps {
  bgColor?: string;
  className?: string;
}

export default function MarqueeTicker({
  bgColor = "bg-[#FFE600]",
  className = "",
}: MarqueeTickerProps) {
  const items = [
    { text: "VIBE CODING", icon: "⚡" },
    { text: "REACT 19", icon: "⚛️" },
    { text: "NEXT.JS 16", icon: "▲" },
    { text: "TYPESCRIPT", icon: "✦" },
    { text: "TAILWIND CSS v4", icon: "🎨" },
    { text: "FAST ITERATION", icon: "🚀" },
    { text: "NEOBRUTALISM UI", icon: "📦" },
    { text: "AI PAIR PROGRAMMING", icon: "🤖" },
    { text: "CLEAN ARCHITECTURE", icon: "✨" },
  ];

  // 2번 반복하여 끊김 없는 무한 롤링
  const fullList = [...items, ...items, ...items];

  return (
    <div
      className={`relative w-full overflow-hidden border-y-[3px] border-black py-2.5 font-black text-black select-none dark:border-white ${bgColor} ${className}`}
    >
      <div className="animate-marquee flex items-center gap-6 whitespace-nowrap text-xs sm:text-sm tracking-wider uppercase">
        {fullList.map((item, index) => (
          <div key={index} className="inline-flex items-center gap-2">
            <span className="text-base">{item.icon}</span>
            <span>{item.text}</span>
            <span className="text-black/40 dark:text-black/60 font-black">★</span>
          </div>
        ))}
      </div>
    </div>
  );
}
