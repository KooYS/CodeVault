// page.tsx

import MainTitle from "@/components/ui/main-title";
import { type MenuItem, side_bar_menu } from "@/config/docs";
import { ArrowBigRight } from "lucide-react";

function findMenuByPath(menu: MenuItem[], path: string): MenuItem | null {
  for (const item of menu) {
    if (item.url === path) return item;
    if (item.items) {
      const result = findMenuByPath(item.items, path);
      if (result) return result;
    }
  }
  return null;
}

interface PageProps {
  params: Promise<{
    path?: string[];
  }>;
}

const removeEmoji = (text: string) => {
  return text.replace(/[\p{Emoji_Presentation}\p{Emoji}\u200d]+/gu, "");
};

const Page = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const path = `/${resolvedParams.path?.join("/") || ""}`; // 현재 URL 경로
  const currentMenu = findMenuByPath(side_bar_menu, path);

  if (!currentMenu) {
    return <div>Page not found</div>;
  }

  return (
    <div>
      <MainTitle main={removeEmoji(currentMenu.title)} />
      {currentMenu.items && (
        <nav aria-label="Table of contents">
          <ul className="space-y-2">
            {currentMenu.items.map((subItem) => (
              <li
                key={subItem.url}
                className="cursor-pointer hover:bg-gray-100"
              >
                <a
                  href={subItem.url}
                  className="flex justify-between p-4 border rounded-md  "
                >
                  {removeEmoji(subItem.title)}
                  <span className="flex gap-2 items-center font-semibold bounce-right">
                    Link <ArrowBigRight className="w-5 h-5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Page;
