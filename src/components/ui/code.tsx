import { cn } from "@/lib/utils";
import React from "react";

interface CodeProps {
  children: React.ReactNode;
  className?: string;
}
const Code: React.FC<CodeProps> = ({ children, className }) => {
  return (
    <code
      className={cn(
        "bg-gray-800 text-orange-400 text-xs rounded-lg p-[6px] h-9 mx-1",
        className
      )}
    >
      {children}
    </code>
  );
};

export default Code;
