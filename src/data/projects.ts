/**
 * Project metadata. The `id` maps to translatable title/description under the
 * `Projects.items.<id>` namespace in `messages/*.json`. Tags are tech names
 * (not translated). Swap images/links for your real projects.
 */
export type Project = {
  id: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  cachedUrl?: string;
};

export const projects: Project[] = [
  {
    id: "chertnodes",
    image: "/portfolio/project-chertnodes.png",
    tags: ["HTML", "SCSS", "Python Flask"],
    liveUrl: "#",
    cachedUrl: "#",
  },
  {
    id: "protectx",
    image: "/portfolio/project-protectx.jpg",
    tags: ["Node.js", "Express", "Discord.js"],
    liveUrl: "#",
  },
  {
    id: "kahoot",
    image: "/portfolio/project-kahoot.jpg",
    tags: ["CSS", "Express", "Node.js"],
    liveUrl: "#",
  },
];
