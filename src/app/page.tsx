export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-zinc-50 to-zinc-100 p-6 dark:from-zinc-950 dark:to-zinc-900">
      <div className="w-full max-w-md rounded-2xl border border-zinc-200/80 bg-white/90 p-8 text-center shadow-lg backdrop-blur-sm transition-all dark:border-zinc-800 dark:bg-zinc-900/90">
        {/* 아바타 / 이니셜 */}
        <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 text-2xl font-bold text-white shadow-md">
          JH
        </div>

        {/* 이름 */}
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          정진훈
        </h1>

        {/* 직무 / 슬로건 */}
        <p className="mt-1 text-sm font-semibold text-blue-600 dark:text-blue-400">
          Junior Developer · Vibe Coding
        </p>

        {/* 개발자 소개글 */}
        <p className="mt-4 text-base leading-relaxed text-zinc-600 break-keep dark:text-zinc-300">
          아이디어를 코드로 실현하고 사용자에게 닿는 가치를 고민하는 주니어 개발자입니다.
          최신 웹 기술과 AI 도구를 적극 활용해 빠르고 단단한 프로덕트를 만들어가고 있습니다.
        </p>

        {/* 기술 및 관심사 태그 */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
            💻 Next.js & React
          </span>
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300">
            🤖 Vibe Coding & AI
          </span>
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
            ✨ UI/UX 고민
          </span>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
            🌱 끊임없는 성장
          </span>
        </div>

        {/* GitHub 바로가기 링크 버튼 */}
        <div className="mt-8 flex flex-col gap-3">
          <a
            href="https://github.com/HUNGRYSAK"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white shadow transition-all hover:bg-zinc-800 hover:shadow-md dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            <svg
              className="h-4 w-4 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            GitHub 프로필 방문
          </a>
        </div>
      </div>
    </main>
  );
}
