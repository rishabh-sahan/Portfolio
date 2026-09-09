import { useEffect, useState } from "react";

/* Tracks which section id is currently most visible, for navbar scrollspy. */
export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0] ?? null);
  const idsKey = ids.join(",");

  useEffect(() => {
    if (ids.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // idsKey mirrors `ids` by value so the effect only reruns when the actual list of ids changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idsKey]);

  return activeId;
}
