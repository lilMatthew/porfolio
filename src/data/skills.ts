/**
 * Skills grid. `category` maps to a translatable label under
 * `Skills.categories.<category>`. Items are tech names (not translated).
 */
export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { category: "languages", items: ["JavaScript", "TypeScript"] },
  {
    category: "frameworks",
    items: ["React Native", "NestJS"],
  },
  { category: "databases", items: ["PostgreSQL", "Firebase"] },
  {
    category: "tools",
    items: ["Git", "GitHub", "GitLab", "Postman", "Figma", "Swagger"],
  },
];
