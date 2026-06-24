export interface Project {
  id: string;
  title: string;
  description: string;
  details_text: string;
  thumbnail_image: string;
  gallery_images: string[];
  tags: string[];
  github_link?: string;
}

import projectsData from './projects.json';

export const projects: Project[] = projectsData;
