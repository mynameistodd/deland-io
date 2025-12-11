import fs from 'fs/promises';
import path from 'path';

function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

async function generate() {
    const posts = JSON.parse(await fs.readFile('blog-posts.json', 'utf-8'));

    for (const post of posts) {
        if (post.title === 'No Title') continue;

        const slug = slugify(post.title);
        const date = new Date(post.date);
        const formattedDate = isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();

        // Create a description from the first 150 chars of content (stripping HTML)
        const plainText = post.content.replace(/<[^>]+>/g, '');
        const description = plainText.substring(0, 150).replace(/"/g, '\\"') + '...';

        const fileContent = `---
title: "${post.title.replace(/"/g, '\\"')}"
description: "${description}"
pubDate: ${formattedDate}
---

${post.content}
`;

        await fs.writeFile(path.join('src/content/writing', `${slug}.md`), fileContent);
    }

    console.log(`Generated ${posts.length} markdown files.`);
}

generate();
