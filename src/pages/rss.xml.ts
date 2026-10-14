import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../site.config';
import { getPosts } from '../utils';

export async function GET(context: APIContext) {
  const posts = (await getPosts()).filter((p) => !p.data.draft);
  const feedUrl = new URL('/rss.xml', context.site).href;
  return rss({
    title: SITE.title,
    description: SITE.tagline,
    site: context.site!,
    // Renders the feed as a readable page in browsers; feed readers ignore it.
    stylesheet: '/rss.xsl',
    xmlns: { atom: 'http://www.w3.org/2005/Atom' },
    customData: `<language>en-us</language><atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>`,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
      categories: post.data.tags,
    })),
  });
}
