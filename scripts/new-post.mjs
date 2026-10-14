// Usage: npm run new -- "My post title"
import { existsSync, writeFileSync } from 'node:fs';

const title = process.argv.slice(2).join(' ').trim();
if (!title) {
  console.error('Give the post a title: npm run new -- "My post title"');
  process.exit(1);
}

const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const file = `posts/${slug}.md`;
if (existsSync(file)) {
  console.error(`${file} already exists.`);
  process.exit(1);
}

const date = new Date().toISOString().slice(0, 10);
writeFileSync(
  file,
  `---\ntitle: ${JSON.stringify(title)}\ndescription: ""\ndate: ${date}\ntags: []\ndraft: true\n---\n\nStart writing here.\n`,
);
console.log(`Created ${file}. Set draft: false when it's ready to publish.`);
