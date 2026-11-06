"use client";

import { useState } from "react";
import { Copy, Check, Sparkles } from "lucide-react";

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
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      title="이메일 주소 클립보드 복사"
      className={`group relative inline-flex items-center justify-center gap-2 rounded-xl border-[3px] border-black px-5 py-3 text-sm font-black transition-all neo-btn active:translate-x-0.5 active:translate-y-0.5 cursor-pointer dark:border-white ${
        copied
          ? "bg-[#B4F8C8] text-black shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#fff]"
          : "bg-[#FFE600] text-black hover:bg-[#FFF066] shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#fff]"
      } ${className}`}
    >
      {copied ? (
        <>
          <Check className="h-5 w-5 stroke-[3] text-black" />
          <span className="tracking-tight">복사 완료! ✉️</span>
          <span className="absolute -top-3 -right-2 rounded-md border-2 border-black bg-[#FF6584] px-1.5 py-0.5 text-[10px] font-black text-white shadow-[2px_2px_0px_0px_#000] -rotate-6 animate-bounce">
            COPIED!
          </span>
        </>
      ) : (
        <>
          <Copy className="h-5 w-5 stroke-[2.5] text-black transition-transform group-hover:scale-110" />
          <span className="tracking-tight">이메일 복사하기</span>
          <Sparkles className="h-4 w-4 text-black opacity-80" />
        </>
      )}
    </button>
  );
}
