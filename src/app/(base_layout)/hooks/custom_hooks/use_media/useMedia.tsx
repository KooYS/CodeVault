import { useEffect, useState } from "react";

type MediaQuery<T> = { query: string; value: T };

export default function useMedia<T>(queries: MediaQuery<T>[], defaultValue: T) {
  const mediaQueryLists =
    typeof window !== "undefined"
      ? queries.map(({ query }) => window.matchMedia(query))
      : [];

  const getValue = () => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches);
    return index !== -1 ? queries[index].value : defaultValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    const handler = () => setValue(getValue);
    mediaQueryLists.forEach((mql) => mql.addEventListener("change", handler));
    return () =>
      mediaQueryLists.forEach((mql) =>
        mql.removeEventListener("change", handler)
      );
  }, []);

  return { value, getValue };
}
