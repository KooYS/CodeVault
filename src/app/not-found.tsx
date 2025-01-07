"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import React from "react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Card className="w-[420px] p-10">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl lg:text-6xl">404</CardTitle>
          <CardDescription>해당 페이지를 찾을 수 없습니다.</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-center">
          <Button onClick={() => router.back()}>뒤로가기</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
