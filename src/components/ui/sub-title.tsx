import { cn } from "@/lib/utils";
import React from "react";

interface TitleProps {
  className?: string;
  children: React.ReactNode;
}
const SubTitle: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <div className={cn("my-2", className)}>
      <h2 className="text-xl font-semibold tracking-tight">{children}</h2>
    </div>
  );
};

export default SubTitle;
