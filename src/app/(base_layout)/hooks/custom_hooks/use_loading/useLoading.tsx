import React from "react";
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
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
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

export default useLoading;
