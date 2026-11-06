import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import Link from 'next/link';

// Mock link data – replace with real data source later
const links = [
  {
    title: 'MyLink GitHub',
    url: 'https://github.com/HUNGRYSAK/mylink',
    description: 'MyLink 프로젝트 저장소',
  },
  {
    title: 'Vibe Coding',
    url: 'https://vibecoding.dev',
    description: 'AI 기반 코딩 도구',
  },
  {
    title: 'Personal Blog',
    url: 'https://hungrysak.dev',
    description: '개인 블로그 및 포트폴리오',
  },
];

export default function LinksPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <section className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Link 목록
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400">
          아래는 MyLink 서비스에 등록된 주요 외부 링크들입니다.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {links.map((link, idx) => (
            <Card key={idx} className="flex flex-col justify-between transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  {link.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {link.description}
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href={link.url}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-blue-600 hover:underline dark:text-blue-400"
                >
                  방문하기
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
