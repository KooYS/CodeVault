import { cn } from "@/lib/utils";
import React from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}
const Description: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <div className={cn("my-2", className)}>
      <h2 className="text-base text-gray-700">{children}</h2>
    </div>
  );
};

export default Description;
