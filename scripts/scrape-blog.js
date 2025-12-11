import puppeteer from 'puppeteer';
import fs from 'fs/promises';

async function scrape() {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    console.log('Navigating to blog...');
    await page.goto('https://todddeland.blogspot.com/', { waitUntil: 'networkidle0' });

    let allPosts = [];
    let pageCount = 1;

    while (true) {
        console.log(`Scraping page ${pageCount}...`);

        // Scrape posts on current page
        const posts = await page.evaluate(() => {
            const items = document.querySelectorAll('div.post');
            return Array.from(items).map(item => {
                const titleEl = item.querySelector('h3.post-title a');
                const dateEl = item.querySelector('a.timestamp-link');
                const dateHeaderEl = item.querySelector('h2.date-header span');
                const contentEl = item.querySelector('div.post-body');

                return {
                    title: titleEl ? titleEl.innerText.trim() : 'No Title',
                    date: dateEl ? dateEl.innerText.trim() : (dateHeaderEl ? dateHeaderEl.innerText.trim() : 'No Date'),
                    content: contentEl ? contentEl.innerHTML.trim() : ''
                };
            });
        });

        // Add new posts
        let newCount = 0;
        for (const post of posts) {
            // Simple duplicate check
            if (!allPosts.find(p => p.title === post.title)) {
                allPosts.push(post);
                newCount++;
            }
        }
        console.log(`Found ${posts.length} posts (${newCount} new). Total: ${allPosts.length}`);

        // Check for "More posts" link
        const moreLinkSelector = 'a.blog-pager-older-link';
        const moreLink = await page.$(moreLinkSelector);

        if (moreLink) {
            console.log('Clicking "More posts"...');
            try {
                await Promise.all([
                    page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 10000 }).catch(e => console.log('Navigation timeout or no nav')),
                    page.click(moreLinkSelector)
                ]);
                pageCount++;
                // Small delay to be nice and ensure render
                await new Promise(r => setTimeout(r, 2000));
            } catch (e) {
                console.error('Error clicking next:', e);
                break;
            }
        } else {
            console.log('No more posts link found.');
            break;
        }
    }

    await browser.close();

    await fs.writeFile('blog-posts.json', JSON.stringify(allPosts, null, 2));
    console.log('Saved to blog-posts.json');
}

scrape();
