"use client";
import { CodeBlock } from "@/components/ui/code-block";
import Description from "@/components/ui/description";
import MainTitle from "@/components/ui/main-title";
import SubTitle from "@/components/ui/sub-title";
import React from "react";

const Page = () => {
  return (
    <div>
      <MainTitle
        main="useLoading"
        sub="지연시간이 걸리는 작업을 수행할 때 로딩 중임을 사용자에게 알리기 위한 Hook 입니다."
      />
      <SubTitle># 간단한 설명</SubTitle>
      <Description>여기에 설명 넣기</Description>

      <CodeBlock
        language="jsx"
        tabs={[
          {
            name: "useLoading.tsx",
            code: ``,
            language: "tsx",
          },
          {
            name: "example.tsx",
            highlightLines: [],
            code: `
...
...`,
            language: "tsx",
          },
        ]}
      />
    </div>
  );
};

export default Page;
