"use client";
import { CodeBlock } from "@/components/ui/code-block";
import Description from "@/components/ui/description";
import MainTitle from "@/components/ui/main-title";
import SubTitle from "@/components/ui/sub-title";
import React from "react";
import useMedia from "./useMedia";

const Page = () => {
  const { value: screenType } = useMedia<string>(
    [
      { query: "(max-width: 767px)", value: "mobile" },
      {
        query: "(min-width: 768px) and (max-width: 1200px)",
        value: "tablet",
      },
      { query: "(min-width: 1200px)", value: "pc" },
    ],
    "pc"
  );

  return (
    <div>
      <MainTitle
        main="useMedia"
        sub="현재 스크린 조건에 따른 value를 가져오는 Hook 입니다."
      />
      <SubTitle># 간단한 설명</SubTitle>
      <Description>
        해당 훅을 선언하고 화면에 대한 query와 현재 화면 상태에 따른 반환받을
        value를 설정하여 각 스크린 타입에 따른 조건부 렌더링을 할 수 있습니다.
        추가로 defaultValue를 설정할 수 있습니다.
      </Description>
      <Description className="my-10">현재 화면 : {screenType}</Description>

      <CodeBlock
        language="jsx"
        tabs={[
          {
            name: "useMedia.tsx",
            code: `import { useEffect, useState } from "react";

type MediaQuery<T> = { query: string; value: T };

export default function useMedia<T>(queries: MediaQuery<T>[], defaultValue: T) {
  const mediaQueryLists =
    typeof window !== "undefined"
      ? queries.map(({ query }) => window.matchMedia(query))
      : [];

  const getValue = () => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches);
    return index !== -1 ? queries[index].value : defaultValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    const handler = () => setValue(getValue);
    mediaQueryLists.forEach((mql) => mql.addEventListener("change", handler));
    return () =>
      mediaQueryLists.forEach((mql) =>
        mql.removeEventListener("change", handler)
      );
  }, []);

  return { value, getValue };
}
`,
            language: "tsx",
          },
          {
            name: "example.tsx",
            code: `
import useLoading from "./useLoading";

...
const { value: screenType } = useMedia<string>(
  [
    { query: "(max-width: 767px)", value: "mobile" },
    {
      query: "(min-width: 768px) and (max-width: 1200px)",
      value: "tablet",
    },
    { query: "(min-width: 1200px)", value: "pc" },
  ],
  "pc"
);

return (
    <div>
      {screenType}
    <div/>
);
...`,
            language: "tsx",
          },
        ]}
      />
    </div>
  );
};

export default Page;
