"use client";
import { CodeBlock } from "@/components/ui/code-block";
import Description from "@/components/ui/description";
import MainTitle from "@/components/ui/main-title";
import SubTitle from "@/components/ui/sub-title";
import React from "react";
import useSessionStorage from "./useSessionStorage";
import { Button } from "@/components/ui/button";
import Code from "@/components/ui/code";

const Page = () => {
  const { setItem, getItem, removeItem, getSession } = useSessionStorage();
  const [displayItem, setDisplayItem] = React.useState("");
  return (
    <div>
      <MainTitle
        main="useSessionStorage"
        sub="브라우저의 저장소인 SessionStorage 사용하기 위한 Hook 입니다."
      />
      <SubTitle># 간단한 설명</SubTitle>
      <Description>
        선언 후 함수명에 따라 사용하면 됩니다. setItem, getItem, removeItem 으로
        각각 설정, 불러오기, 삭제를 하면 되고 string으로 변환하여
        사용해야합니다.
      </Description>
      <Description>
        아래의 setItem을 누르면{" "}
        <Code>{`setItem("useSessionStorage", "Hello useSessionStorage")`}</Code>
        가 실행되고{" "}
      </Description>
      <Description>
        getItem을 누르면 useSessionStorage key를 가진 값을 가져와 화면에
        출력해줍니다.{" "}
      </Description>
      <Description>
        removeItem 을 누르면 해당 key를 가진 값을 삭제합니다.
      </Description>
      <Description>
        마지막으로 getSession 을 누르면 모든 Session이 출력됩니다.
      </Description>
      <Description>
        <b># 실제 Storage를 확인해보세요.</b>
        <div className="flex gap-2 my-5">
          <Button
            onClick={() =>
              setItem("useSessionStorage", "Hello useSessionStorage")
            }
          >
            setItem
          </Button>
          <Button
            onClick={() => setDisplayItem(getItem("useSessionStorage") || "")}
          >
            getItem
          </Button>
          <Button onClick={() => removeItem("useSessionStorage")}>
            removeItem
          </Button>
          <Button onClick={() => setDisplayItem(JSON.stringify(getSession()))}>
            getSession
          </Button>
        </div>
        {`getItem : `}
        {displayItem}
      </Description>

      <CodeBlock
        language="jsx"
        tabs={[
          {
            name: "useSessionStorage.tsx",
            code: `const useSessionStorage = () => {
    function setItem(key: string, item: string) {
        if (typeof window !== 'undefined') {
            sessionStorage.setItem(key, item);
        }
    }
    function getItem(key: string) {
        if (typeof window !== 'undefined') {
            return sessionStorage.getItem(key);
        }
        return null;
    }
    function removeItem(key: string) {
        if (typeof window !== 'undefined') {
            sessionStorage.removeItem(key);
        }
    }

    function getSession() {
        return Object.entries(sessionStorage);
    }
    return {
        setItem,
        getItem,
        removeItem,
        getSession,
    };
};

export default useSessionStorage;`,
            language: "tsx",
          },
          {
            name: "example.tsx",
            highlightLines: [],
            code: `...
import useSessionStorage from "./useSessionStorage";
const { setItem, getItem, removeItem } = useSessionStorage();

return (
  <div className="flex gap-2 my-5">
    <Button
      onClick={() =>
        setItem("useSessionStorage", "Hello useSessionStorage")
      }
    >
      setItem
    </Button>
    <Button
      onClick={() => setDisplayItem(getItem("useSessionStorage") || "")}
    >
      getItem
    </Button>
    <Button onClick={() => removeItem("useSessionStorage")}>
      removeItem
    </Button>
    <Button onClick={() => setDisplayItem(JSON.stringify(getSession()))}>
      getSession
    </Button>
  </div>
  {\`getItem : \`}
  {displayItem}
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
