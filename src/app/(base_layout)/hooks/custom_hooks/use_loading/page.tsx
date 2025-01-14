"use client";
import { CodeBlock } from "@/components/ui/code-block";
import Description from "@/components/ui/description";
import MainTitle from "@/components/ui/main-title";
import SubTitle from "@/components/ui/sub-title";
import React from "react";
import useLoading from "./useLoading";
import { Button } from "@/components/ui/button";

const Page = () => {
  const { Loading, setVisible, isVisible } = useLoading({
    defaultVisible: false,
  });

  React.useEffect(() => {
    if (isVisible)
      setTimeout(() => {
        setVisible(false);
      }, 2000);
  }, [isVisible]);
  return (
    <div>
      <Loading />
      <MainTitle
        main="useLoading"
        sub="지연시간이 걸리는 작업을 수행할 때 로딩 중임을 사용자에게 알리기 위한 Hook 입니다."
      />
      <SubTitle># 간단한 설명</SubTitle>
      <Description>
        <b>{`<Loading/>`}</b>를 선언하고 setVisible 혹은 isVisible를 활용하여
        화면 로딩을 표현할 수 있으며
        <b>{`<Loading/>`}</b>에 svg를 직접 수정하여 로딩 화면을 변경할 수
        있습니다. 아래의 Loading Trigger 버튼을 클릭하여 예제를 확인해볼 수
        있습니다.
      </Description>

      <Description className="mb-10">
        <Button
          onClick={() => {
            setVisible(true);
          }}
        >
          Loading Trigger (2초 뒤에 false로 전환)
        </Button>
      </Description>

      <CodeBlock
        language="jsx"
        tabs={[
          {
            name: "useLoading.tsx",
            code: `import React from "react";
import { createPortal } from "react-dom";

interface Props {
  visible: boolean;
}

const Loading = ({ visible }: Props) => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  React.useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;
    body.style.overflow = visible ? "hidden" : "";
  }, [visible]);
  return mounted && visible
    ? createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-40"></div>
          <div className="z-50"></div>
          <svg
            className="animate-spin w-14 h-14 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 
              12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>,
        document.body
      )
    : null;
};

interface LoadingProps {
  defaultVisible?: boolean;
}
const useLoading = (props?: LoadingProps) => {
  const [visible, setVisible] = React.useState(!!props?.defaultVisible);

  return {
    Loading: () => <Loading visible={visible} />,
    setVisible: setVisible,
    isVisible: visible,
  };
};

export default useLoading;`,
            language: "tsx",
          },
          {
            name: "example.tsx",
            highlightLines: [6, 7, 8, 13, 23, 19],
            code: `
import useLoading from "./useLoading";

...

const { Loading, setVisible, isVisible } = useLoading({
  defaultVisible: false,
});

React.useEffect(() => {
  if (isVisible)
    setTimeout(() => {
      setVisible(false);
    }, 2000);
}, [isVisible]);     

return (
    <div>
      <Loading />
    <div/>
    <Button
      onClick={() => {
        setVisible(true);
      }}
    >
      Loading Trigger (2초 뒤에 false로 전환)
    </Button>
)
...`,
            language: "tsx",
          },
        ]}
      />
    </div>
  );
};

export default Page;
