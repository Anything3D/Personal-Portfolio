import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, '../public/content/projects');
const outputFile = path.join(__dirname, '../src/data/projects.json');

function generateProjects() {
  if (!fs.existsSync(contentDir)) {
    console.warn(`Directory not found: ${contentDir}`);
    fs.writeFileSync(outputFile, JSON.stringify([]));
    return;
  }

  const projects = [];
  const folders = fs.readdirSync(contentDir);

  for (const folder of folders) {
    const folderPath = path.join(contentDir, folder);
    if (fs.statSync(folderPath).isDirectory()) {
      const mdFiles = fs.readdirSync(folderPath).filter(f => f.endsWith('.md'));
      
      for (const mdFile of mdFiles) {
        const mdPath = path.join(folderPath, mdFile);
        const fileContent = fs.readFileSync(mdPath, 'utf-8');
        const { data, content } = matter(fileContent);

        projects.push({
          id: data.id || folder, // Default ID to folder name if not specified
          title: data.title || 'Untitled Project',
          description: data.description || '',
          thumbnail_image: data.thumbnail_image || '',
          gallery_images: data.gallery_images || [],
          tags: data.tags || [],
          github_link: data.github_link || '',
          details_text: content.trim(),
        });
      }
    }
  }

  fs.writeFileSync(outputFile, JSON.stringify(projects, null, 2));
  console.log(`Successfully generated projects.json with ${projects.length} projects.`);
}

generateProjects();
