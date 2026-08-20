import { useEffect } from "react";

export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    if (description) {
      const el =
        document.querySelector('meta[name="description"]') ||
        (() => {
          const m = document.createElement("meta");
          m.name = "description";
          document.head.appendChild(m);
          return m;
        })();
      el.setAttribute("content", description);
    }
  }, [title, description]);
}