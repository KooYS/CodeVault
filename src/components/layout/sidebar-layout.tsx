"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { SearchForm } from "@/components/ui/search-form";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { side_bar_menu } from "@/config/docs";

interface SideBarLayoutProps {
  children: React.ReactNode;
}
const SideBarLayout: React.FC<SideBarLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const breadcrumb = pathname.split("/").filter(Boolean);
  const [search, setSearch] = React.useState("");
  const [sidebarMenu, setSidebarMenu] = React.useState(side_bar_menu);
  const { push } = useRouter();
  React.useEffect(() => {
    const filtered = side_bar_menu.reduce(
      (
        acc: {
          title: string;
          url: string;
          items: {
            title: string;
            url: string;
            items?: {
              title: string;
              url: string;
            }[];
          }[];
        }[],
        menu
      ) => {
        const titleMatch = menu.title
          .toLowerCase()
          .includes(search.toLowerCase());
        const itemsMatch = menu.items.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        );
        if (titleMatch) {
          acc.push(menu);
        } else if (itemsMatch.length > 0) {
          acc.push({ ...menu, items: itemsMatch });
        }
        return acc;
      },
      []
    );

    setSidebarMenu(filtered);
  }, [search]);
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex flex-col gap-2">
            <div
              className="flex gap-2 p-2 items-center cursor-pointer"
              onClick={() => push("/")}
            >
              <div className="flex aspect-square size-10 items-center justify-center rounded-lg  text-sidebar-primary-foreground border p-px ">
                <Image
                  src="/logo.png"
                  alt="Code Vault"
                  width={38}
                  height={38}
                />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold">Code Vault</span>
                <span className="text-sm">v1.0.0</span>
              </div>
            </div>
            <SearchForm
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {sidebarMenu.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.url === pathname}>
                    <a href={item.url} className="font-medium">
                      {item.title}
                    </a>
                  </SidebarMenuButton>
                  {item.items?.length ? (
                    <SidebarMenuSub>
                      {item.items.map((sub_item) => (
                        <SidebarMenuSubItem key={sub_item.title}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={sub_item.url === pathname}
                          >
                            <a href={sub_item.url}>
                              <span className="truncate">{sub_item.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                          {"items" in sub_item && sub_item.items.length ? (
                            <SidebarMenuSub>
                              {sub_item.items.map((item) => (
                                <SidebarMenuSubItem key={item.title}>
                                  <SidebarMenuSubButton
                                    asChild
                                    isActive={item.url === pathname}
                                  >
                                    <a href={item.url}>
                                      <span className="truncate">
                                        {item.title}
                                      </span>
                                    </a>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          ) : null}
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    {breadcrumb.length > 0 &&
                      side_bar_menu.find(
                        (item) => item.url === `/${breadcrumb[0]}`
                      )?.title}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {breadcrumb.length > 1 && (
                  <BreadcrumbSeparator className="hidden md:block" />
                )}
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    {breadcrumb.length > 1 &&
                      side_bar_menu
                        .find((item) => item.url === `/${breadcrumb[0]}`)
                        ?.items?.find(
                          (sub_item) =>
                            sub_item.url ===
                            `/${breadcrumb[0]}/${breadcrumb[1]}`
                        )?.title}
                  </BreadcrumbPage>
                </BreadcrumbItem>

                {breadcrumb.length > 2 && (
                  <BreadcrumbSeparator className="hidden md:block" />
                )}
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    {breadcrumb.length > 2 &&
                      (
                        side_bar_menu
                          .find((item) => item.url === `/${breadcrumb[0]}`)
                          ?.items?.find(
                            (sub_item) =>
                              sub_item.url ===
                              `/${breadcrumb[0]}/${breadcrumb[1]}`
                          ) as {
                          title: string;
                          url: string;
                          items: { title: string; url: string }[];
                        }
                      ).items?.find(
                        (sub_item) =>
                          sub_item.url ===
                          `/${breadcrumb[0]}/${breadcrumb[1]}/${breadcrumb[2]}`
                      )?.title}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default SideBarLayout;
