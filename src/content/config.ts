import { defineCollection, z } from "astro:content";

const Languages = [
  "C/C++",
  "Assembler",
  "Java",
  "(Visual) Basic",
  "Borland Delphi",
  "Turbo Pascal",
  ".NET",
  "Unspecified/other",
] as const;

const Platforms = [
  "DOS",
  "Mac OS X",
  "Multiplatform",
  "Unix/linux etc.",
  "Windows",
  "Windows 2000/XP only",
  "Windows 7 Only",
  "Windows Vista Only",
  "Unspecified/other",
] as const;

const Architectures = [
  "x86",
  "x86-64",
  "java",
  "ARM",
  "MIPS",
  "other",
] as const;

const Statuses = ["Not Started", "In Progress", "Done"] as const;

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    link: z.string().default("/REblog/blog"),
    creationDate: z.coerce.date().default(new Date()),
    uploadDate: z.coerce.date().default(new Date()),

    language: z.enum(Languages).default("Unspecified/other"),
    difficulty: z.number().min(1).max(6).default(1),
    quality: z.number().min(1).max(6).default(1),
    platform: z.enum(Platforms).default("Unspecified/other"),
    arch: z.enum(Architectures).default("other"),
    status: z.enum(Statuses).default("Not Started"),
  }),
});

export const collections = { blog };
