import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection('posts');
  return rss({
    title: 'Astro学習者 | ブログ',
    description: 'Astroを学ぶ旅',
    site: 'https://tiny-belekoy-1ca787.netlify.app',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>ja-jp</language>`,
  });
}