// src/data/schema.ts
import { z } from "zod";

export const ProjectImageSchema = z.object({
  src: z.string(),
  title: z.string(),
  description: z.string(),
});

export const ProjectMetaSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  link: z.string().url(),
  fonts: z.string(),
  colors: z.string(),
  technologies: z.string(),
});

export const ProjectImagesEntrySchema = z.object({
  slug: z.string(),
  images: z.array(ProjectImageSchema),
});

export const ProjectMetaListSchema = z.array(ProjectMetaSchema);
export const ProjectImagesListSchema = z.array(ProjectImagesEntrySchema);
