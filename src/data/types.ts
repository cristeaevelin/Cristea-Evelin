export interface ProjectImage {
        src: string;
        title: string;
        description: string;
      }
      
      export interface ProjectBase {
        id: number;
        slug: string;
        title: string;
        description: string;
        link: string;
        fonts: string;
        colors: string;
        technologies: string;
      }
      
      export interface Project extends ProjectBase {
        images: ProjectImage[];
      }
      
      export interface ProjectImagesEntry {
        slug: string;
        images: ProjectImage[];
      }
      