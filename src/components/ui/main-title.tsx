import React from "react";

interface TitleProps {
  main: string | React.ReactNode;
  sub: string | React.ReactNode;
}
const MainTitle: React.FC<TitleProps> = ({ main, sub }) => {
  return (
    <div className="flex flex-col gap-2 mb-10">
      <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">{main}</h1>
      <p className="text-base text-muted-foreground">{sub}</p>
    </div>
  );
};

export default MainTitle;
