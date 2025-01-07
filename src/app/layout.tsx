import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import SideBarLayout from "@/components/layout/sidebar-layout";

export const metadata: Metadata = {
  title: "Code Vault",
  description: "Code Vault by Koo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SideBarLayout>{children}</SideBarLayout>
        <Toaster />
      </body>
    </html>
  );
}
