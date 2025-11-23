// src/data/loadProjects.ts
import type { Project, ProjectImagesEntry } from "./types";
import {
  ProjectMetaListSchema,
  ProjectImagesListSchema,
} from "./schema";

import metaRaw from "./projects.meta.json";
import imagesRaw from "./projects.images.json";

const metaParsed = ProjectMetaListSchema.parse(metaRaw);
const imagesParsed = ProjectImagesListSchema.parse(imagesRaw);

const imagesBySlug = new Map<string, ProjectImagesEntry["images"]>();

for (const entry of imagesParsed) {
  imagesBySlug.set(entry.slug, entry.images);
}

export const projects: Project[] = metaParsed.map((project) => {
  const images = imagesBySlug.get(project.slug);

  if (!images) {
    console.warn(`[projects] No images found for project slug: ${project.slug}`);
  }

  return {
    ...project,
    images: images ?? [],
  };
});
