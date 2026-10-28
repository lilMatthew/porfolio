/**
 * Skills grid. `category` maps to a translatable label under
 * `Skills.categories.<category>`. Items are tech names (not translated).
 */
export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { category: "languages", items: ["Dart", "TypeScript", "JavaScript", "Java"] },
  {
    category: "frameworks",
    items: ["Flutter", "React Native", "Spring Boot", "NestJS"],
  },
  { category: "databases", items: ["MySQL", "PostgreSQL", "Firebase"] },
  {
    category: "tools",
    items: ["Git", "GitHub", "GitLab", "Postman", "Figma", "Swagger"],
  },
];
