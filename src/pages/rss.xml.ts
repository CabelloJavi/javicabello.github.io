import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('writing', ({ data }) => !data.draft);
  return rss({
    title: 'Javi Cabello — Writing',
    description:
      'Long-form writing on agent identity, verifiable credentials, blockchain, and post-quantum cryptography.',
    site: context.site!,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/writing/${post.id}`,
      })),
    customData: '<language>en-us</language>',
  });
}
