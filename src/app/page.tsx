export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-zinc-50 to-zinc-100 p-6 dark:from-zinc-950 dark:to-zinc-900">
      <div className="w-full max-w-sm rounded-2xl border border-zinc-200/80 bg-white/90 p-8 text-center shadow-lg backdrop-blur-sm transition-all dark:border-zinc-800 dark:bg-zinc-900/90">
        {/* 아바타 / 이니셜 */}
        <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 text-2xl font-bold text-white shadow-md">
          JH
        </div>

        {/* 이름 */}
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          정진훈
        </h1>

        {/* 태그 / 신분 */}
        <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
          대학생 · Vibe Coding
        </p>

        {/* 소개글 */}
        <p className="mt-4 text-base leading-relaxed text-zinc-600 break-keep dark:text-zinc-300">
          안녕하세요  ! 바이브 코딩을 배우고 있는 대학생 입니다
        </p>

        {/* 태그 목록 */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
            🌱 바이브 코딩
          </span>
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
            🚀 학습 중
          </span>
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
            🎓 대학생
          </span>
        </div>
      </div>
    </main>
  );
}
