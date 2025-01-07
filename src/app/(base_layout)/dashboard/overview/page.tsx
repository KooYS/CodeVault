import React from "react";
import { CodeBlock } from "@/components/ui/code-block";
import MainTitle from "@/components/ui/main-title";
import SubTitle from "@/components/ui/sub-title";
import Description from "@/components/ui/description";

function CodeBlockDemoSecond() {
  const HTMLLanguage = `<div className="p-4 border rounded-lg">
  <h2 className="text-xl font-bold mb-4">Counter</h2>
  <p className="mb-2">Count: {count}</p>
  <button 
    onClick={handleClick}
    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
  >
    Increment
  </button>
</div>
`;

  const CSSLanguage = `.button {
  background-color: black;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
`;

  return (
    <div className="max-w-5xl w-full">
      <CodeBlock
        language="jsx"
        filename="SampleComponent.jsx"
        tabs={[
          {
            name: "SampleComponent.html",
            code: HTMLLanguage,
            language: "html",
          },
          {
            name: "SampleComponent.css",
            code: CSSLanguage,
            language: "css",
            highlightLines: [1, 2, 3],
          },
        ]}
      />
    </div>
  );
}

const Page = () => {
  return (
    <div>
      <MainTitle
        main="Overview"
        sub="주로 사용하는 Components, Hooks, Algorithms, Styles, Utilities를 기록"
      />
      <SubTitle>1. 간단한 사용방법</SubTitle>
      <Description>
        <b>좌측 사이드 바</b> 혹은 검색을 통하여 원하는 카테고리의 내용을
        확인하고 아래와 같은 CodeBlock에서 복사를 통해 사용하면 됩니다.
      </Description>
      <CodeBlockDemoSecond />
    </div>
  );
};

export default Page;
