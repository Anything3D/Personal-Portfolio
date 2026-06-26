import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { execSync } from 'child_process'

function generateProjectsPlugin() {
  return {
    name: 'generate-projects',
    handleHotUpdate({ file }: { file: string }) {
      if (file.endsWith('.md')) {
        console.log('Markdown file changed, regenerating projects...');
        execSync('node scripts/generate-projects.js');
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    generateProjectsPlugin()
  ],
  base: './', // Use relative paths for easy deployment on GitHub Pages
})
