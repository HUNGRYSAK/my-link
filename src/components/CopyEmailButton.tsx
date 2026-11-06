"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyEmailButtonProps {
  email?: string;
  className?: string;
}

export default function CopyEmailButton({
  email = "hungrysak.dev@gmail.com",
  className = "",
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      title="이메일 복사하기"
      className={`group relative flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-95 ${
        copied
          ? "bg-emerald-500 text-white shadow-emerald-500/25 shadow-md"
          : "bg-zinc-100 text-zinc-800 hover:bg-zinc-200 hover:text-zinc-900 dark:bg-zinc-800/80 dark:text-zinc-200 dark:hover:bg-zinc-750 dark:hover:text-white border border-zinc-200/60 dark:border-zinc-700/60"
      } ${className}`}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 animate-in zoom-in" />
          <span>이메일 주소 복사됨!</span>
        </>
      ) : (
        <>
          <Copy className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200" />
          <span>이메일 복사</span>
        </>
      )}
    </button>
  );
}
