import MainTitle from "@/components/ui/main-title";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";
import React from "react";
const Page = () => {
  const data = [
    {
      title: "2025년 1월",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-normal mb-4">
            - 프로젝트 시작
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-normal mb-4">
            - Code Block 컴포넌트 구성
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-normal mb-4">
            - Sidebar 구성
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-normal mb-4">
            -{" "}
            <Link
              className="underline underline-offset-4"
              href={"/dashboard/overview"}
            >
              Overview
            </Link>{" "}
            페이지 구성
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-normal mb-4">
            -{" "}
            <Link
              className="underline underline-offset-4"
              href={"/hooks/custom_hooks/use_loading"}
            >
              useLoading
            </Link>{" "}
            추가
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-normal mb-4">
            -{" "}
            <Link
              className="underline underline-offset-4"
              href={"/hooks/custom_hooks/use_media"}
            >
              useMedia
            </Link>{" "}
            추가
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-normal mb-4">
            -{" "}
            <Link
              className="underline underline-offset-4"
              href={"/hooks/state_management/use_local_storage"}
            >
              useLocalStorage
            </Link>{" "}
            추가
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-normal mb-4">
            -{" "}
            <Link
              className="underline underline-offset-4"
              href={"/hooks/state_management/use_session_storage"}
            >
              useSessionStorage
            </Link>{" "}
            추가
          </p>
        </div>
      ),
    },
  ];
  return (
    <div>
      <MainTitle main="Recent Updates" sub="최근 업데이트된 내용들을 기록" />
      <Timeline data={data} />
    </div>
  );
};

export default Page;
