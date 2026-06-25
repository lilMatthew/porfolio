/**
 * Skills grid. `category` maps to a translatable label under
 * `Skills.categories.<category>`. Items are tech names (not translated).
 */
export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { category: "languages", items: ["TypeScript", "Lua", "Python", "JavaScript"] },
  { category: "databases", items: ["SQLite", "PostgreSQL", "MongoDB"] },
  { category: "tools", items: ["VSCode", "Neovim", "Linux", "Figma", "Git"] },
  { category: "other", items: ["HTML", "CSS", "SCSS", "REST", "JSON"] },
  { category: "frameworks", items: ["React", "Vue", "Astro", "Flask", "Express.js"] },
];
