/**
 * Project metadata. The `id` maps to translatable title/description under the
 * `Projects.items.<id>` namespace in `messages/*.json`. Tags/period are not
 * translated. Add an `image` (e.g. "/portfolio/uniclove.png") to show a real
 * screenshot; otherwise a generated gradient banner is rendered.
 */
export type Project = {
  id: string;
  period: string;
  image?: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "uniclove",
    period: "04/2025 – 08/2025",
    tags: ["React Native", "TypeScript", "Redux Toolkit", "Reanimated", "WebSocket"],
  },
  {
    id: "dms",
    period: "08/2025 – 10/2025",
    tags: ["React Native", "TypeScript", "Redux Toolkit", "Axios", "RN Maps"],
  },
  {
    id: "warehouse",
    period: "10/2025 – 12/2025",
    tags: ["React Native", "TypeScript", "Redux Toolkit", "React Hook Form"],
  },
  {
    id: "saleorder",
    period: "01/2026 – 04/2026",
    tags: ["React Native", "TypeScript", "Redux Toolkit", "Axios", "MMKV"],
  },
  {
    id: "purchaseorder",
    period: "01/2026 – 04/2026",
    tags: ["React Native", "TypeScript", "Axios", "MMKV"],
  },
];
