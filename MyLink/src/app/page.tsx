import Image from "next/image";
import CopyEmailButton from "@/components/CopyEmailButton";
import { GithubIcon } from "@/components/Icons";
import {
  Mail,
  ExternalLink,
  Code2,
  Sparkles,
  Laptop,
  Rocket,
  CheckCircle2,
  MapPin,
  Briefcase,
  Terminal,
  Heart,
  Flame,
  Share2,
} from "lucide-react";

export default function Home() {
  const email = "hungrysak.dev@gmail.com";
  const githubUrl = "https://github.com/HUNGRYSAK";

  const techStack = [
    {
      category: "Frontend",
      skills: [
        { name: "React 19", level: "Primary", color: "from-cyan-500 to-blue-500" },
        { name: "Next.js", level: "Primary", color: "from-zinc-700 to-zinc-950 dark:from-zinc-300 dark:to-zinc-100" },
        { name: "TypeScript", level: "Advanced", color: "from-blue-600 to-indigo-600" },
        { name: "Tailwind CSS v4", level: "Advanced", color: "from-sky-400 to-teal-500" },
        { name: "HTML5 / CSS3", level: "Proficient", color: "from-orange-500 to-amber-500" },
      ],
    },
    {
      category: "Backend & Data",
      skills: [
        { name: "Node.js", level: "Intermediate", color: "from-emerald-500 to-green-600" },
        { name: "RESTful API", level: "Intermediate", color: "from-purple-500 to-indigo-500" },
        { name: "Supabase", level: "Intermediate", color: "from-emerald-400 to-teal-600" },
        { name: "PostgreSQL", level: "Basics", color: "from-blue-500 to-cyan-600" },
      ],
    },
    {
      category: "AI & Tools",
      skills: [
        { name: "Vibe Coding", level: "Specialty", color: "from-violet-500 to-fuchsia-500" },
        { name: "Cursor & Claude", level: "Daily Use", color: "from-pink-500 to-rose-500" },
        { name: "Git & GitHub", level: "Proficient", color: "from-zinc-600 to-zinc-800" },
        { name: "Vercel", level: "Deployment", color: "from-slate-700 to-slate-900" },
      ],
    },
  ];

  const projects = [
    {
      title: "MyLink Profile Hub",
      badge: "Featured",
      badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      description:
        "Next.js 16 및 Tailwind CSS v4 기반의 반응형 개발자 프로필 및 소셜 허브. 글래스모피즘과 벤토 그리드 UI로 데스크톱과 모바일 어디서든 최적의 사용성을 제공합니다.",
      tags: ["Next.js", "React 19", "Tailwind CSS", "TypeScript", "Responsive"],
      demoUrl: "https://github.com/HUNGRYSAK",
      githubUrl: "https://github.com/HUNGRYSAK",
      icon: <Laptop className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "AI Prompt Playground",
      badge: "In Progress",
      badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
      description:
        "최신 LLM 모델과의 상호작용 및 프롬프트 엔지니어링 실험실. 실시간 응답 렌더링과 프롬프트 템플릿 관리 기능을 제공합니다.",
      tags: ["AI Tools", "Vibe Coding", "API Integration", "Next.js"],
      demoUrl: "https://github.com/HUNGRYSAK",
      githubUrl: "https://github.com/HUNGRYSAK",
      icon: <Sparkles className="h-5 w-5 text-purple-500" />,
    },
    {
      title: "Daily Dev Archive",
      badge: "Knowledge Base",
      badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      description:
        "개발 중 직면한 트러블슈팅, 새로운 기술 스택 학습 내용 및 실무 패턴을 체계적으로 기록하고 공유하는 개인 아카이브입니다.",
      tags: ["Troubleshooting", "Markdown", "Clean Code", "Web Dev"],
      demoUrl: "https://github.com/HUNGRYSAK",
      githubUrl: "https://github.com/HUNGRYSAK",
      icon: <Code2 className="h-5 w-5 text-emerald-500" />,
    },
  ];

  const coreStrengths = [
    {
      icon: <Flame className="h-6 w-6 text-amber-500" />,
      title: "빠른 실행력 & Vibe Coding",
      description:
        "아이디어를 머릿속에만 두지 않고 AI 페어 프로그래밍과 최신 도구를 결합해 즉각 동작하는 프로토타입으로 완성합니다.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-indigo-500" />,
      title: "디테일한 UI/UX & 반응형 디자인",
      description:
        "모바일, 태블릿, 데스크톱 모든 디바이스에서 매끄럽게 동작하는 인터랙션과 직관적인 사용자 경험을 집요하게 고민합니다.",
    },
    {
      icon: <Rocket className="h-6 w-6 text-emerald-500" />,
      title: "지속적인 성장과 열린 소통",
      description:
        "새로운 기술을 학습하는 것을 즐기며, 피드백을 적극 수용하고 능동적으로 소통하며 팀과 함께 성장합니다.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-zinc-50 font-sans text-zinc-900 transition-colors selection:bg-blue-500 selection:text-white dark:bg-zinc-950 dark:text-zinc-100">
      {/* 배경 장식 그라데이션 광선 */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-500/15 via-indigo-500/15 to-purple-500/10 blur-3xl dark:from-blue-600/10 dark:via-purple-600/10 dark:to-cyan-600/5" />
        <div className="absolute top-[600px] right-0 -z-10 h-[400px] w-[500px] rounded-full bg-gradient-to-bl from-teal-500/10 to-indigo-500/10 blur-3xl dark:from-teal-600/5 dark:to-indigo-600/5" />
      </div>

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* =========================================
            HEADER HERO CARD
           ========================================= */}
        <section className="overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/80 shadow-xl shadow-zinc-200/40 backdrop-blur-xl transition-all dark:border-zinc-800/80 dark:bg-zinc-900/80 dark:shadow-black/40">
          {/* 커버 배너 이미지 */}
          <div className="relative h-44 w-full sm:h-60 overflow-hidden bg-gradient-to-r from-zinc-800 via-indigo-950 to-zinc-900">
            <Image
              src="/banner.jpg"
              alt="Profile Tech Banner"
              fill
              priority
              className="object-cover object-center opacity-90 transition-transform duration-700 hover:scale-105"
            />
            {/* 배너 상단 오버레이 그라데이션 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

            {/* 상태 뱃지 (우측 상단) */}
            <div className="absolute top-4 right-4 sm:top-5 sm:right-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Available for projects</span>
            </div>
          </div>

          {/* 프로필 정보 영역 */}
          <div className="relative px-6 pb-8 pt-0 sm:px-8">
            {/* 아바타 이미지 (배너와 겹치는 효과) */}
            <div className="relative -mt-16 sm:-mt-20 mb-4 flex items-end justify-between">
              <div className="relative h-28 w-28 sm:h-36 sm:w-36 overflow-hidden rounded-full border-4 border-white bg-zinc-900 shadow-2xl ring-2 ring-indigo-500/20 dark:border-zinc-900 dark:ring-indigo-400/30">
                <Image
                  src="/avatar.jpg"
                  alt="정진훈 아바타"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>

              {/* 빠른 소셜 링크 (아바타 우측에 정렬) */}
              <div className="flex items-center gap-2 pb-2">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/80 bg-zinc-50 text-zinc-700 transition-all hover:bg-zinc-100 hover:text-zinc-900 hover:shadow-md dark:border-zinc-700/80 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-white"
                  title="GitHub 방문"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${email}`}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/80 bg-zinc-50 text-zinc-700 transition-all hover:bg-zinc-100 hover:text-zinc-900 hover:shadow-md dark:border-zinc-700/80 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-white"
                  title="이메일 보내기"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* 이름 및 직책 */}
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
                  정진훈
                </h1>
                <span className="text-sm font-medium text-zinc-400 dark:text-zinc-500">
                  (HUNGRYSAK)
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-semibold text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 border border-blue-500/20">
                  <CheckCircle2 className="h-3 w-3" /> 인증된 프로필
                </span>
              </div>
              <p className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400">
                Junior Web Developer · Vibe Coding & AI Enthusiast
              </p>
            </div>

            {/* 소개글 */}
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300 break-keep">
              아이디어를 코드로 실현하고 사용자에게 닿는 가치를 고민하는 주니어 개발자입니다.
              최신 React 생태계와 AI 도구를 적극 활용한 <strong>바이브 코딩(Vibe Coding)</strong>으로
              신속하고 단단한 프로덕트를 구축하며, 보기 좋고 쓰기 편한 사용자 경험을 추구합니다.
            </p>

            {/* 위치 및 주요 태그 메타데이터 */}
            <div className="mt-5 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-zinc-400" /> 대한민국 서울
              </span>
              <span className="flex items-center gap-1.5">
                <Briefcase className="h-4 w-4 text-zinc-400" /> 주니어 프론트엔드 / 풀스택
              </span>
              <span className="flex items-center gap-1.5">
                <Terminal className="h-4 w-4 text-zinc-400" /> Next.js & TypeScript
              </span>
            </div>

            {/* 액션 버튼 그룹 */}
            <div className="mt-6 flex flex-wrap items-center gap-3 pt-2">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-zinc-900/20 transition-all hover:bg-zinc-800 hover:shadow-xl active:scale-95 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:shadow-black/50"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub 둘러보기</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-70" />
              </a>

              <CopyEmailButton email={email} />

              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-200/80 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-900 dark:border-zinc-750 dark:bg-zinc-850 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                <Mail className="h-4 w-4" />
                <span>문의 메일</span>
              </a>
            </div>
          </div>
        </section>

        {/* =========================================
            BENTO GRID SECTION
           ========================================= */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Bento Card 1: 기술 스택 (2 cols on lg) */}
          <section className="flex flex-col justify-between rounded-3xl border border-zinc-200/80 bg-white/80 p-6 sm:p-7 shadow-lg shadow-zinc-200/30 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/80 dark:shadow-black/30 md:col-span-2">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                    기술 스택 & 도구
                  </h2>
                </div>
                <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                  Tech Capabilities
                </span>
              </div>

              <div className="mt-6 space-y-5">
                {techStack.map((group) => (
                  <div key={group.category} className="space-y-2">
                    <span className="text-xs font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 uppercase">
                      {group.category}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="group relative flex items-center gap-2 rounded-xl border border-zinc-200/70 bg-zinc-50/80 px-3 py-1.5 text-xs font-medium text-zinc-800 transition-all hover:border-zinc-300 hover:bg-zinc-100 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
                        >
                          <span
                            className={`h-2 w-2 rounded-full bg-gradient-to-r ${skill.color}`}
                          />
                          <span>{skill.name}</span>
                          <span className="text-[10px] text-zinc-400 dark:text-zinc-500">
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-zinc-50 p-3.5 text-xs text-zinc-600 dark:bg-zinc-800/50 dark:text-zinc-400 border border-zinc-100 dark:border-zinc-800">
              💡 최신 웹 프레임워크와 AI 도구를 결합해 구현 속도와 코드 품질을 동시에 높입니다.
            </div>
          </section>

          {/* Bento Card 2: 핵심 역량 & 강점 (1 col on lg) */}
          <section className="flex flex-col justify-between rounded-3xl border border-zinc-200/80 bg-white/80 p-6 sm:p-7 shadow-lg shadow-zinc-200/30 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/80 dark:shadow-black/30">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  핵심 역량
                </h2>
              </div>

              <div className="mt-6 space-y-4">
                {coreStrengths.map((item, idx) => (
                  <div
                    key={idx}
                    className="group rounded-2xl border border-zinc-100 p-3.5 transition-all hover:border-zinc-200 hover:bg-zinc-50/50 dark:border-zinc-800/60 dark:hover:border-zinc-700/60 dark:hover:bg-zinc-800/30"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                        {item.icon}
                      </div>
                      <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 break-keep">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 text-center">
              <span className="inline-block text-[11px] font-medium text-zinc-400 dark:text-zinc-500">
                #성장지향 #문제해결 #바이브코딩
              </span>
            </div>
          </section>

          {/* Bento Card 3: 대표 프로젝트 쇼케이스 (Full span 3 cols on lg) */}
          <section className="rounded-3xl border border-zinc-200/80 bg-white/80 p-6 sm:p-8 shadow-lg shadow-zinc-200/30 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/80 dark:shadow-black/30 lg:col-span-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                  <Rocket className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                    주요 프로젝트 & 쇼케이스
                  </h2>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    직접 기획하고 개발한 프로젝트 리스트입니다
                  </p>
                </div>
              </div>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <span>전체 저장소 보기</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-300 hover:bg-white hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-800/40 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/80"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="rounded-xl bg-white p-2 shadow-sm border border-zinc-200/60 dark:border-zinc-700 dark:bg-zinc-900">
                          {project.icon}
                        </div>
                        <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                          {project.title}
                        </h3>
                      </div>
                      <span
                        className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap ${project.badgeColor}`}
                      >
                        {project.badge}
                      </span>
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300 break-keep">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-5 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-zinc-200/60 px-2 py-0.5 text-[10px] font-medium text-zinc-700 dark:bg-zinc-700/60 dark:text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-end gap-2 border-t border-zinc-200/60 pt-3 dark:border-zinc-800">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bento Card 4: 소셜 및 연결 링크 (Full span 3 cols on lg) */}
          <section className="rounded-3xl border border-zinc-200/80 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-6 sm:p-8 text-white shadow-xl shadow-indigo-500/20 lg:col-span-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-md">
                  <Share2 className="h-3.5 w-3.5" />
                  <span>Let's Connect</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                  함께 의미 있는 프로덕트를 만들어볼까요?
                </h2>
                <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
                  새로운 협업 기회, 주니어 개발자 채용 및 프로젝트 제안 언제나 환영합니다.
                  편하게 연락해 주세요!
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-zinc-900 shadow-md transition-all hover:bg-zinc-100 active:scale-95"
                >
                  <Mail className="h-4 w-4" />
                  <span>이메일 보내기</span>
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-black/20 border border-white/20 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-black/30 active:scale-95"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub 프로필</span>
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* =========================================
            FOOTER
           ========================================= */}
        <footer className="mt-12 text-center text-xs text-zinc-500 dark:text-zinc-500">
          <div className="flex items-center justify-center gap-1.5">
            <span>Designed & Crafted with</span>
            <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500 inline" />
            <span>by <strong className="text-zinc-700 dark:text-zinc-300">정진훈 (HUNGRYSAK)</strong></span>
          </div>
          <p className="mt-1.5 text-[11px] text-zinc-400 dark:text-zinc-600">
            Built with Next.js 16 · React 19 · Tailwind CSS v4 · Vibe Coding
          </p>
        </footer>
      </main>
    </div>
  );
}
