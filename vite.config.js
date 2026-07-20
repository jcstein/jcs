import { defineConfig } from 'vite';
import { readFileSync, readdirSync } from 'fs';
import { resolve, extname, basename } from 'path';
import { marked } from 'marked';

const contentDir = resolve(__dirname, 'src/content');
const files = readdirSync(contentDir).filter(f => extname(f) === '.md');

function stripFrontmatter(raw) {
  return raw.replace(/^---\s*\n[\s\S]*?\n---\s*\n?/, '');
}

const sections = Object.fromEntries(
  files.map(file => {
    const raw = readFileSync(resolve(contentDir, file), 'utf-8');
    const key = basename(file, '.md').toUpperCase();
    const html = marked(stripFrontmatter(raw), {
      gfm: true,
      breaks: false,
      headerIds: false,
    });
    return [key, html];
  })
);

function markdownInject() {
  return {
    name: 'markdown-inject',
    transformIndexHtml(html) {
      return html.replace(/<!-- (HOME|ABOUT|PROJECTS|PRESENTATIONS|WORK|VERIFY) -->/g, (_, key) => {
        return sections[key] || '';
      });
    },
  };
}

export default defineConfig({
  plugins: [markdownInject()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
